# Implementation Plan: Site Vitrine SEO creation-site-web-local.fr

**Branch**: `001-site-vitrine-seo` | **Date**: 2025-12-30 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-site-vitrine-seo/spec.md`

---

## Summary

Création d'un site vitrine mono-page en Angular avec rendu statique (SSG), optimisé pour le SEO et la conversion. Le site cible les artisans et commerçants cherchant à créer leur site web professionnel.

---

## Technical Context

**Language/Version**: TypeScript 5.x, Angular 18+
**Primary Dependencies**: Angular, Angular SSR/SSG (ou Analog.js pour SSG simplifié)
**Storage**: N/A (site statique, pas de base de données)
**Testing**: Jasmine/Karma (unit), Lighthouse CI (performance/SEO)
**Target Platform**: Web (mobile-first), hébergement statique (Netlify/Vercel)
**Project Type**: Single web application (SPA avec SSG)
**Performance Goals**: Lighthouse 90+ (Performance, SEO, Accessibility)
**Constraints**: LCP < 2.5s, CLS < 0.1, pas de backend, formulaire via service tiers
**Scale/Scope**: 1 page principale + 2 pages légales, ~10 sections

---

## Constitution Check

*GATE: Vérification de conformité avec la constitution avant implémentation.*

| Principe | Conformité | Notes |
|----------|------------|-------|
| I. SEO-First | ✅ | SSG, Schema.org, meta tags, structure sémantique |
| II. Conversion-Oriented | ✅ | CTAs multiples, formulaire simple, bouton appel |
| III. Image Premium | ✅ | Design moderne, animations sobres, responsive |
| IV. Performance-Driven | ✅ | SSG, lazy loading, optimisation images |
| V. Simplicité Technique | ✅ | Angular + SSG, pas de backend, formulaire tiers |

**Résultat**: ✅ Tous les principes respectés.

---

## Décisions Techniques

### Framework: Angular 18+ avec SSG

**Pourquoi Angular**:
- Requis par le client
- Excellente toolchain (CLI, build, optimization)
- Support SSR/SSG natif depuis v17

**Options SSG évaluées**:

| Option | Avantages | Inconvénients | Choix |
|--------|-----------|---------------|-------|
| Angular Universal (SSG mode) | Officiel, bien documenté | Config plus lourde | ❌ |
| Analog.js | SSG natif, simple, file-based routing | Moins mature | ✅ Recommandé |
| Scully | Historique, stable | Moins maintenu | ❌ |

**Décision**: **Analog.js** pour sa simplicité SSG native et son intégration Angular transparente.

### Hébergement: Netlify

**Pourquoi Netlify**:
- Gratuit pour sites statiques
- CDN mondial performant
- Netlify Forms intégré (formulaire sans backend)
- Deploy preview automatique
- SSL automatique

### Formulaire: Netlify Forms

**Pourquoi Netlify Forms**:
- Zéro backend à gérer
- Notification email native
- Protection spam intégrée
- Gratuit jusqu'à 100 soumissions/mois

**Alternative**: Formspree si hébergement hors Netlify.

### CSS: Tailwind CSS

**Pourquoi Tailwind**:
- Utility-first, rapide à développer
- Purge CSS automatique (petit bundle)
- Responsive natif
- Design system cohérent

### Animations: CSS natives + Intersection Observer

**Pourquoi**:
- Performant (pas de lib JS lourde)
- Contrôle fin du timing
- Lazy animations (seulement quand visible)

---

## Project Structure

### Documentation (this feature)

```text
specs/001-site-vitrine-seo/
├── clarify.md           # Questions et clarifications
├── spec.md              # Spécifications fonctionnelles
├── plan.md              # Ce fichier (plan d'implémentation)
├── checklist.md         # Checklist de validation
└── tasks.md             # Tâches d'implémentation
```

### Source Code (repository root)

```text
creation-site-web-local/
├── src/
│   ├── app/
│   │   ├── components/           # Composants réutilisables
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   ├── cta-button/
│   │   │   ├── contact-form/
│   │   │   ├── section-hero/
│   │   │   ├── section-services/
│   │   │   ├── section-pour-qui/
│   │   │   ├── section-pourquoi-moi/
│   │   │   ├── section-methode/
│   │   │   ├── section-tarifs/
│   │   │   ├── section-temoignages/
│   │   │   └── section-contact/
│   │   ├── pages/                # Pages (routing)
│   │   │   ├── home/
│   │   │   ├── mentions-legales/
│   │   │   └── politique-confidentialite/
│   │   ├── shared/               # Services, directives, pipes
│   │   │   ├── services/
│   │   │   │   └── seo.service.ts
│   │   │   ├── directives/
│   │   │   │   └── animate-on-scroll.directive.ts
│   │   │   └── data/
│   │   │       ├── services.data.ts
│   │   │       ├── metiers.data.ts
│   │   │       └── seo.data.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero/
│   │   │   ├── icons/
│   │   │   └── og-image.jpg
│   │   └── fonts/
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _animations.scss
│   │   ├── _typography.scss
│   │   └── styles.scss
│   ├── index.html
│   └── main.ts
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── angular.json
├── tailwind.config.js
├── package.json
└── README.md
```

**Structure Decision**: Single project avec structure modulaire par composants. Chaque section de la landing page est un composant autonome pour faciliter la maintenance et les tests.

---

## SEO Implementation

### Meta Tags (index.html + SeoService)

```html
<title>Création de site web pour artisans et commerçants | Romain</title>
<meta name="description" content="Votre site internet professionnel créé sur mesure. Artisans, commerçants, indépendants : soyez visible sur Google. Devis gratuit.">
<meta name="keywords" content="création site web, site internet artisan, site vitrine, référencement local">
<link rel="canonical" href="https://creation-site-web-local.fr/">
```

### Open Graph

```html
<meta property="og:title" content="Création de site web pour artisans | Romain">
<meta property="og:description" content="Votre site internet professionnel créé sur mesure. Devis gratuit.">
<meta property="og:image" content="https://creation-site-web-local.fr/assets/images/og-image.jpg">
<meta property="og:url" content="https://creation-site-web-local.fr/">
<meta property="og:type" content="website">
```

### Schema.org LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Romain - Création de sites web",
  "description": "Création de sites internet pour artisans, commerçants et professions libérales",
  "url": "https://creation-site-web-local.fr",
  "telephone": "[À COMPLÉTER]",
  "email": "[À COMPLÉTER]",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "areaServed": "France",
  "serviceType": ["Création de site web", "Référencement local", "Site vitrine"],
  "sameAs": []
}
```

