import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SITE_DATA } from './shared/data/site.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <router-outlet />
    <app-footer />

    <!-- Sticky mobile CTA -->
    <div class="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 p-3 z-40 shadow-lg">
      <div class="flex gap-3">
        <a [href]="phoneLink" class="flex-1 btn-call py-3 text-center">
          <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Appeler
        </a>
        <a href="/contact" class="flex-1 btn-primary py-3 text-center">
          Devis gratuit
        </a>
      </div>
    </div>

    <!-- Add padding for sticky bar on mobile -->
    <div class="h-20 md:hidden"></div>
  `,
  styles: []
})
export class App {
  phoneLink = SITE_DATA.contact.phoneLink;
}
