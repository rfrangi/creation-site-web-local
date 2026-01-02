# Tasks: Site Vitrine SEO creation-site-web-local.fr

**Input**: Design documents from `specs/001-site-vitrine-seo/`
**Prerequisites**: plan.md (required), spec.md (required), clarify.md

**Tests**: Tests Lighthouse CI inclus pour validation SEO/Performance.

**Organization**: Tâches organisées par phase logique et par user story.

---

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Peut être exécuté en parallèle (fichiers différents, pas de dépendances)
- **[Story]**: US1=Découverte Google, US2=Compréhension, US3=Contact, US4=Mobile, US5=Image, US6=Performance

---

## Phase 1: Setup (Infrastructure Projet)

**Purpose**: Initialisation du projet Angular avec Analog.js et configuration de base.

- [ ] T001 Initialiser le projet Angular 18+ avec `ng new creation-site-web-local --style=scss --routing`
- [ ] T002 Installer et configurer Analog.js pour SSG (`npm install @analogjs/platform`)
- [ ] T003 [P] Installer et configurer Tailwind CSS (`npm install tailwindcss postcss autoprefixer`)
- [ ] T004 [P] Configurer la structure de dossiers selon plan.md (components/, pages/, shared/)
- [ ] T005 [P] Créer le fichier `tailwind.config.js` avec les breakpoints et couleurs du projet
- [ ] T006 [P] Créer les fichiers SCSS de base (`_variables.scss`, `_animations.scss`, `_typography.scss`)
- [ ] T007 Configurer le build SSG dans `vite.config.ts` (Analog)
- [ ] T008 [P] Créer `public/robots.txt` autorisant l'indexation
- [ ] T009 [P] Créer le template `public/sitemap.xml`

**Checkpoint**: Projet démarre sans erreur, `npm run build` génère du HTML statique.

---

## Phase 2: Fondations SEO & Meta (Bloque toutes les US)

**Purpose**: Infrastructure SEO indispensable avant tout contenu.

- [ ] T010 Créer `src/app/shared/services/seo.service.ts` pour gestion des meta tags
- [ ] T011 Configurer `index.html` avec meta tags de base (title, description, viewport, charset)
- [ ] T012 [P] Implémenter les balises Open Graph dans `index.html`
- [ ] T013 [P] Créer `src/app/shared/data/seo.data.ts` avec les données SEO centralisées
- [ ] T014 Implémenter Schema.org LocalBusiness en JSON-LD dans `index.html`
- [ ] T015 [P] Créer les favicons multi-résolution et les configurer
- [ ] T016 [P] Configurer les balises canonical

**Checkpoint**: Lighthouse SEO Score > 90 sur page vide.

---

## Phase 3: User Story 1 & 2 - Structure Page & Contenu (Priority: P1) 🎯 MVP

**Goal**: Le visiteur arrive sur le site et comprend l'offre en < 10 secondes.

**Independent Test**: La page affiche tout le contenu structuré avec bonne hiérarchie HTML.

### Layout & Navigation

- [ ] T017 [US1][US2] Créer `src/app/components/header/` avec navigation et logo
- [ ] T018 [P] [US1][US2] Créer `src/app/components/footer/` avec liens légaux et coordonnées
- [ ] T019 [US1][US2] Créer `src/app/pages/home/` comme page principale
- [ ] T020 [P] [US1][US2] Créer `src/app/components/cta-button/` réutilisable

### Sections de Contenu

- [ ] T021 [US2] Créer `src/app/components/section-hero/` avec H1, sous-titre, CTA principal
- [ ] T022 [P] [US2] Créer `src/app/shared/data/services.data.ts` avec les offres
- [ ] T023 [US2] Créer `src/app/components/section-services/` avec les 3 offres
- [ ] T024 [P] [US2] Créer `src/app/shared/data/metiers.data.ts` avec les métiers cibles
- [ ] T025 [US2] Créer `src/app/components/section-pour-qui/` avec liste des métiers
- [ ] T026 [US2] Créer `src/app/components/section-pourquoi-moi/` avec les 6 différenciateurs
- [ ] T027 [US2] Créer `src/app/components/section-methode/` avec les 4 étapes
- [ ] T028 [US2] Créer `src/app/components/section-tarifs/` avec indication prix + CTA
- [ ] T029 [US2] Créer `src/app/components/section-temoignages/` (placeholder pour futur)

### Contenu Textuel

- [ ] T030 [US1][US2] Rédiger et intégrer le contenu Hero (H1, sous-titre) selon spec.md
- [ ] T031 [P] [US1][US2] Rédiger et intégrer le contenu de chaque section selon spec.md
- [ ] T032 [US1] Vérifier la hiérarchie des headings (H1 > H2 > H3)
- [ ] T033 [US1] Vérifier l'intégration des mots-clés SEO dans le contenu

