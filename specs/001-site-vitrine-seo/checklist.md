# Validation Checklist: Site Vitrine SEO creation-site-web-local.fr

**Purpose**: Checklist de validation avant mise en production
**Created**: 2025-12-30
**Feature**: [spec.md](./spec.md)

---

## Pre-Implementation (Avant de coder)

### Clarifications

- [ ] CHK-PRE-001 Questions Q1-Q5 du fichier clarify.md répondues
- [ ] CHK-PRE-002 Localisation géographique définie
- [ ] CHK-PRE-003 Coordonnées de contact confirmées
- [ ] CHK-PRE-004 Nom commercial / marque validé
- [ ] CHK-PRE-005 Stratégie tarification décidée

### Assets

- [ ] CHK-PRE-006 Nom de domaine creation-site-web-local.fr acheté
- [ ] CHK-PRE-007 Hébergement Netlify configuré
- [ ] CHK-PRE-008 Email professionnel créé (optionnel)

---

## SEO - Structure

- [ ] CHK-SEO-001 Balise `<title>` unique et < 60 caractères
- [ ] CHK-SEO-002 Meta description engageante < 155 caractères
- [ ] CHK-SEO-003 Un seul H1 par page
- [ ] CHK-SEO-004 Hiérarchie H1 > H2 > H3 respectée
- [ ] CHK-SEO-005 URLs propres sans paramètres inutiles
- [ ] CHK-SEO-006 Balise canonical présente
- [ ] CHK-SEO-007 Balises hreflang si multilingue (N/A ici)

### SEO - Contenu

- [ ] CHK-SEO-008 Mots-clés principaux dans H1 et premier paragraphe
- [ ] CHK-SEO-009 Mots-clés secondaires dans H2
- [ ] CHK-SEO-010 Contenu > 1000 mots sur la page principale
- [ ] CHK-SEO-011 Pas de contenu dupliqué
- [ ] CHK-SEO-012 Texte alternatif sur toutes les images

### SEO - Technique

- [ ] CHK-SEO-013 Schema.org LocalBusiness implémenté
- [ ] CHK-SEO-014 Schema.org valide (test Google Rich Results)
- [ ] CHK-SEO-015 sitemap.xml généré et valide
- [ ] CHK-SEO-016 robots.txt autorisant indexation
- [ ] CHK-SEO-017 Open Graph tags complets
- [ ] CHK-SEO-018 Twitter Card tags (optionnel)
- [ ] CHK-SEO-019 Favicon multi-résolution
- [ ] CHK-SEO-020 Lighthouse SEO Score > 95

---

## Performance

### Core Web Vitals

- [ ] CHK-PER-001 Lighthouse Performance Score > 90
- [ ] CHK-PER-002 First Contentful Paint (FCP) < 1.8s
- [ ] CHK-PER-003 Largest Contentful Paint (LCP) < 2.5s
- [ ] CHK-PER-004 Cumulative Layout Shift (CLS) < 0.1
- [ ] CHK-PER-005 First Input Delay (FID) < 100ms
- [ ] CHK-PER-006 Time to Interactive (TTI) < 3s

### Optimisations

- [ ] CHK-PER-007 Images en WebP avec fallback
- [ ] CHK-PER-008 Lazy loading sur images below-the-fold
- [ ] CHK-PER-009 Dimensions width/height sur toutes les images
- [ ] CHK-PER-010 CSS critique inline
- [ ] CHK-PER-011 JS minifié et bundlé
- [ ] CHK-PER-012 Pas de render-blocking resources
- [ ] CHK-PER-013 Gzip/Brotli activé sur serveur
- [ ] CHK-PER-014 Cache headers configurés

---

## Accessibilité

### WCAG 2.1 AA

- [ ] CHK-ACC-001 Lighthouse Accessibility Score > 90
- [ ] CHK-ACC-002 Contraste texte/fond ratio 4.5:1 minimum
- [ ] CHK-ACC-003 Contraste grands textes ratio 3:1 minimum
- [ ] CHK-ACC-004 Focus visible sur éléments interactifs
- [ ] CHK-ACC-005 Navigation clavier fonctionnelle
- [ ] CHK-ACC-006 Skip link vers contenu principal
- [ ] CHK-ACC-007 Labels sur tous les inputs
- [ ] CHK-ACC-008 ARIA labels si nécessaire
- [ ] CHK-ACC-009 Pas de CAPTCHA inaccessible
- [ ] CHK-ACC-010 prefers-reduced-motion respecté

---

## Responsive & Mobile

- [ ] CHK-MOB-001 Viewport meta tag présent
- [ ] CHK-MOB-002 Site 100% fonctionnel sur mobile 320px
- [ ] CHK-MOB-003 Boutons tactiles > 44px
- [ ] CHK-MOB-004 Pas de scroll horizontal
- [ ] CHK-MOB-005 Texte lisible sans zoom (16px minimum)
- [ ] CHK-MOB-006 Formulaire utilisable sur mobile
- [ ] CHK-MOB-007 Bouton "Appeler" cliquable (tel:)
- [ ] CHK-MOB-008 Sticky CTA sur mobile fonctionnel
- [ ] CHK-MOB-009 Test sur iOS Safari
- [ ] CHK-MOB-010 Test sur Android Chrome

