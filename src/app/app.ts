import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SITE_DATA } from './shared/data/site.data';
import { SeoData, SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <router-outlet />
    <app-footer />

    <!-- Sticky mobile CTA -->
    <div class="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 p-3 z-40 shadow-lg">
      <div class="flex gap-3">
        <a [href]="phoneLink" class="flex-1 btn-call py-3 text-center">
          <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Appeler
        </a>
        <a routerLink="/contact" class="flex-1 btn-primary py-3 text-center">
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
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly viewportScroller = inject(ViewportScroller);

  phoneLink = SITE_DATA.contact.phoneLink;

  constructor() {
    // Le header est fixe (h-20) : sans decalage, une ancre place la cible
    // sous le bandeau et le titre de section reste masque.
    this.viewportScroller.setOffset([0, 96]);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.applySeo());

    // Premiere navigation : appliquee aussi cote serveur pendant le prerendu.
    this.applySeo();
  }

  /** Remonte jusqu'a la route active la plus profonde pour y lire data.seo. */
  private applySeo(): void {
    let route = this.route;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const seo = route.snapshot.data['seo'] as SeoData | undefined;
    if (seo) {
      this.seo.update(seo);
    }
  }
}
