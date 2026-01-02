# Feature Specification: Site Vitrine SEO creation-site-web-local.fr

**Feature Branch**: `001-site-vitrine-seo`
**Created**: 2025-12-30
**Status**: Draft
**Input**: Contexte projet fourni par le client

---

## Résumé Exécutif

Création d'un site vitrine mono-page ultra-optimisé SEO pour promouvoir les services de création de sites web de Romain auprès des artisans, commerçants et professions libérales. L'objectif principal est d'être visible sur Google et de générer des demandes de contact qualifiées.

---

## User Scenarios & Testing

### User Story 1 - Découverte via Google (Priority: P1) 🎯 MVP

Un artisan cherche "création site web artisan" ou "site internet plombier" sur Google. Il tombe sur le site de Romain, comprend immédiatement l'offre et se sent en confiance.

**Why this priority**: C'est le point d'entrée principal. Sans visibilité Google, pas de visiteurs.

**Independent Test**: Le site apparaît dans les 10 premiers résultats pour les requêtes cibles dans un délai de 3-6 mois.

**Acceptance Scenarios**:

1. **Given** un utilisateur sur Google, **When** il cherche "création site web artisan [ville]", **Then** le site apparaît avec un title et description attractifs.
2. **Given** un utilisateur sur la page de résultats, **When** il lit le snippet, **Then** il comprend l'offre en moins de 3 secondes.
3. **Given** un crawler Google, **When** il indexe le site, **Then** il trouve une structure HTML sémantique, des balises meta complètes et du Schema.org.

---

### User Story 2 - Compréhension de l'offre (Priority: P1) 🎯 MVP

Le visiteur arrive sur le site et comprend en moins de 10 secondes :
- Ce que Romain propose (création de sites web)
- Pour qui (artisans, commerçants, professions libérales)
- Pourquoi lui faire confiance (approche humaine, interlocuteur unique)

**Why this priority**: Sans compréhension immédiate, le visiteur part.

**Independent Test**: Test utilisateur - 5 personnes cibles comprennent l'offre en < 10 secondes.

**Acceptance Scenarios**:

1. **Given** un visiteur sur la page d'accueil, **When** il lit le header, **Then** il identifie le service proposé.
2. **Given** un visiteur scroll la page, **When** il parcourt les sections, **Then** chaque section répond à une question clé (quoi, pour qui, pourquoi, comment, combien).
3. **Given** un visiteur non-technique, **When** il lit le contenu, **Then** il ne rencontre aucun jargon technique incompréhensible.

---

### User Story 3 - Prise de contact (Priority: P1) 🎯 MVP

Le visiteur convaincu veut contacter Romain. Il trouve facilement le formulaire ou le bouton d'appel et envoie une demande en moins de 60 secondes.

**Why this priority**: Objectif final du site - sans conversion, le site est inutile.

**Independent Test**: Le formulaire fonctionne et envoie un email de confirmation.

**Acceptance Scenarios**:

1. **Given** un visiteur convaincu, **When** il cherche à contacter, **Then** il trouve un CTA visible sans scroller plus de 2 écrans.
2. **Given** un visiteur sur mobile, **When** il veut appeler, **Then** il peut cliquer sur un bouton "Appeler" qui lance l'appel.
3. **Given** un visiteur qui remplit le formulaire, **When** il soumet, **Then** il reçoit une confirmation immédiate et Romain reçoit la demande.
4. **Given** un formulaire soumis, **When** les données sont envoyées, **Then** elles sont transmises de manière sécurisée (HTTPS, pas de spam).

---

### User Story 4 - Navigation mobile fluide (Priority: P2)

La majorité des artisans consultent leur téléphone. Le site doit être parfaitement utilisable sur mobile avec des boutons tactiles adaptés.

**Why this priority**: 60%+ du trafic sera mobile. UX mobile = conversion mobile.

**Independent Test**: Score Lighthouse Mobile > 90, tous les boutons cliquables au pouce.

**Acceptance Scenarios**:

