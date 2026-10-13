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
          <span class="badge badge-light mb-6">Réalisations</span>
          <h2 class="mb-4">Quelques projets réalisés</h2>
          <p class="text-lg text-primary-500">
            Sites vitrines, boutiques en ligne et applications métier.
            Des projets livrés, et d'autres en cours de construction.
          </p>
        </div>

        <!-- Portfolio grid -->
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ng-container *ngFor="let project of portfolio">

            <!-- Projet en ligne : carte cliquable -->
            <a *ngIf="project.url"
               [href]="project.url"
               target="_blank"
               rel="noopener noreferrer"
               class="group block bg-white rounded-2xl overflow-hidden border border-primary-100 hover:shadow-soft hover:border-primary-200 transition-all duration-500">
              <ng-container *ngTemplateOutlet="carte; context: { $implicit: project, cliquable: true }"></ng-container>
            </a>

            <!-- Projet pas encore en ligne : carte non cliquable -->
            <div *ngIf="!project.url"
                 class="group block bg-white rounded-2xl overflow-hidden border border-primary-100 transition-all duration-500">
              <ng-container *ngTemplateOutlet="carte; context: { $implicit: project, cliquable: false }"></ng-container>
            </div>

          </ng-container>
        </div>

        <!-- Gabarit commun aux deux types de cartes -->
        <ng-template #carte let-project let-cliquable="cliquable">
          <!-- Preview area with logo -->
          <div class="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden flex items-center justify-center p-8">
            <img
              [src]="project.logo"
              [alt]="'Logo ' + project.name"
              width="200"
              height="96"
              class="max-h-24 max-w-[200px] object-contain transition-transform duration-300"
              [class.group-hover:scale-110]="cliquable"
              loading="lazy">

            <!-- Pastille de statut -->
            <span *ngIf="project.status"
                  class="absolute top-4 right-4 bg-primary-900 text-white px-3 py-1 rounded-full text-xs font-medium">
              {{ project.status }}
            </span>

            <!-- Hover overlay, uniquement si le projet est en ligne -->
            <div *ngIf="cliquable"
                 class="absolute inset-0 bg-accent-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white font-semibold flex items-center">
                Visiter {{ project.name }}
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-start justify-between gap-3 mb-2">
              <h3 class="font-semibold text-xl text-primary-900">{{ project.name }}</h3>
              <span class="badge badge-light text-xs whitespace-nowrap">{{ project.category }}</span>
            </div>
            <p class="text-primary-500 text-sm leading-relaxed">{{ project.description }}</p>
          </div>
        </ng-template>

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
