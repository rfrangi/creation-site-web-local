import { Routes } from '@angular/router';
import { SeoData } from './shared/services/seo.service';

/**
 * Les metadonnees SEO sont portees par les routes (data.seo) et appliquees
 * par SeoService a chaque navigation. C'est la seule source de verite :
 * ne pas remettre de `title` ici, la TitleStrategy d'Angular entrerait
 * en conflit avec le titre pose par le service.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    data: {
      seo: {
        title: 'Création de site web à Lille et dans le Nord dès 100 €',
        description:
          'Création de sites internet pour artisans, commerçants et indépendants à Lille et dans le Nord. Site vitrine dès 100 €. Vous ne payez qu\'après validation.',
        path: '/'
      } satisfies SeoData
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    data: {
      seo: {
        title: 'Devis gratuit pour votre site internet | Lille et Nord',
        description:
          'Demandez votre devis gratuit pour la création de votre site internet à Lille et dans le Nord. Réponse sous 48h et étude de votre activité offerte.',
        path: '/contact'
      } satisfies SeoData
    }
  },
  {
    path: 'mentions-legales',
    loadComponent: () =>
      import('./pages/mentions-legales/mentions-legales.component').then(m => m.MentionsLegalesComponent),
    data: {
      seo: {
        title: 'Mentions légales | Bon Déclic, création de sites web',
        description:
          'Mentions légales du site : éditeur, hébergeur, propriété intellectuelle et droit applicable.',
        path: '/mentions-legales'
      } satisfies SeoData
    }
  },
  {
    path: 'politique-confidentialite',
    loadComponent: () =>
      import('./pages/politique-confidentialite/politique-confidentialite.component').then(
        m => m.PolitiqueConfidentialiteComponent
      ),
    data: {
      seo: {
        title: 'Politique de confidentialité | Bon Déclic',
        description:
          'Données collectées via le formulaire de contact, finalités, durée de conservation et vos droits RGPD.',
        path: '/politique-confidentialite'
      } satisfies SeoData
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
