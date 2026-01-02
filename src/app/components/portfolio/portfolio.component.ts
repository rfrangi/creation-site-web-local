import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../shared/data/site.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="realisations" class="section-alt">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <span class="badge-primary mb-4">Réalisations</span>
          <h2 class="mb-4">Quelques projets réalisés</h2>
          <p class="text-lg text-gray-600">
            Découvrez des exemples de sites que j'ai créés pour des clients.
          </p>
        </div>

        <!-- Portfolio grid -->
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            *ngFor="let project of portfolio"
            [href]="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">

            <!-- Preview area with logo -->
            <div class="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden flex items-center justify-center p-8">
              <img
                [src]="project.logo"
                [alt]="'Logo ' + project.name"
                class="max-h-24 max-w-[200px] object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy">

              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-accent-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="text-white font-semibold flex items-center">
                  Visiter {{ project.name }}
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-bold text-xl text-gray-900">{{ project.name }}</h3>
                <span class="badge-primary text-xs">{{ project.category }}</span>
              </div>
              <p class="text-gray-600">{{ project.description }}</p>
            </div>
          </a>
        </div>

        <!-- Note -->
        <p class="text-center text-gray-500 mt-8 text-sm">
          Chaque projet est unique. Le vôtre le sera aussi.
        </p>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  portfolio = PORTFOLIO;
}
