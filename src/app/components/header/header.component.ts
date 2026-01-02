import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SITE_DATA } from '../../shared/data/site.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class.blur-bg]="isScrolled()"
      [class.shadow-soft]="isScrolled()"
      [class.bg-transparent]="!isScrolled()">
      <nav class="container-custom">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center group">
            <span class="text-lg font-semibold tracking-tight transition-colors duration-300"
                  [class.text-primary-900]="isScrolled()"
                  [class.text-primary-900]="!isScrolled()">
              {{ siteName }}
            </span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-10">
            <a href="#services"
               class="text-sm font-medium transition-colors duration-300 hover:text-primary-900"
               [class.text-primary-600]="isScrolled()"
               [class.text-primary-600]="!isScrolled()">
              Services
            </a>
            <a href="#pour-qui"
               class="text-sm font-medium transition-colors duration-300 hover:text-primary-900"
               [class.text-primary-600]="isScrolled()"
               [class.text-primary-600]="!isScrolled()">
              Pour qui
            </a>
            <a href="#methode"
               class="text-sm font-medium transition-colors duration-300 hover:text-primary-900"
               [class.text-primary-600]="isScrolled()"
               [class.text-primary-600]="!isScrolled()">
              Methode
            </a>
            <a href="#temoignages"
               class="text-sm font-medium transition-colors duration-300 hover:text-primary-900"
               [class.text-primary-600]="isScrolled()"
               [class.text-primary-600]="!isScrolled()">
              Avis
            </a>
            <a routerLink="/contact" class="btn-primary text-sm px-6 py-2.5">
              Devis gratuit
            </a>
          </div>

          <!-- Mobile menu button -->
          <button
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-xl text-primary-700 hover:bg-primary-50 transition-colors"
            aria-label="Menu">
            <svg *ngIf="!mobileMenuOpen()" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg *ngIf="mobileMenuOpen()" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div
          *ngIf="mobileMenuOpen()"
          class="md:hidden absolute left-4 right-4 top-full mt-2 bg-white rounded-2xl shadow-soft-lg border border-primary-100 p-6 space-y-1 animate-fade-in">
          <a href="#services"
             (click)="closeMobileMenu()"
             class="block py-3 px-4 text-primary-700 font-medium hover:bg-primary-50 rounded-xl transition-colors">
            Services
          </a>
          <a href="#pour-qui"
             (click)="closeMobileMenu()"
             class="block py-3 px-4 text-primary-700 font-medium hover:bg-primary-50 rounded-xl transition-colors">
            Pour qui
          </a>
          <a href="#methode"
             (click)="closeMobileMenu()"
             class="block py-3 px-4 text-primary-700 font-medium hover:bg-primary-50 rounded-xl transition-colors">
            Methode
          </a>
          <a href="#temoignages"
             (click)="closeMobileMenu()"
             class="block py-3 px-4 text-primary-700 font-medium hover:bg-primary-50 rounded-xl transition-colors">
            Avis
          </a>
          <div class="pt-4 mt-4 border-t border-primary-100 space-y-3">
            <a routerLink="/contact"
               (click)="closeMobileMenu()"
               class="btn-primary w-full text-center text-sm">
              Devis gratuit
            </a>
            <a [href]="phoneLink"
               class="btn-secondary w-full text-center text-sm">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Appeler
            </a>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  siteName = SITE_DATA.shortName;
  phoneLink = SITE_DATA.contact.phoneLink;

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