**Checkpoint**: Page complète avec tout le contenu, structure HTML sémantique validée.

---

## Phase 4: User Story 3 - Formulaire de Contact (Priority: P1) 🎯 MVP

**Goal**: Le visiteur peut envoyer une demande de contact en < 60 secondes.

**Independent Test**: Le formulaire soumet et Romain reçoit l'email.

- [ ] T034 [US3] Créer `src/app/components/contact-form/` avec les 4 champs
- [ ] T035 [US3] Implémenter la validation côté client (required, email format)
- [ ] T036 [US3] Configurer Netlify Forms dans le HTML (`data-netlify="true"`)
- [ ] T037 [US3] Créer `src/app/components/section-contact/` intégrant le formulaire
- [ ] T038 [US3] Implémenter le message de confirmation après soumission
- [ ] T039 [US3] Ajouter la protection anti-spam honeypot
- [ ] T040 [P] [US3] Ajouter la mention RGPD sous le formulaire
- [ ] T041 [US3] Créer le bouton "Appeler" avec lien `tel:` pour mobile

**Checkpoint**: Formulaire fonctionnel, soumission testée, email reçu.

---

## Phase 5: User Story 4 - Responsive Mobile-First (Priority: P2)

**Goal**: Le site est parfaitement utilisable sur mobile 320px+.

**Independent Test**: Lighthouse Mobile > 90, navigation tactile validée.

- [ ] T042 [US4] Adapter le header pour mobile (menu hamburger si nécessaire)
- [ ] T043 [US4] Vérifier et ajuster les tailles de police mobile (16px min)
- [ ] T044 [US4] Vérifier les boutons tactiles > 44px
- [ ] T045 [US4] Créer le CTA sticky mobile `src/app/components/sticky-cta/`
- [ ] T046 [US4] Tester et corriger le formulaire sur mobile
- [ ] T047 [P] [US4] Vérifier l'absence de scroll horizontal
- [ ] T048 [US4] Tester sur iOS Safari et Android Chrome (émulateur ou device)

**Checkpoint**: Site 100% fonctionnel sur mobile, boutons accessibles au pouce.

---

## Phase 6: User Story 5 - Design & Animations (Priority: P2)

**Goal**: Le visiteur est séduit par le design premium et les animations.

**Independent Test**: Feedback qualitatif positif, animations fluides.

### Design

- [ ] T049 [US5] Appliquer la palette de couleurs finale sur tous les composants
- [ ] T050 [P] [US5] Intégrer les icônes pour la section métiers
- [ ] T051 [US5] Styliser les cartes de services (ombre, bordure, hover)
- [ ] T052 [US5] Créer le style des badges/puces pour les listes
- [ ] T053 [US5] Harmoniser les espacements (margin, padding) sur toute la page

### Animations

- [ ] T054 [US5] Créer `src/app/shared/directives/animate-on-scroll.directive.ts`
- [ ] T055 [US5] Implémenter les animations fade-in au scroll
- [ ] T056 [P] [US5] Ajouter les transitions hover sur les CTAs et cartes
- [ ] T057 [US5] Respecter `prefers-reduced-motion` dans les animations
- [ ] T058 [US5] Optimiser les animations (GPU, transform/opacity uniquement)

**Checkpoint**: Design cohérent et premium, animations fluides sans saccades.

---

## Phase 7: User Story 6 - Performance (Priority: P2)

**Goal**: Lighthouse Performance > 90, chargement < 2.5s.

**Independent Test**: Lighthouse CI passe tous les seuils.

### Images

- [ ] T059 [US6] Optimiser les images en WebP (hero, icônes)
- [ ] T060 [P] [US6] Implémenter lazy loading sur images below-the-fold
- [ ] T061 [US6] Ajouter width/height explicites sur toutes les images
- [ ] T062 [P] [US6] Créer l'image og-image.jpg optimisée

### Build & Bundle

- [ ] T063 [US6] Configurer le purge CSS Tailwind pour production
- [ ] T064 [US6] Vérifier le tree-shaking JS (pas de dead code)
- [ ] T065 [US6] Configurer le code splitting si routes multiples
- [ ] T066 [P] [US6] Valider la taille du bundle (< 200KB JS)

### Tests Performance

- [ ] T067 [US6] Exécuter Lighthouse et atteindre score > 90
- [ ] T068 [US6] Valider LCP < 2.5s
- [ ] T069 [US6] Valider CLS < 0.1
- [ ] T070 [US6] Corriger les issues Lighthouse restantes

**Checkpoint**: Lighthouse Performance/SEO/Accessibility tous > 90.

---

## Phase 8: Pages Légales

**Purpose**: Conformité RGPD et mentions légales.

