export const SITE_DATA = {
  name: 'Bon Déclic',
  shortName: 'Bon Déclic',
  baseline: 'Création de sites web',
  tagline: 'Votre site web, de l\'étude de votre métier à la mise en ligne',
  description: 'Création de sites internet pour commerçants, artisans, salons de coiffure et métiers du bâtiment à Lille et dans le Nord.',
  domain: 'bondeclic.fr',
  url: 'https://bondeclic.fr',

  // Les sources sont dans public/assets/, les declinaisons sont generees
  // par scripts/generer-images.mjs
  logo: 'assets/logo-bondeclic-160.webp',
  icon: 'assets/icon-bondeclic-64.webp',

  // Engagement commercial repris sur tout le site
  promise: 'Vous ne payez qu\'une fois le premier brouillon validé',

  contact: {
    name: 'Romain',
    phone: '06 68 04 79 12',
    phoneLink: 'tel:+33668047912',
    email: 'frangi.romain@gmail.com',
    hours: '7h - 19h, 7j/7'
  },

  social: {
    linkedin: '',
    instagram: '',
    facebook: ''
  },

  // Informations legales obligatoires (LCEN art. 6-III et RGPD art. 13).
  // Source : extrait du registre de l'entreprise, identique aux mentions
  // legales de planinfi.fr.
  legal: {
    raisonSociale: 'FRANGI ROMAIN (FRANGIANDCO)',
    directeurPublication: 'Romain FRANGI',
    statut: 'Entrepreneur individuel (auto-entrepreneur)',
    siret: '893 131 169 00011',
    siren: '893 131 169',
    tvaIntracom: 'FR58893131169',
    rcs: '893 131 169 R.C.S. Lille Métropole',
    ape: '6201Z — Programmation informatique',
    creation: '1er janvier 2021',
    adresse: '30 Rue Séraphin Cordier',
    codePostal: '59112',
    ville: 'Carnin',
    pays: 'France',
    hebergeur: {
      nom: 'Amazon Web Services EMEA SARL',
      adresse: '38 Avenue John F. Kennedy, L-1855 Luxembourg',
      site: 'https://aws.amazon.com'
    },
    formulaire: {
      nom: 'Formspree, Inc.',
      pays: 'États-Unis',
      site: 'https://formspree.io'
    }
  },

  seo: {
    title: 'Création de site web à Lille et dans le Nord | Bon Déclic',
    description: 'Création de sites internet professionnels pour artisans, commerçants et professions libérales à Lille et dans le Nord. Sites vitrines sur mesure, référencement local. Devis gratuit.',
    keywords: [
      'création site web Lille',
      'site internet artisan Nord',
      'créateur site web Hauts-de-France',
      'site vitrine commerçant',
      'référencement local Lille'
    ]
  }
};

export const SERVICES = [
  {
    id: 'vitrine',
    title: 'Site Vitrine',
    description: 'Votre activité présentée clairement, trouvable sur Google, joignable en un clic.',
    features: [
      'Jusqu\'à 5 pages (accueil, prestations, réalisations, contact)',
      'Design sur mesure, adapté à votre métier',
      'Parfaitement lisible sur mobile et ordinateur',
      'Référencement local sur votre ville et votre zone',
      'Formulaire de contact et appel en un clic',
      'Nom de domaine et mise en ligne inclus'
    ],
    price: 'À partir de 100 €',
    priceNote: 'Payable après validation du brouillon',
    popular: true,
    icon: 'layout'
  },
  {
    id: 'ecommerce',
    title: 'Site E-commerce',
    description: 'Vendez vos produits en ligne, encaissez les paiements, suivez vos commandes.',
    features: [
      'Boutique en ligne complète',
      'Paiement sécurisé par carte bancaire',
      'Gestion des produits, des stocks et des commandes',
      'Emails de confirmation automatiques',
      'Fiches produits optimisées pour Google',
      'Formation à la gestion de votre boutique'
    ],
    price: 'À partir de 3 000 €',
    priceNote: 'Devis détaillé avant tout engagement',
    popular: false,
    icon: 'store'
  },
  {
    id: 'sur-mesure',
    title: 'Sur Mesure',
    description: 'Un besoin qui sort du cadre ? Rendez-vous en ligne, espace client, outil métier.',
    features: [
      'Prise de rendez-vous en ligne',
      'Espace client ou espace professionnel',
      'Devis et relances automatisés',
      'Connexion à vos outils existants',
      'Développement spécifique à votre activité',
      'Accompagnement et formation inclus'
    ],
    price: 'Sur devis',
    priceNote: 'Chiffré après étude de votre besoin',
    popular: false,
    icon: 'settings'
  }
];

