/**
 * Genere les declinaisons d'images de marque a partir des sources Bon Declic.
 *
 *   node scripts/generer-images.mjs
 *
 * Sources (a committer, ne pas supprimer) :
 *   public/assets/icon-bondeclic.png   - icone carree, 1254x1254
 *   public/assets/logo-bondeclic.png   - logo complet avec texte, 2172x724
 *
 * Tout ce qui est genere ici est reproductible : en cas de doute, relancer.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const PUBLIC = 'public';
const ICONE = join(PUBLIC, 'assets', 'icon-bondeclic.png');
const LOGO = join(PUBLIC, 'assets', 'logo-bondeclic.png');

/** Favicons et icone Apple, derives de l'icone carree. */
const ICONES = [
  { fichier: 'favicon-32.png', taille: 32 },
  { fichier: 'favicon-192.png', taille: 192 },
  { fichier: 'favicon-512.png', taille: 512 },
  { fichier: 'apple-touch-icon.png', taille: 180 }
];

async function genererIcones() {
  for (const { fichier, taille } of ICONES) {
    const sortie = join(PUBLIC, fichier);
    await sharp(ICONE)
      .resize(taille, taille, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(sortie);
    console.log(`  ${fichier.padEnd(24)} ${taille}x${taille}`);
  }

  // apple-touch-icon ne gere pas la transparence : fond blanc impose,
  // sinon iOS affiche l'icone sur du noir.
  const apple = join(PUBLIC, 'apple-touch-icon.png');
  await sharp(ICONE)
    .resize(180, 180, { fit: 'contain', background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .png({ compressionLevel: 9 })
    .toFile(apple + '.tmp');
  const { rename } = await import('node:fs/promises');
  await rename(apple + '.tmp', apple);
  console.log('  apple-touch-icon.png     aplati sur fond blanc');
}

/** Image de partage social : 1200x630, logo centre sur fond blanc. */
async function genererOgImage() {
  const LARGEUR = 1200;
  const HAUTEUR = 630;

  const logo = await sharp(LOGO)
    .resize({ width: Math.round(LARGEUR * 0.62), fit: 'inside', withoutEnlargement: false })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: LARGEUR,
      height: HAUTEUR,
      channels: 3,
      background: '#ffffff'
    }
  })
    .composite([{ input: logo, gravity: 'centre' }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(join(PUBLIC, 'og-image.jpg'));

  console.log(`  og-image.jpg             ${LARGEUR}x${HAUTEUR}`);
}

/**
 * Versions WebP legeres du logo. Hauteur 80 pour l'en-tete et le pied de page
 * (affiches en 32-40px, on double pour les ecrans haute densite).
 */
async function genererLogoWeb() {
  for (const hauteur of [80, 160]) {
    const fichier = `logo-bondeclic-${hauteur}.webp`;
    await sharp(LOGO)
      .resize({ height: hauteur, fit: 'inside' })
      .webp({ quality: 90 })
      .toFile(join(PUBLIC, 'assets', fichier));
    console.log(`  ${fichier.padEnd(24)} hauteur ${hauteur}px`);
  }

  // Icone seule, utilisee dans le pied de page sur fond sombre
  // (le texte du logo complet est noir, illisible sur fond fonce).
  await sharp(ICONE)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 90 })
    .toFile(join(PUBLIC, 'assets', 'icon-bondeclic-64.webp'));
  console.log('  icon-bondeclic-64.webp   64x64');
}

await mkdir(PUBLIC, { recursive: true });
console.log('Generation des images de marque :');
await genererIcones();
await genererOgImage();
await genererLogoWeb();
console.log('Termine.');