---

## Performance Optimization

### Images

- Format: WebP avec fallback JPEG
- Lazy loading natif (`loading="lazy"`)
- Dimensions explicites (width/height) pour éviter CLS
- Compression: 80% qualité WebP

### CSS/JS

- Tailwind CSS avec purge (production)
- Critical CSS inline
- JS minifié et tree-shaken
- Pas de polyfills inutiles (pas IE11)

### Fonts

- System font stack prioritaire
- Si custom font: preload + font-display: swap
- Subset minimal (latin)

---

## Responsive Breakpoints

```scss
// Tailwind defaults
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

**Mobile-first**: Styles de base pour mobile, media queries pour desktop.

---

## Animations Strategy

### Scroll Animations

- Intersection Observer API
- Classes CSS pour animations (fade-in, slide-up)
- `prefers-reduced-motion` respecté
- Throttling pour performance

### Transitions

- Durée: 200-400ms
- Easing: ease-out pour entrées, ease-in pour sorties
- Propriétés animées: opacity, transform (GPU optimized)

---

## Accessibility Checklist

- [ ] Navigation clavier complète
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Contraste texte/fond AA minimum (4.5:1)
- [ ] Labels sur tous les inputs de formulaire
- [ ] Alt text sur toutes les images
- [ ] Structure heading logique (h1 > h2 > h3)
- [ ] Skip link vers contenu principal
- [ ] ARIA labels où nécessaire

---

## Deployment Pipeline

```text
1. Push sur main
   ↓
2. Netlify Build
   - npm install
   - npm run build (SSG)
   ↓
3. Lighthouse CI
   - Performance > 90
   - SEO > 95
   - Accessibility > 90
   ↓
4. Deploy Preview (PR)
   ou
   Deploy Production (main)
```

---

## Complexity Tracking

> Aucune violation de la constitution détectée.

| Item | Justification |
|------|---------------|
| Analog.js vs Angular Universal | Simplicité SSG, moins de config |
| Tailwind vs CSS custom | Productivité, purge automatique |
| Netlify Forms vs backend | Zéro maintenance, gratuit |

---

## Risks & Mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Analog.js moins mature | Moyen | Fallback Angular Universal si bloquant |
| Netlify Forms limite 100/mois | Faible | Upgrade payant ou Formspree |
| Images lourdes | Performance | Compression automatique, lazy loading |
| SEO local sans adresse | SEO | Focus sur national + ville implicite |

---

## Next Steps

1. ✅ Constitution validée
2. ✅ Plan technique défini
3. ➡️ Créer checklist de validation
4. ➡️ Définir les tâches d'implémentation
5. ⏳ Attendre validation des specs avant implémentation