export const TARGET_AUDIENCES = [
  {
    name: 'Métiers du bâtiment',
    examples: 'Maçons, plombiers, électriciens, peintres, menuisiers',
    icon: 'hard-hat'
  },
  {
    name: 'Coiffure, esthétique & bien-être',
    examples: 'Salons de coiffure, barbiers, instituts, spas',
    icon: 'scissors'
  },
  {
    name: 'Commerçants de proximité',
    examples: 'Boutiques, fleuristes, épiceries, opticiens',
    icon: 'store'
  },
  {
    name: 'Restaurateurs & Traiteurs',
    examples: 'Restaurants, food trucks, services traiteur',
    icon: 'utensils'
  },
  {
    name: 'Paysagistes & Jardiniers',
    examples: 'Création de jardins, entretien espaces verts',
    icon: 'flower'
  },
  {
    name: 'Professions libérales',
    examples: 'Infirmiers, avocats, thérapeutes, coachs',
    icon: 'briefcase'
  }
];

export const WHY_ME_POINTS = [
  {
    title: 'Vous payez après avoir vu',
    description: 'Je développe un premier brouillon avant toute facture. S\'il ne vous convainc pas, vous ne devez rien.',
    icon: 'piggy-bank'
  },
  {
    title: 'Un seul interlocuteur',
    description: 'Celui qui étudie votre métier est celui qui code votre site. Pas de commercial intermédiaire, pas de dossier qui se perd.',
    icon: 'user'
  },
  {
    title: 'J\'étudie votre activité',
    description: 'Vos clients, vos concurrents, votre zone. Le site est construit sur ce qui fait tourner votre business, pas sur un modèle générique.',
    icon: 'ear'
  },
  {
    title: 'Pas de jargon technique',
    description: 'Des explications claires et compréhensibles. Je parle votre langage, pas celui des développeurs.',
    icon: 'message-circle'
  },
  {
    title: 'Des prix annoncés',
    description: 'Les tarifs de départ sont affichés sur ce site. Le devis détaille tout, avant que vous ne vous engagiez.',
    icon: 'compass'
  },
  {
    title: 'On itère jusqu\'au bon site',
    description: 'Le brouillon n\'est qu\'un point de départ. On ajuste ensemble, autant de fois qu\'il le faut.',
    icon: 'coffee'
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'J\'étudie votre business',
    description: 'On échange sur votre métier, vos clients et votre zone. Je regarde ce que font vos concurrents en ligne et ce qui vous ferait gagner des contacts.',
    duration: 'Gratuit'
  },
  {
    step: 2,
    title: 'Je vous fais la meilleure proposition',
    description: 'Vous recevez un devis clair : ce qui est inclus, le délai, le prix. Pas de ligne obscure, pas de frais qui apparaissent en cours de route.',
    duration: 'Sous 48h'
  },
  {
    step: 3,
    title: 'Je développe un premier brouillon',
    description: 'Je construis une vraie première version de votre site, pas un croquis. Vous la voyez en ligne et vous jugez sur pièces.',
    duration: 'Sans engagement'
  },
  {
    step: 4,
    title: 'Ça vous plaît ? On continue',
    description: 'C\'est seulement à partir de là que vous payez. On itère ensemble, autant de fois que nécessaire, jusqu\'à ce que le site vous ressemble.',
    duration: 'Paiement à cette étape'
  }
];

