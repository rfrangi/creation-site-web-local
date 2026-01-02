export const SITE_DATA = {
  name: 'Romain - Créateur de sites web',
  shortName: 'Romain',
  tagline: 'Votre site internet professionnel, créé sur mesure',
  description: 'Création de sites internet professionnels pour artisans, commerçants et professions libérales à Lille et dans le Nord.',
  domain: 'creation-site-web-local.fr',
  url: 'https://creation-site-web-local.fr',

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

  seo: {
    title: 'Création de site web à Lille et dans le Nord | Romain - Créateur de sites web',
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
    id: 'simple',
    title: 'Site Vitrine Simple',
    description: 'L\'essentiel pour démarrer votre présence en ligne.',
    features: [
      'Présentation claire de votre activité',
      'Visible sur Google',
      'Formulaire de contact',
      'Design responsive (mobile et ordinateur)',
      'Mise en ligne incluse'
    ],
    price: 'À partir de 200€',
    popular: false,
    icon: 'layout'
  },
  {
    id: 'complet',
    title: 'Site Vitrine Complet',
    description: 'Une vitrine professionnelle qui vous démarque.',
    features: [
      'Design premium personnalisé',
      'Référencement local optimisé',
      'Galerie photos de vos réalisations',
      'Animations modernes',
      'Optimisation performance',
      'Accompagnement sur mesure'
    ],
    price: 'Sur devis',
    popular: true,
    icon: 'star'
  },
  {
    id: 'avance',
    title: 'Site avec Fonctionnalités',
    description: 'Des outils pour automatiser votre activité.',
    features: [
      'Prise de rendez-vous en ligne',
      'Demande de devis automatisée',
      'Intégration réseaux sociaux',
      'Blog ou actualités',
      'Fonctionnalités sur mesure',
      'Formation à l\'utilisation'
    ],
    price: 'Sur devis',
    popular: false,
    icon: 'settings'
  }
];

export const TARGET_AUDIENCES = [
  {
    name: 'Artisans du bâtiment',
    examples: 'Maçons, plombiers, électriciens, peintres, menuisiers',
    icon: 'hard-hat'
  },
  {
    name: 'Paysagistes & Jardiniers',
    examples: 'Création de jardins, entretien espaces verts',
    icon: 'flower'
  },
  {
    name: 'Restaurateurs & Traiteurs',
    examples: 'Restaurants, food trucks, services traiteur',
    icon: 'utensils'
  },
  {
    name: 'Commerçants de proximité',
    examples: 'Boutiques, fleuristes, épiceries',
    icon: 'store'
  },
  {
    name: 'Professions libérales',
    examples: 'Infirmiers, avocats, thérapeutes, coachs',
    icon: 'briefcase'
  },
  {
    name: 'Créateurs d\'entreprise',
    examples: 'Nouveaux entrepreneurs, indépendants',
    icon: 'rocket'
  }
];

export const WHY_ME_POINTS = [
  {
    title: 'Interlocuteur unique',
    description: 'Vous échangez directement avec moi, pas avec une agence impersonnelle. Un seul contact du début à la fin.',
    icon: 'user'
  },
  {
    title: 'Écoute de votre besoin',
    description: 'Je crée ce dont vous avez besoin, pas plus, pas moins. Pas de fonctionnalités inutiles qui gonflent la facture.',
    icon: 'ear'
  },
  {
    title: 'Pas de jargon technique',
    description: 'Des explications claires et compréhensibles. Je parle votre langage, pas celui des développeurs.',
    icon: 'message-circle'
  },
  {
    title: 'Accompagnement complet',
    description: 'De la première maquette à la mise en ligne, je vous guide à chaque étape.',
    icon: 'compass'
  },
  {
    title: 'Tarifs accessibles',
    description: 'Des solutions adaptées à tous les budgets. On trouve ensemble ce qui correspond à vos moyens.',
    icon: 'piggy-bank'
  },
  {
    title: 'Premier échange gratuit',
    description: 'On discute de votre projet sans engagement. Vous décidez ensuite en toute connaissance de cause.',
    icon: 'coffee'
  }
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Échange gratuit',
    description: 'On parle de votre activité, vos objectifs et ce que vous attendez de votre site. Sans engagement.',
    duration: '30 min'
  },
  {
    step: 2,
    title: 'Maquette rapide',
    description: 'Vous visualisez votre futur site avec une première maquette. Vous validez avant de continuer.',
    duration: '24-48h'
  },
  {
    step: 3,
    title: 'Création',
    description: 'Je développe votre site sur mesure. Vous suivez l\'avancement et donnez votre avis.',
    duration: 'Variable'
  },
  {
    step: 4,
    title: 'Mise en ligne',
    description: 'Votre site est en ligne, optimisé pour Google. Je vous forme à son utilisation si besoin.',
    duration: 'Immédiat'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Marie D.',
    role: 'Infirmière libérale',
    location: 'Lille',
    quote: 'Romain a parfaitement compris mon besoin. Mon site est en ligne depuis 2 semaines et je reçois déjà des appels !',
    rating: 5
  },
  {
    name: 'Jean-Pierre M.',
    role: 'Plombier chauffagiste',
    location: 'Roubaix',
    quote: 'Simple, rapide, efficace. Exactement ce qu\'il me fallait pour mon activité de plombier.',
    rating: 5
  },
  {
    name: 'Sophie L.',
    role: 'Fleuriste',
    location: 'Villeneuve-d\'Ascq',
    quote: 'Un vrai accompagnement, pas juste un prestataire. Je recommande à 100%.',
    rating: 5
  }
];

export const PORTFOLIO = [
  {
    name: 'PlanInfi',
    url: 'https://planinfi.fr',
    description: 'Plateforme pour infirmiers libéraux',
    category: 'Application web',
    logo: 'assets/logo-planinfi.png'
  },
  {
    name: 'Tomatoo',
    url: 'https://tomatoo.fr',
    description: 'Marketplace pour commercants locaux',
    category: 'E-commerce',
    logo: 'assets/logo_tomatoo.png'
  }
];

export const FAQ = [
  {
    question: 'Combien coûte un site internet ?',
    answer: 'Les tarifs commencent à partir de 200€ pour un site vitrine simple. Le prix final dépend de vos besoins spécifiques : nombre de pages, fonctionnalités, design personnalisé... Je vous propose un devis gratuit et détaillé après notre premier échange.'
  },
  {
    question: 'Combien de temps pour créer mon site ?',
    answer: 'Un site vitrine simple peut être en ligne en quelques jours. Pour un projet plus complexe, comptez 1 à 2 semaines. Je vous donne une estimation précise dès notre premier échange.'
  },
  {
    question: 'Mon site sera-t-il visible sur Google ?',
    answer: 'Oui ! Tous mes sites sont optimisés pour le référencement naturel (SEO). Je travaille particulièrement le référencement local pour que vous apparaissiez dans les recherches de votre zone géographique.'
  },
  {
    question: 'Puis-je modifier mon site moi-même ?',
    answer: 'Selon vos besoins, je peux intégrer un système qui vous permet de modifier facilement certains contenus (textes, photos). Je vous forme à son utilisation.'
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer: 'Je reste disponible pour toute question ou modification. Si vous avez besoin d\'un accompagnement régulier, je propose des forfaits de maintenance adaptés.'
  }
];
