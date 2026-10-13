import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROCESS_STEPS, SITE_DATA } from '../../shared/data/site.data';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="methode" class="section bg-white">
      <div class="container-custom">
        <!-- Header with illustration -->
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="text-center lg:text-left">
            <span class="badge badge-light mb-6">Comment ça marche</span>
            <h2 class="mb-6">Vous voyez avant de payer</h2>
            <p class="text-lg text-primary-500">
              J'étudie votre métier, je vous fais une proposition, puis je développe
              un premier brouillon. Vous ne payez qu'à partir du moment où il vous plaît.
            </p>
          </div>
          <div class="hidden lg:block">
            <img src="assets/images/process-illustration.svg"
                 alt="Illustration des étapes de création"
                 class="w-full max-w-md mx-auto"
                 loading="lazy">
          </div>
        </div>

        <!-- Steps -->
        <div class="relative max-w-4xl mx-auto">
          <!-- Vertical line -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary-200 -translate-x-1/2"></div>

          <div class="space-y-12 md:space-y-0">
            <div
              *ngFor="let step of steps; let i = index; let odd = odd"
              class="relative md:grid md:grid-cols-2 md:gap-16 items-center"
              [class.md:mb-16]="i < steps.length - 1">

              <!-- Content - alternating sides -->
              <div [class.md:col-start-1]="!odd" [class.md:col-start-2]="odd" [class.md:text-right]="!odd">
                <div class="bg-white rounded-2xl p-8 border border-primary-100 hover:shadow-soft transition-all duration-500">
                  <span class="text-xs font-medium text-primary-400 tracking-widest uppercase mb-2 block">
                    Étape {{ step.step }}
                  </span>
                  <h3 class="text-xl font-semibold text-primary-900 mb-3">{{ step.title }}</h3>
                  <p class="text-primary-500 text-sm leading-relaxed mb-4">{{ step.description }}</p>
                  <span class="inline-block px-3 py-1 bg-primary-50 rounded-full text-xs text-primary-600 font-medium">
                    {{ step.duration }}
                  </span>
                </div>
              </div>

              <!-- Center dot -->
              <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-900 border-4 border-white shadow-soft z-10"></div>
            </div>
          </div>
        </div>

        <!-- Engagement paiement -->
        <div class="max-w-4xl mx-auto mt-20">
          <div class="bg-primary-900 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div class="w-14 h-14 rounded-2xl bg-accent-600 flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white mb-2">{{ promise }}</h3>
              <p class="text-primary-300 text-sm leading-relaxed">
                L'étude de votre activité, le devis et le premier brouillon ne vous engagent à rien.
                Si le résultat ne vous convainc pas, vous ne devez rien et nous en restons là.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16">
          <p class="text-primary-500 mb-6 text-sm">Prêt à démarrer votre projet ?</p>
          <a routerLink="/contact" class="btn-primary group">
            Demander mon étude gratuite
            <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ProcessComponent {
  steps = PROCESS_STEPS;
  promise = SITE_DATA.promise;
}
