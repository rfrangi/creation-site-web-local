import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WHY_ME_POINTS } from '../../shared/data/site.data';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pourquoi-moi" class="section bg-primary-50/30">
      <div class="container-custom">
        <!-- Header with photo -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="text-center lg:text-left">
            <span class="badge badge-light mb-6">Pourquoi moi</span>
            <h2 class="mb-6">Un interlocuteur unique</h2>
            <p class="text-lg text-primary-500 max-w-md mx-auto lg:mx-0">
              Pas d'agence impersonnelle. Vous échangez directement avec moi,
              de la première discussion à la mise en ligne.
            </p>
          </div>
          <div class="hidden lg:flex justify-center">
            <div class="relative">
              <!-- Decorative elements -->
              <div class="absolute -top-4 -left-4 w-full h-full bg-accent-500/20 rounded-3xl"></div>
              <div class="absolute -bottom-4 -right-4 w-full h-full bg-primary-200/30 rounded-3xl"></div>
              <!-- Photo -->
              <img src="assets/images/profil.PNG"
                   alt="Romain - Créateur de sites web"
                   class="relative w-72 h-80 object-cover object-top rounded-3xl shadow-soft-lg border-4 border-white"
                   loading="lazy">
              <!-- Floating badge -->
              <div class="absolute -bottom-3 -right-3 bg-accent-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium">
                À votre écoute
              </div>
            </div>
          </div>
        </div>

        <!-- Points grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let point of points; let i = index"
            class="group">
            <div class="bg-white rounded-2xl p-8 h-full border border-primary-100 transition-all duration-500 hover:shadow-soft hover:border-primary-200">
              <!-- Number indicator -->
              <div class="flex items-center justify-between mb-6">
                <span class="text-4xl font-light text-accent-300">0{{ i + 1 }}</span>
                <div class="w-10 h-10 rounded-xl bg-accent-600 flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <ng-container [ngSwitch]="point.icon">
                      <path *ngSwitchCase="'user'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      <path *ngSwitchCase="'ear'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      <path *ngSwitchCase="'message-circle'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      <path *ngSwitchCase="'compass'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                      <path *ngSwitchCase="'piggy-bank'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                      <path *ngSwitchCase="'coffee'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </ng-container>
                  </svg>
                </div>
              </div>

              <h4 class="text-lg font-semibold text-primary-900 mb-3">{{ point.title }}</h4>
              <p class="text-primary-500 text-sm leading-relaxed">{{ point.description }}</p>
            </div>
          </div>
        </div>

        <!-- Stats bar -->
        <div class="mt-20 bg-gradient-to-r from-primary-900 via-accent-900 to-primary-900 rounded-3xl p-10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p class="text-4xl font-light text-accent-300 mb-2">100%</p>
              <p class="text-primary-300 text-sm">Clients satisfaits</p>
            </div>
            <div>
              <p class="text-4xl font-light text-white mb-2">48h</p>
              <p class="text-primary-300 text-sm">Première maquette</p>
            </div>
            <div>
              <p class="text-4xl font-light text-accent-300 mb-2">200+</p>
              <p class="text-primary-300 text-sm">Projets réalisés</p>
            </div>
            <div>
              <p class="text-4xl font-light text-white mb-2">5/5</p>
              <p class="text-primary-300 text-sm">Note moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class WhyMeComponent {
  points = WHY_ME_POINTS;
}
