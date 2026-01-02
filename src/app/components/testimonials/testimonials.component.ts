import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS } from '../../shared/data/site.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="temoignages" class="section bg-primary-50/30">
      <div class="container-custom">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-20">
          <span class="badge badge-light mb-6">Témoignages</span>
          <h2 class="mb-6">Ils m'ont fait confiance</h2>
          <p class="text-lg text-primary-500">
            Des professionnels comme vous qui ont choisi un accompagnement personnalisé.
          </p>
        </div>

        <!-- Testimonials grid -->
        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div
            *ngFor="let testimonial of testimonials; let i = index"
            class="bg-white rounded-2xl p-8 border border-primary-100 hover:shadow-soft hover:border-primary-200 transition-all duration-500">

            <!-- Quote icon -->
            <div class="mb-6">
              <svg class="w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Quote -->
            <blockquote class="text-primary-700 mb-8 leading-relaxed">
              {{ testimonial.quote }}
            </blockquote>

            <!-- Author -->
            <div class="flex items-center pt-6 border-t border-primary-100">
              <div class="w-11 h-11 rounded-full bg-primary-900 flex items-center justify-center mr-4">
                <span class="text-white font-medium">
                  {{ testimonial.name.charAt(0) }}
                </span>
              </div>
              <div>
                <p class="font-medium text-primary-900 text-sm">{{ testimonial.name }}</p>
                <p class="text-xs text-primary-400">{{ testimonial.role }} · {{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust note -->
        <div class="text-center mt-16">
          <div class="inline-flex items-center space-x-3 text-primary-400">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-primary-200 border-2 border-white"></div>
              <div class="w-8 h-8 rounded-full bg-primary-300 border-2 border-white"></div>
              <div class="w-8 h-8 rounded-full bg-primary-400 border-2 border-white"></div>
            </div>
            <span class="text-sm">Rejoignez nos clients satisfaits</span>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  testimonials = TESTIMONIALS;
}