// Aucun temoignage publie pour le moment.
// N'ajouter ici que des avis reels et verifiables (nom d'entreprise ou lien) :
// publier de faux avis est une pratique commerciale trompeuse (art. L121-2).
// La section ne s'affiche pas tant que ce tableau est vide.
export const TESTIMONIALS: {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}[] = [];

// url vide = projet non encore en ligne, la carte n'est alors pas cliquable
// status rempli = pastille affichee sur la carte (ex. "En etude")
export const PORTFOLIO = [
  {
    name: 'PlanInfi',
    url: 'https://planinfi.fr',
    description: 'Plateforme pour infirmiers libéraux',
    category: 'Application web',
    status: '',
    logo: 'assets/logo-planinfi.png'
  },
  {
    name: 'Tomatoo',
    url: 'https://tomatoo.fr',
    description: 'Marketplace pour commerçants locaux',
    category: 'E-commerce',
    status: '',
    logo: 'assets/logo_tomatoo.png'
  },
  {
    name: 'CBD24H',
    url: 'https://www.cbd24h.fr',
    description: 'Présentation de la marque et de la gamme de produits',
    category: 'Site vitrine',
    status: '',
    logo: 'assets/logo-cbd24h.png'
  },
  {
    name: 'CBD24H',
    url: '',
    description: 'Boutique en ligne : paiement sécurisé et gestion des commandes',
    category: 'E-commerce',
    status: 'En étude',
    logo: 'assets/logo-cbd24h.png'
  },
  {
    name: 'Calquo',
    url: 'https://d2uphrc5i8k8g0.cloudfront.net',
    description: 'Outil pour plaquistes : relever la forme d\'un trou et la reporter à taille réelle sur une autre plaque',
    category: 'Application métier',
    status: '',
    logo: 'assets/logo-calquo.png'
  },
  {
    name: 'Artaya',
    url: 'https://artayaeeba1285-artaya-web.functions.fnc.fr-par.scw.cloud/',
    description: 'Marketplace d\'œuvres d\'art originales, achetées directement auprès des artistes',
    category: 'Marketplace',
    status: '',
    logo: 'assets/logo-artaya.png'
  }
];

export const FAQ = [
  {
    question: 'Combien coûte un site internet ?',
    answer: 'Un site vitrine démarre à 100 € et un site e-commerce à 3 000 €. Le prix final dépend du nombre de pages, des fonctionnalités et du design souhaité. Le devis est gratuit, détaillé, et vous le recevez avant tout engagement.'
  },
  {
    question: 'Quand est-ce que je paye ?',
    answer: 'Après avoir vu votre site. J\'étudie votre activité, je vous envoie un devis, puis je développe un premier brouillon que vous consultez en ligne. Vous ne payez qu\'à partir du moment où ce brouillon vous plaît et que l\'on décide de continuer ensemble.'
  },
  {
    question: 'Combien de temps pour créer mon site ?',
    answer: 'Le devis arrive sous 48h et le premier brouillon suit en quelques jours. Pour un site vitrine, comptez une à deux semaines au total. Pour un e-commerce, trois à six semaines selon la taille du catalogue. Vous avez une estimation précise dès le devis.'
  },
  {
    question: 'Mon site sera-t-il visible sur Google ?',
    answer: 'Oui. Tous mes sites sont optimisés pour le référencement naturel (SEO). Je travaille particulièrement le référencement local pour maximiser vos chances de figurer dans les recherches de votre ville et de votre zone d\'intervention.'
  },
  {
    question: 'Puis-je modifier mon site moi-même ?',
    answer: 'Selon vos besoins, je peux intégrer un système qui vous permet de modifier facilement certains contenus (textes, photos, tarifs, horaires). Je vous forme à son utilisation avant la mise en ligne.'
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer: 'Je reste disponible pour toute question ou modification. Si vous avez besoin d\'un accompagnement régulier, je propose des forfaits de maintenance adaptés à votre activité.'
  }
];
