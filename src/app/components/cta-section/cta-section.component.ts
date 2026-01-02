import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SITE_DATA } from '../../shared/data/site.data';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 md:py-32 bg-primary-900 relative overflow-hidden">
      <!-- Subtle gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900 via-accent-900 to-primary-900 opacity-50"></div>

      <!-- Decorative elements -->
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl"></div>

      <div class="container-custom relative z-10">
        <div class="max-w-2xl mx-auto text-center">
          <!-- Small label -->
          <span class="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-8">
            Commencez maintenant
          </span>

          <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            Prêt à donner vie<br>
            <span class="text-accent-300">à votre projet ?</span>
          </h2>

          <p class="text-lg text-primary-300 mb-10 max-w-md mx-auto">
            Premier échange gratuit et sans engagement.
            Parlons de votre activité et de vos objectifs.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contact" class="btn-white group">
              Demander un devis gratuit
              <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            <a [href]="phoneLink" class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/30 rounded-full transition-all duration-500 hover:bg-white/10 hover:border-white/50">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Appeler maintenant
            </a>
          </div>

          <p class="text-primary-500 mt-8 text-sm">
            Disponible {{ hours }}
          </p>
        </div>
      </div>
    </section>
  `
})
export class CtaSectionComponent {
  phoneLink = SITE_DATA.contact.phoneLink;
  hours = SITE_DATA.contact.hours;
}
