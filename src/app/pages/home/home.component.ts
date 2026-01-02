import { Component, OnInit, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { TargetAudienceComponent } from '../../components/target-audience/target-audience.component';
import { WhyMeComponent } from '../../components/why-me/why-me.component';
import { ProcessComponent } from '../../components/process/process.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { ScrollAnimationService } from '../../shared/services/scroll-animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    TargetAudienceComponent,
    WhyMeComponent,
    ProcessComponent,
    TestimonialsComponent,
    PortfolioComponent,
    CtaSectionComponent
  ],
  template: `
    <main id="main-content">
      <app-hero />
      <div class="reveal">
        <app-services />
      </div>
      <div class="reveal">
        <app-target-audience />
      </div>
      <div class="reveal">
        <app-why-me />
      </div>
      <div class="reveal">
        <app-process />
      </div>
      <div class="reveal">
        <app-portfolio />
      </div>
      <div class="reveal">
        <app-testimonials />
      </div>
      <div class="reveal">
        <app-cta-section />
      </div>
    </main>
  `
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  constructor(
    private scrollAnimation: ScrollAnimationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        this.scrollAnimation.observeElements();
      }, 100);
    }
  }

  ngOnDestroy(): void {
    this.scrollAnimation.disconnect();
  }
}