- [ ] T071 Créer `src/app/pages/mentions-legales/` avec contenu
- [ ] T072 [P] Créer `src/app/pages/politique-confidentialite/` avec contenu
- [ ] T073 Ajouter les routes dans `app.routes.ts`
- [ ] T074 Mettre à jour le footer avec les liens vers pages légales
- [ ] T075 [P] Configurer le bandeau cookies si analytics (optionnel)

**Checkpoint**: Pages légales accessibles et conformes.

---

## Phase 9: Accessibilité

**Purpose**: Conformité WCAG 2.1 AA.

- [ ] T076 Implémenter le skip link vers contenu principal
- [ ] T077 Vérifier tous les focus states visibles
- [ ] T078 Vérifier les contrastes avec outil (WAVE, axe)
- [ ] T079 Ajouter les ARIA labels manquants
- [ ] T080 Tester la navigation clavier complète
- [ ] T081 Valider Lighthouse Accessibility > 90

**Checkpoint**: 0 erreur critique d'accessibilité.

---

## Phase 10: Déploiement & Post-Launch

**Purpose**: Mise en production et configuration SEO externe.

### Déploiement

- [ ] T082 Configurer le repository Git (si pas fait)
- [ ] T083 Connecter le repo à Netlify
- [ ] T084 Configurer le domaine creation-site-web-local.fr sur Netlify
- [ ] T085 Forcer HTTPS et configurer les redirects
- [ ] T086 Tester le formulaire en production
- [ ] T087 Valider les scores Lighthouse en production

### SEO Externe

- [ ] T088 Créer et configurer Google Search Console
- [ ] T089 Soumettre le sitemap.xml à Google
- [ ] T090 Vérifier l'indexation après 7 jours
- [ ] T091 [P] Créer Google Business Profile (optionnel)

### Monitoring

- [ ] T092 [P] Installer analytics (Plausible ou GA4) si souhaité
- [ ] T093 Configurer les alertes Netlify (build, formulaire)

**Checkpoint**: Site en production, indexé, formulaire fonctionnel.

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1 (Setup) ─────────────────────────────────────────┐
                                                          │
Phase 2 (SEO Foundations) ───────────────────────────────┼─► Bloque Phase 3+
                                                          │
Phase 3 (US1/US2 Contenu) ◄──────────────────────────────┘
         │
         ├──► Phase 4 (US3 Contact)
         │
         └──► Phase 5 (US4 Mobile) ─┐
                                    │
Phase 6 (US5 Design) ◄─────────────┘
         │
         ▼
Phase 7 (US6 Performance)
         │
         ▼
Phase 8 (Légal) ─────► Phase 9 (Accessibilité) ─────► Phase 10 (Deploy)
```

### Parallel Opportunities

- **Phase 1**: T003, T004, T005, T006 peuvent tourner en parallèle
- **Phase 2**: T012, T013, T015, T016 peuvent tourner en parallèle
- **Phase 3**: Les sections peuvent être développées en parallèle après le layout
- **Phase 4-5-6**: Peuvent démarrer en parallèle une fois Phase 3 terminée

---

## Résumé des Tâches

| Phase | Tâches | Priorité | Status |
|-------|--------|----------|--------|
| 1. Setup | T001-T009 (9) | Bloquant | ⏳ |
| 2. SEO Foundations | T010-T016 (7) | Bloquant | ⏳ |
| 3. Contenu US1/US2 | T017-T033 (17) | P1 MVP | ⏳ |
| 4. Contact US3 | T034-T041 (8) | P1 MVP | ⏳ |
| 5. Mobile US4 | T042-T048 (7) | P2 | ⏳ |
| 6. Design US5 | T049-T058 (10) | P2 | ⏳ |
| 7. Performance US6 | T059-T070 (12) | P2 | ⏳ |
| 8. Légal | T071-T075 (5) | P3 | ⏳ |
| 9. Accessibilité | T076-T081 (6) | P2 | ⏳ |
| 10. Deploy | T082-T093 (12) | Final | ⏳ |
| **TOTAL** | **93 tâches** | - | ⏳ |

---

## MVP Minimal (Pour lancement rapide)

Si besoin de livrer rapidement, les tâches MVP sont :

- **Phase 1**: Toutes (obligatoire)
- **Phase 2**: Toutes (obligatoire)
- **Phase 3**: T017-T028, T030-T033 (contenu essentiel)
- **Phase 4**: Toutes (formulaire obligatoire)
- **Phase 7**: T067-T070 (validation performance)
- **Phase 10**: T082-T087 (déploiement)

**MVP Total**: ~50 tâches prioritaires.

---

## Notes

- Commencer par Phase 1-2 impérativement
- Valider chaque checkpoint avant de passer à la suite
- Tests Lighthouse à chaque phase pour éviter les régressions
- Commit après chaque tâche ou groupe logique
- Les tâches [P] peuvent être distribuées en parallèle