1. **Given** un visiteur sur smartphone, **When** il navigue, **Then** le site s'adapte parfaitement à son écran.
2. **Given** un visiteur sur mobile, **When** il veut contacter, **Then** le bouton "Appeler" est toujours visible en sticky.
3. **Given** un visiteur sur tablette, **When** il consulte le site, **Then** l'expérience reste cohérente et lisible.

---

### User Story 5 - Inspiration par l'exemple (Priority: P2)

Le visiteur se dit "C'est exactement ce genre de site que je veux pour mon activité". Le design et les animations le séduisent.

**Why this priority**: Différenciation par la qualité perçue.

**Independent Test**: Feedback qualitatif - "Ce site me donne envie".

**Acceptance Scenarios**:

1. **Given** un visiteur qui découvre le site, **When** il observe le design, **Then** il perçoit une qualité professionnelle.
2. **Given** un visiteur qui scroll, **When** il voit les animations, **Then** elles sont fluides, sobres et valorisantes.
3. **Given** un artisan, **When** il imagine son propre site, **Then** il se projette avec un résultat similaire.

---

### User Story 6 - Chargement ultra-rapide (Priority: P2)

Le site se charge instantanément, même en 3G/4G. Pas d'attente, pas de frustration.

**Why this priority**: Performance = SEO + UX + Conversion.

**Independent Test**: Lighthouse Performance > 90, LCP < 2.5s.

**Acceptance Scenarios**:

1. **Given** un visiteur en 4G, **When** il accède au site, **Then** le contenu principal s'affiche en < 2 secondes.
2. **Given** Google PageSpeed, **When** il analyse le site, **Then** le score est vert (90+).
3. **Given** un visiteur qui scroll, **When** les images se chargent, **Then** elles apparaissent sans décalage (lazy loading optimisé).

---

### Edge Cases

- **Connexion lente** : Le site reste fonctionnel en 3G avec contenu dégradé graceful.
- **JavaScript désactivé** : Le contenu principal reste accessible (SSG).
- **Vieux navigateur** : Support IE11 non requis, mais graceful degradation pour Safari < 14.
- **Spam formulaire** : Protection honeypot + rate limiting côté service tiers.
- **Erreur soumission** : Message d'erreur clair avec alternative (email, téléphone).

---

## Requirements

### Functional Requirements - SEO

- **FR-SEO-001**: Le site DOIT avoir une balise `<title>` unique et optimisée (< 60 caractères).
- **FR-SEO-002**: Le site DOIT avoir une `<meta description>` engageante (< 155 caractères).
- **FR-SEO-003**: Le site DOIT utiliser une structure de titres hiérarchique (un seul H1, H2 pour sections, H3 pour sous-sections).
- **FR-SEO-004**: Le site DOIT implémenter Schema.org LocalBusiness avec toutes les propriétés requises.
- **FR-SEO-005**: Le site DOIT générer un sitemap.xml valide.
- **FR-SEO-006**: Le site DOIT avoir un robots.txt autorisant l'indexation.
- **FR-SEO-007**: Le site DOIT avoir des URLs canoniques.
- **FR-SEO-008**: Le site DOIT avoir des balises Open Graph pour le partage social.
- **FR-SEO-009**: Le site DOIT intégrer des mots-clés locaux dans le contenu (création site web + métiers + localité).
- **FR-SEO-010**: Le site DOIT avoir des images avec attributs `alt` descriptifs.

### Functional Requirements - Contenu

- **FR-CNT-001**: Le site DOIT avoir une section Hero avec accroche claire et CTA principal.
- **FR-CNT-002**: Le site DOIT avoir une section "Services" présentant les types de sites proposés.
- **FR-CNT-003**: Le site DOIT avoir une section "Pour qui" listant les métiers ciblés.
- **FR-CNT-004**: Le site DOIT avoir une section "Pourquoi moi" avec les différenciateurs.
- **FR-CNT-005**: Le site DOIT avoir une section "Comment ça marche" expliquant le processus.
- **FR-CNT-006**: Le site DOIT avoir une section "Tarifs" avec indication de prix.
- **FR-CNT-007**: Le site DOIT avoir une section "Contact" avec formulaire.
- **FR-CNT-008**: Le site DOIT avoir un footer avec mentions légales et coordonnées.
- **FR-CNT-009**: Le site PEUT avoir une section "Témoignages" (préparée pour ajout futur).
- **FR-CNT-010**: Le site PEUT avoir une section "FAQ" pour le SEO longue traîne.

