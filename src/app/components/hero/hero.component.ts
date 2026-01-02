import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SITE_DATA } from '../../shared/data/site.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="relative min-h-screen flex items-center bg-white overflow-hidden">
      <!-- Subtle grid background -->
      <div class="absolute inset-0 grid-overlay"></div>

      <!-- Gradient orbs - decorative -->
      <div class="absolute top-20 right-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-60 animate-float-slow"></div>
      <div class="absolute bottom-20 left-10 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-40 animate-float"></div>

      <div class="container-custom relative z-10 py-24 md:py-32">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="text-center lg:text-left">
            <div class="animate-init animate-fade-in-up">
              <span class="badge badge-light mb-8">
                Artisans · Commerçants · Professions libérales
              </span>
            </div>

            <h1 class="animate-init animate-fade-in-up delay-100 mb-8">
              Votre présence en ligne,<br>
              <span class="text-gradient">qui vous ressemble</span>
            </h1>

            <p class="text-lg md:text-xl text-primary-500 mb-10 max-w-lg mx-auto lg:mx-0 animate-init animate-fade-in-up delay-200">
              Sites web sur mesure pour professionnels du Nord.
              Design épuré, référencement Google, résultats concrets.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-init animate-fade-in-up delay-300">
              <a routerLink="/contact" class="btn-primary group whitespace-nowrap">
                Demander un devis gratuit
                <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a [href]="phoneLink" class="btn-secondary group whitespace-nowrap">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                {{ phone }}
              </a>
            </div>

            <!-- Trust indicators - minimal -->
            <div class="mt-14 flex flex-wrap gap-8 justify-center lg:justify-start animate-init animate-fade-in-up delay-400">
              <div class="flex items-center text-primary-500">
                <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mr-3"></div>
                <span class="text-sm">Échange gratuit</span>
              </div>
              <div class="flex items-center text-primary-500">
                <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mr-3"></div>
                <span class="text-sm">Sans engagement</span>
              </div>
              <div class="flex items-center text-primary-500">
                <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mr-3"></div>
                <span class="text-sm">Dès 200€</span>
              </div>
            </div>
          </div>

          <!-- Visual - SVG Illustration -->
          <div class="hidden lg:flex justify-center items-center relative">
            <div class="relative w-full max-w-lg animate-init animate-scale-in delay-200">
              <img src="assets/images/hero-illustration.svg"
                   alt="Illustration d'un site web professionnel"
                   class="w-full h-auto transform hover:-translate-y-2 transition-all duration-700"
                   loading="eager">

              <!-- Floating accent elements -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-accent-500 rounded-2xl shadow-soft flex items-center justify-center animate-float">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>

              <div class="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-2xl shadow-soft-lg flex items-center justify-center animate-float-slow">
                <svg class="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#services" class="flex flex-col items-center text-primary-400 hover:text-primary-600 transition-colors duration-300">
          <span class="text-xs tracking-widest uppercase mb-2">Découvrir</span>
          <svg class="w-5 h-5 animate-bounce-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-slow {
      animation: float 8s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `]
})
export class HeroComponent implements OnInit {
  phoneLink = SITE_DATA.contact.phoneLink;
  phone = SITE_DATA.contact.phone;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Trigger animations after component loads
      setTimeout(() => {
        document.querySelectorAll('.animate-init').forEach((el, index) => {
          setTimeout(() => {
            el.classList.remove('animate-init');
          }, index * 100);
        });
      }, 100);
    }
  }
}
