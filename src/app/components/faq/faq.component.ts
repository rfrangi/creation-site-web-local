import { Component, DOCUMENT, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FAQ } from '../../shared/data/site.data';

const SCHEMA_ID = 'faq-schema';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="faq" class="section bg-white">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="badge badge-light mb-6">Questions fréquentes</span>
          <h2 class="mb-6">Ce qu'on me demande le plus souvent</h2>
          <p class="text-lg text-primary-500">
            Les réponses aux questions que se posent la plupart des professionnels
            avant de se lancer.
          </p>
        </div>

        <!-- Liste des questions -->
        <div class="max-w-3xl mx-auto divide-y divide-primary-100 border-y border-primary-100">
          <details *ngFor="let item of faq; let first = first"
                   class="group"
                   [open]="first">
            <summary
              class="flex items-start justify-between gap-6 py-6 cursor-pointer list-none
                     [&::-webkit-details-marker]:hidden
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-lg">
              <h3 class="text-base md:text-lg font-medium text-primary-900 group-hover:text-accent-700 transition-colors">
                {{ item.question }}
              </h3>
              <span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center
                           transition-transform duration-300 group-open:rotate-45">
                <svg class="w-3.5 h-3.5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </span>
            </summary>
            <p class="text-primary-500 text-sm md:text-base leading-relaxed pb-6 pr-12">
              {{ item.answer }}
            </p>
          </details>
        </div>

        <!-- Relance -->
        <div class="text-center mt-14">
          <p class="text-primary-500 mb-4 text-sm">Votre question n'est pas là ?</p>
          <a routerLink="/contact"
             class="inline-flex items-center text-accent-600 font-medium text-sm hover:text-accent-700 transition-colors group">
            Posez-la moi directement
            <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class FaqComponent implements OnDestroy {
  private readonly doc = inject(DOCUMENT);

  faq = FAQ;

  constructor() {
    this.injectSchema();
  }

  /**
   * Donnees structurees FAQPage : rend les questions eligibles aux resultats
   * enrichis de Google. Injecte via le DOM (Angular interdit <script> dans un
   * template) et serialise tel quel dans le HTML prerendu.
   */
  private injectSchema(): void {
    let script = this.doc.getElementById(SCHEMA_ID) as HTMLScriptElement | null;

    if (!script) {
      script = this.doc.createElement('script');
      script.id = SCHEMA_ID;
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    });
  }

  /** La FAQ n'existe que sur l'accueil : le schema ne doit pas suivre ailleurs. */
  ngOnDestroy(): void {
    this.doc.getElementById(SCHEMA_ID)?.remove();
  }
}