---

## Conversion

### CTAs

- [ ] CHK-CVR-001 CTA principal visible sans scroll (above the fold)
- [ ] CHK-CVR-002 Minimum 3 CTAs sur la page
- [ ] CHK-CVR-003 CTAs avec texte d'action clair
- [ ] CHK-CVR-004 Couleur CTA contrastée et cohérente
- [ ] CHK-CVR-005 Hover/focus states sur CTAs

### Formulaire

- [ ] CHK-CVR-006 Formulaire < 4 champs obligatoires
- [ ] CHK-CVR-007 Labels clairs sur chaque champ
- [ ] CHK-CVR-008 Validation côté client
- [ ] CHK-CVR-009 Messages d'erreur explicites
- [ ] CHK-CVR-010 Confirmation après soumission
- [ ] CHK-CVR-011 Email de notification envoyé
- [ ] CHK-CVR-012 Protection anti-spam (honeypot)
- [ ] CHK-CVR-013 HTTPS sur soumission

### Réassurance

- [ ] CHK-CVR-014 Mention "Gratuit" visible
- [ ] CHK-CVR-015 Mention "Sans engagement" visible
- [ ] CHK-CVR-016 Coordonnées affichées
- [ ] CHK-CVR-017 Section témoignages préparée (même vide)

---

## Contenu

### Sections Obligatoires

- [ ] CHK-CNT-001 Hero avec accroche claire
- [ ] CHK-CNT-002 Section Services complète
- [ ] CHK-CNT-003 Section Pour Qui avec métiers
- [ ] CHK-CNT-004 Section Pourquoi Moi
- [ ] CHK-CNT-005 Section Méthode/Process
- [ ] CHK-CNT-006 Section Tarifs
- [ ] CHK-CNT-007 Section Contact avec formulaire
- [ ] CHK-CNT-008 Footer avec liens légaux

### Qualité du Contenu

- [ ] CHK-CNT-009 Pas de fautes d'orthographe
- [ ] CHK-CNT-010 Ton cohérent (tutoiement ou vouvoiement)
- [ ] CHK-CNT-011 Pas de jargon technique
- [ ] CHK-CNT-012 Phrases courtes et claires
- [ ] CHK-CNT-013 Bénéfices client mis en avant

---

## Légal & RGPD

- [ ] CHK-LEG-001 Mentions légales complètes
- [ ] CHK-LEG-002 Politique de confidentialité
- [ ] CHK-LEG-003 Consentement cookies si analytics
- [ ] CHK-LEG-004 Information utilisation données sur formulaire
- [ ] CHK-LEG-005 Lien "Contact" ou email visible
- [ ] CHK-LEG-006 SIRET/SIREN affiché (si applicable)

---

## Technique

### Build & Deploy

- [ ] CHK-TEC-001 Build production sans erreurs
- [ ] CHK-TEC-002 SSG fonctionnel (HTML statique généré)
- [ ] CHK-TEC-003 Toutes les routes pré-rendues
- [ ] CHK-TEC-004 Assets correctement hashés (cache busting)
- [ ] CHK-TEC-005 Deploy Netlify réussi

### Sécurité

- [ ] CHK-TEC-006 HTTPS forcé (redirect HTTP)
- [ ] CHK-TEC-007 Headers sécurité (CSP, X-Frame-Options)
- [ ] CHK-TEC-008 Pas d'info sensible dans le code source
- [ ] CHK-TEC-009 Formulaire protégé CSRF (si applicable)

### Compatibilité

- [ ] CHK-TEC-010 Chrome dernière version ✓
- [ ] CHK-TEC-011 Firefox dernière version ✓
- [ ] CHK-TEC-012 Safari dernière version ✓
- [ ] CHK-TEC-013 Edge dernière version ✓
- [ ] CHK-TEC-014 iOS Safari ✓
- [ ] CHK-TEC-015 Android Chrome ✓

---

## Post-Launch

- [ ] CHK-POST-001 Google Search Console configurée
- [ ] CHK-POST-002 Sitemap soumis à Google
- [ ] CHK-POST-003 Google Analytics / Plausible installé (optionnel)
- [ ] CHK-POST-004 Test formulaire en production
- [ ] CHK-POST-005 Vérification emails reçus
- [ ] CHK-POST-006 Monitoring uptime configuré (optionnel)
- [ ] CHK-POST-007 Backup du code source

---

## Résumé Validation

| Catégorie | Items | Validés | Status |
|-----------|-------|---------|--------|
| Pre-Implementation | 8 | - | ⏳ |
| SEO | 20 | - | ⏳ |
| Performance | 14 | - | ⏳ |
| Accessibilité | 10 | - | ⏳ |
| Mobile | 10 | - | ⏳ |
| Conversion | 17 | - | ⏳ |
| Contenu | 13 | - | ⏳ |
| Légal | 6 | - | ⏳ |
| Technique | 15 | - | ⏳ |
| Post-Launch | 7 | - | ⏳ |
| **TOTAL** | **120** | **-** | **⏳** |

---

## Notes

- Cocher les items au fur et à mesure : `[x]`
- Ajouter des commentaires si blocage
- Items critiques marqués en priorité dans tasks.md
- Validation finale par Lighthouse CI automatisée
