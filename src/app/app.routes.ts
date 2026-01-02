import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Création de site web à Lille et dans le Nord | Romain - Créateur de sites web'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact - Demande de devis gratuit | Romain - Créateur de sites web'
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/mentions-legales/mentions-legales.component').then(m => m.MentionsLegalesComponent),
    title: 'Mentions légales | Romain - Créateur de sites web'
  },
  {
    path: 'politique-confidentialite',
    loadComponent: () => import('./pages/politique-confidentialite/politique-confidentialite.component').then(m => m.PolitiqueConfidentialiteComponent),
    title: 'Politique de confidentialité | Romain - Créateur de sites web'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