### Functional Requirements - Conversion

- **FR-CVR-001**: Le site DOIT avoir au minimum 3 CTAs visibles sur la page.
- **FR-CVR-002**: Le site DOIT avoir un formulaire de contact avec max 4 champs obligatoires.
- **FR-CVR-003**: Le formulaire DOIT envoyer une notification à Romain (email).
- **FR-CVR-004**: Le formulaire DOIT afficher une confirmation après soumission.
- **FR-CVR-005**: Le site DOIT avoir un bouton "Appeler" cliquable sur mobile (tel:).
- **FR-CVR-006**: Le site DOIT avoir un bouton sticky sur mobile pour contact rapide.
- **FR-CVR-007**: Le site DOIT afficher des éléments de réassurance (gratuit, sans engagement, etc.).

### Functional Requirements - Technique

- **FR-TEC-001**: Le site DOIT être généré en statique (SSG).
- **FR-TEC-002**: Le site DOIT être responsive (mobile-first).
- **FR-TEC-003**: Le site DOIT être accessible WCAG 2.1 niveau AA.
- **FR-TEC-004**: Le site DOIT être servi en HTTPS.
- **FR-TEC-005**: Le site DOIT avoir un Lighthouse Performance > 90.
- **FR-TEC-006**: Le site DOIT avoir un Lighthouse SEO > 95.
- **FR-TEC-007**: Le site DOIT avoir un Lighthouse Accessibility > 90.
- **FR-TEC-008**: Le site DOIT supporter les formats d'image modernes (WebP).
- **FR-TEC-009**: Le site DOIT implémenter le lazy loading pour les images.
- **FR-TEC-010**: Le site DOIT minimiser le CSS et JS en production.

### Functional Requirements - Légal

- **FR-LEG-001**: Le site DOIT avoir une page ou section Mentions Légales.
- **FR-LEG-002**: Le site DOIT avoir une Politique de Confidentialité (RGPD).
- **FR-LEG-003**: Le formulaire DOIT informer sur l'utilisation des données.
- **FR-LEG-004**: Le site DOIT avoir un bandeau cookies si analytics activé.

---

## Key Entities

### Page (Landing Page unique)
- Sections ordonnées (Hero, Services, Pour qui, etc.)
- Meta SEO (title, description, keywords)
- Schema.org LocalBusiness

### Contact (Lead)
- Nom
- Email
- Téléphone (optionnel)
- Message
- Date/heure de soumission
- Source (page de provenance)

### Service (Offre proposée)
- Titre
- Description
- Points clés
- Fourchette de prix
- CTA associé

### Métier Cible
- Nom du métier
- Icône associée
- Mots-clés SEO

---

## Arborescence du Site

```
creation-site-web-local.fr/
├── / (Landing Page unique)
│   ├── #hero (Accroche + CTA)
│   ├── #services (Types de sites)
│   ├── #pour-qui (Métiers ciblés)
│   ├── #pourquoi-moi (Différenciateurs)
│   ├── #methode (Comment ça marche)
│   ├── #tarifs (Indication prix)
│   ├── #temoignages (Préparé pour futur)
│   ├── #contact (Formulaire)
│   └── Footer (Légal + Coordonnées)
├── /mentions-legales (Page secondaire optionnelle)
└── /politique-confidentialite (Page secondaire optionnelle)
```

---

## Contenu Copywriting (Propositions)

### Hero - Accroche Principale

**Titre H1**:
> "Votre site internet professionnel, créé sur mesure"

**Sous-titre**:
> "Artisans, commerçants, indépendants : soyez visible sur Google et recevez plus de demandes clients."

**CTA Principal**:
> "Demander un devis gratuit"

---

### Section Services

**Titre H2**: "Des sites adaptés à votre activité"

**Offres**:

1. **Site Vitrine Simple**
   - Présentation claire de votre activité
   - Visible sur Google
   - Contact facile
   - À partir de 200€

2. **Site Vitrine Complet**
   - Design premium personnalisé
   - Référencement local optimisé
   - Galerie photos de réalisations
   - Devis personnalisé

3. **Site avec Fonctionnalités**
   - Prise de rendez-vous en ligne
   - Demande de devis automatisée
   - Intégration réseaux sociaux
   - Devis personnalisé

---

### Section Pour Qui

**Titre H2**: "Pour les professionnels qui veulent être trouvés"

**Métiers (avec icônes)**:
- Artisans du bâtiment (maçons, plombiers, électriciens, peintres)
- Paysagistes et jardiniers
- Restaurateurs et traiteurs
- Commerçants de proximité
- Professions libérales (infirmiers, avocats, thérapeutes)
- Créateurs d'entreprise

---

### Section Pourquoi Moi

**Titre H2**: "Un interlocuteur unique, une solution adaptée"

**Points clés**:
- ✅ **Interlocuteur unique** - Vous échangez directement avec moi, pas avec une agence impersonnelle
- ✅ **Écoute de votre besoin** - Je crée ce dont vous avez besoin, pas plus, pas moins
- ✅ **Pas de jargon technique** - Des explications claires et compréhensibles
- ✅ **Accompagnement complet** - De la maquette à la mise en ligne
- ✅ **Tarifs accessibles** - Des solutions adaptées à tous les budgets
- ✅ **Premier échange gratuit** - On discute de votre projet sans engagement

---

### Section Méthode

**Titre H2**: "Comment ça se passe ?"

**Étapes**:
1. **Échange gratuit** - On parle de votre activité et vos objectifs
2. **Maquette rapide** - Vous visualisez votre futur site sous 24-48h
3. **Création** - Je développe votre site sur mesure
4. **Mise en ligne** - Votre site est en ligne et référencé

---

### Section Tarifs

**Titre H2**: "Des tarifs clairs et accessibles"

> Sites à partir de **200€**
>
> Chaque projet est unique. Je vous propose un devis gratuit et personnalisé après notre premier échange.

**CTA**: "Demander mon devis gratuit"

---

### Section Contact

**Titre H2**: "Parlons de votre projet"

**Texte d'accroche**:
> "Un projet de site web ? Une question ? Contactez-moi pour un premier échange gratuit et sans engagement."

**Formulaire**:
- Votre nom *
- Votre email *
- Votre téléphone (optionnel)
- Votre message *

**Bouton**: "Envoyer ma demande"

**Mentions sous formulaire**:
> "En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter. Voir notre politique de confidentialité."

---

## Success Criteria

### Measurable Outcomes - SEO

- **SC-SEO-001**: Lighthouse SEO Score > 95 au lancement
- **SC-SEO-002**: Indexation Google dans les 7 jours après lancement
- **SC-SEO-003**: Position top 50 sur "création site web [métier]" à 1 mois
- **SC-SEO-004**: Position top 20 sur "création site web [métier] [ville]" à 3 mois
- **SC-SEO-005**: 0 erreurs dans Google Search Console à 30 jours

### Measurable Outcomes - Performance

- **SC-PER-001**: Lighthouse Performance Score > 90
- **SC-PER-002**: First Contentful Paint < 1.5s
- **SC-PER-003**: Largest Contentful Paint < 2.5s
- **SC-PER-004**: Cumulative Layout Shift < 0.1
- **SC-PER-005**: Time to Interactive < 3s

### Measurable Outcomes - Conversion

- **SC-CVR-001**: Taux de soumission formulaire > 2% du trafic à 3 mois
- **SC-CVR-002**: Taux de rebond < 60%
- **SC-CVR-003**: Temps moyen sur site > 1 minute
- **SC-CVR-004**: 100% des soumissions de formulaire reçues par email

### Measurable Outcomes - Accessibilité

- **SC-ACC-001**: Lighthouse Accessibility Score > 90
- **SC-ACC-002**: 0 erreur critique WAVE
- **SC-ACC-003**: Navigation clavier fonctionnelle sur tous les éléments interactifs
