import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SITE_DATA } from '../../shared/data/site.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-primary-900 text-white">
      <!-- Main footer -->
      <div class="container-custom py-16 md:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <!-- Brand -->
          <div class="lg:col-span-2">
            <div class="flex items-start gap-5 mb-6">
              <img src="assets/images/profil.PNG"
                   alt="Romain - Créateur de sites web"
                   class="w-16 h-16 rounded-full object-cover object-top border-2 border-accent-500 flex-shrink-0">
              <div>
                <h3 class="text-xl font-semibold text-white mb-1">{{ site.name }}</h3>
                <p class="text-accent-400 text-sm italic">
                  "Votre succès en ligne, c'est ma priorité."
                </p>
              </div>
            </div>
            <p class="text-primary-400 mb-6 max-w-sm text-sm leading-relaxed">
              Création de sites internet professionnels pour artisans, commerçants
              et professions libérales à Lille et dans le Nord.
            </p>
            <a [href]="site.contact.phoneLink"
               class="inline-flex items-center px-5 py-2.5 bg-accent-600 hover:bg-accent-500 rounded-full text-white text-sm font-medium transition-all duration-300">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {{ site.contact.phone }}
            </a>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Navigation</h4>
            <ul class="space-y-3">
              <li>
                <a href="#services" class="text-primary-400 hover:text-accent-400 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#pour-qui" class="text-primary-400 hover:text-accent-400 transition-colors text-sm">
                  Pour qui
                </a>
              </li>
              <li>
                <a href="#methode" class="text-primary-400 hover:text-accent-400 transition-colors text-sm">
                  Méthode
                </a>
              </li>
              <li>
                <a href="#temoignages" class="text-primary-400 hover:text-accent-400 transition-colors text-sm">
                  Témoignages
                </a>
              </li>
              <li>
                <a routerLink="/contact" class="text-primary-400 hover:text-accent-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Contact</h4>
            <address class="not-italic text-primary-400 space-y-2 text-sm">
              <p class="text-white font-medium">{{ site.contact.name }}</p>
              <p>
                <a [href]="site.contact.phoneLink" class="hover:text-accent-400 transition-colors">{{ site.contact.phone }}</a>
              </p>
              <p>
                <a [href]="'mailto:' + site.contact.email" class="hover:text-accent-400 transition-colors">{{ site.contact.email }}</a>
              </p>
              <p class="pt-2 text-primary-500">Disponible {{ site.contact.hours }}</p>
            </address>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-primary-800">
        <div class="container-custom py-6">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-primary-500 text-sm">
              &copy; {{ currentYear }} {{ site.name }} &mdash; Tous droits réservés
            </p>
            <div class="flex space-x-8 text-sm">
              <a routerLink="/mentions-legales" class="text-primary-500 hover:text-accent-400 transition-colors">
                Mentions légales
              </a>
              <a routerLink="/politique-confidentialite" class="text-primary-500 hover:text-accent-400 transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  site = SITE_DATA;
  currentYear = new Date().getFullYear();
}
