import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../shared/data/site.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="services" class="section bg-white">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-20">
          <span class="badge badge-light mb-6">Services</span>
          <h2 class="mb-6">Des offres adaptees a vos besoins</h2>
          <p class="text-lg text-primary-500">
            Pas de solution generique. Chaque site est concu selon vos objectifs
            et les attentes de vos clients.
          </p>
        </div>

        <!-- Services grid -->
        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div
            *ngFor="let service of services; let i = index"
            class="group relative flex flex-col p-8 rounded-3xl transition-all duration-500"
            [class.bg-primary-900]="service.popular"
            [class.text-white]="service.popular"
            [class.bg-white]="!service.popular"
            [class.border]="!service.popular"
            [class.border-primary-100]="!service.popular"
            [class.hover:border-primary-200]="!service.popular"
            [class.hover:shadow-soft]="!service.popular">

            <!-- Popular badge -->
            <div
              *ngIf="service.popular"
              class="absolute -top-3 left-6">
              <span class="bg-accent-500 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                Recommande
              </span>
            </div>

            <!-- Number/Index indicator -->
            <div class="mb-8">
              <span class="text-5xl font-light"
                    [class.text-primary-200]="!service.popular"
                    [class.text-white/20]="service.popular">
                0{{ i + 1 }}
              </span>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-semibold mb-3"
                [class.text-white]="service.popular"
                [class.text-primary-900]="!service.popular">
              {{ service.title }}
            </h3>
            <p class="mb-8"
               [class.text-primary-300]="service.popular"
               [class.text-primary-500]="!service.popular">
              {{ service.description }}
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-10 flex-grow">
              <li *ngFor="let feature of service.features" class="flex items-start">
                <svg class="w-4 h-4 mr-3 mt-1 flex-shrink-0"
                     [class.text-accent-300]="service.popular"
                     [class.text-accent-500]="!service.popular"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm"
                      [class.text-primary-200]="service.popular"
                      [class.text-primary-600]="!service.popular">
                  {{ feature }}
                </span>
              </li>
            </ul>

            <!-- Price & CTA -->
            <div class="mt-auto">
              <p class="text-2xl font-semibold mb-6"
                 [class.text-white]="service.popular"
                 [class.text-primary-900]="!service.popular">
                {{ service.price }}
              </p>
              <a routerLink="/contact"
                 class="block w-full text-center py-3.5 px-6 rounded-full text-sm font-medium transition-all duration-300"
                 [class.bg-white]="service.popular"
                 [class.text-primary-900]="service.popular"
                 [class.hover:bg-primary-50]="service.popular"
                 [class.bg-primary-900]="!service.popular"
                 [class.text-white]="!service.popular"
                 [class.hover:bg-primary-800]="!service.popular">
                Demander un devis
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom note -->
        <p class="text-center text-primary-400 mt-16 text-sm">
          Chaque projet est unique. Les tarifs sont indicatifs et ajustes selon vos besoins specifiques.
        </p>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services = SERVICES;
}
