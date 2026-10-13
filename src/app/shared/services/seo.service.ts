import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_DATA } from '../data/site.data';

/**
 * Metadonnees SEO d'une page, declarees dans app.routes.ts (data.seo).
 * - title       : < 60 caracteres, sinon Google le tronque dans les resultats
 * - description : < 155 caracteres, meme raison
 * - path        : chemin absolu depuis la racine, sert a construire l'URL canonique
 */
export interface SeoData {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  /**
   * Applique les metadonnees de la page courante.
   * Fonctionne aussi pendant le prerendu : les balises sont serialisees
   * dans le HTML statique de chaque route.
   */
  update(data: SeoData): void {
    const url = this.absoluteUrl(data.path);

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({
      name: 'robots',
      content: data.noindex ? 'noindex, follow' : 'index, follow'
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: data.ogType ?? 'website' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });

    this.setCanonical(url);
  }

  /** Construit l'URL absolue a partir du domaine declare dans SITE_DATA. */
  private absoluteUrl(path: string): string {
    const base = SITE_DATA.url.replace(/\/$/, '');
    if (path === '/' || path === '') {
      return `${base}/`;
    }
    return base + (path.startsWith('/') ? path : `/${path}`);
  }

  /**
   * Met a jour <link rel="canonical">, ou le cree s'il n'existe pas.
   * Sans ca, toutes les pages prerendues heritent du canonical de index.html
   * et se declarent comme des doublons de l'accueil.
   */
  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
