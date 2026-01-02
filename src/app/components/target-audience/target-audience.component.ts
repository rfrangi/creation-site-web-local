import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TARGET_AUDIENCES } from '../../shared/data/site.data';

@Component({
  selector: 'app-target-audience',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="pour-qui" class="section bg-white">
      <div class="container-custom">
        <!-- Header with photo -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="text-center lg:text-left">
            <span class="badge badge-light mb-6">Pour qui</span>
            <h2 class="mb-6">Des professionnels comme vous</h2>
            <p class="text-lg text-primary-500 max-w-md mx-auto lg:mx-0">
              Vous exercez un métier de proximité et cherchez plus de visibilité ?
              Je vous accompagne dans votre présence en ligne.
            </p>
          </div>
          <div class="hidden lg:flex justify-center">
            <div class="relative">
              <!-- Decorative elements -->
              <div class="absolute -top-4 -right-4 w-full h-full bg-accent-500/20 rounded-3xl"></div>
              <div class="absolute -bottom-4 -left-4 w-full h-full bg-primary-200/30 rounded-3xl"></div>
              <!-- Photo -->
              <img src="assets/images/commercant.png"
                   alt="Romain accompagnant un commerçant local"
                   class="relative w-80 h-64 object-cover object-center rounded-3xl shadow-soft-lg border-4 border-white"
                   loading="lazy">
              <!-- Floating badge -->
              <div class="absolute -bottom-3 -left-3 bg-accent-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium">
                Accompagnement personnalisé
              </div>
            </div>
          </div>
        </div>

        <!-- Audiences grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            *ngFor="let audience of audiences; let i = index"
            class="group p-6 rounded-2xl border border-primary-100 bg-white hover:bg-accent-50 hover:border-accent-200 transition-all duration-500 cursor-default">
            <div class="flex items-center space-x-4">
              <!-- Icon -->
              <div class="w-12 h-12 rounded-xl bg-accent-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-accent-700 transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <ng-container [ngSwitch]="audience.icon">
                    <path *ngSwitchCase="'hard-hat'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    <path *ngSwitchCase="'flower'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    <path *ngSwitchCase="'utensils'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    <path *ngSwitchCase="'store'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    <path *ngSwitchCase="'briefcase'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    <path *ngSwitchCase="'rocket'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </ng-container>
                </svg>
              </div>

              <!-- Content -->
              <div>
                <h3 class="font-semibold text-primary-900 mb-0.5">{{ audience.name }}</h3>
                <p class="text-primary-400 text-sm">{{ audience.examples }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16">
          <p class="text-primary-500 mb-4 text-sm">
            Votre métier n'est pas dans la liste ?
          </p>
          <a routerLink="/contact" class="inline-flex items-center text-accent-600 font-medium text-sm hover:text-accent-700 transition-colors group">
            Parlons de votre projet
            <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class TargetAudienceComponent {
  audiences = TARGET_AUDIENCES;
}
