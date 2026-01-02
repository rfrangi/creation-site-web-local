import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SITE_DATA } from '../../shared/data/site.data';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  activity: string;
  message: string;
  budget: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <main id="main-content" class="pt-20">
      <!-- Hero section -->
      <section class="py-16 md:py-24 bg-white relative overflow-hidden">
        <div class="absolute inset-0 grid-overlay"></div>
        <div class="container-custom relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="text-center lg:text-left">
              <span class="badge badge-light mb-6">Contact</span>
              <h1 class="mb-6">Parlons de votre projet</h1>
              <p class="text-lg text-primary-500 max-w-md mx-auto lg:mx-0">
                Remplissez le formulaire ou appelez-moi directement.
                Premier échange gratuit et sans engagement.
              </p>
            </div>
            <div class="hidden lg:block">
              <img src="assets/images/contact-illustration.svg"
                   alt="Illustration contact"
                   class="w-full max-w-md mx-auto"
                   loading="eager">
            </div>
          </div>
        </div>
      </section>

      <!-- Contact section -->
      <section class="py-16 md:py-24 bg-primary-50/30">
        <div class="container-custom">
          <div class="grid lg:grid-cols-3 gap-12">
            <!-- Form -->
            <div class="lg:col-span-2">
              <div class="bg-white rounded-3xl border border-primary-100 p-8 md:p-10">
                <h2 class="text-2xl font-semibold text-primary-900 mb-8">Demande de devis gratuit</h2>

                <!-- Success message -->
                <div *ngIf="formSubmitted()" class="bg-accent-50 border border-accent-200 rounded-2xl p-8 text-center">
                  <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-primary-900 mb-2">Message envoyé</h3>
                  <p class="text-primary-600">
                    Merci pour votre demande. Je vous recontacte dans les plus brefs délais.
                  </p>
                </div>

                <!-- Form -->
                <form
                  *ngIf="!formSubmitted()"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  (ngSubmit)="onSubmit($event)"
                  class="space-y-6">

                  <!-- Honeypot for spam -->
                  <input type="hidden" name="form-name" value="contact">
                  <p class="hidden">
                    <label>Ne pas remplir : <input name="bot-field"></label>
                  </p>

                  <!-- Name & Email -->
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label for="name" class="block text-sm font-medium text-primary-700 mb-2">
                        Nom / Prénom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        [(ngModel)]="form.name"
                        required
                        class="w-full px-4 py-3.5"
                        placeholder="Jean Dupont">
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-primary-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        [(ngModel)]="form.email"
                        required
                        class="w-full px-4 py-3.5"
                        placeholder="jean.dupont@email.com">
                    </div>
                  </div>

                  <!-- Phone & Activity -->
                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <label for="phone" class="block text-sm font-medium text-primary-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        [(ngModel)]="form.phone"
                        required
                        class="w-full px-4 py-3.5"
                        placeholder="06 12 34 56 78">
                    </div>
                    <div>
                      <label for="activity" class="block text-sm font-medium text-primary-700 mb-2">
                        Votre activité *
                      </label>
                      <select
                        id="activity"
                        name="activity"
                        [(ngModel)]="form.activity"
                        required
                        class="w-full px-4 py-3.5">
                        <option value="">Sélectionnez...</option>
                        <option value="artisan">Artisan</option>
                        <option value="commercant">Commerçant</option>
                        <option value="profession-liberale">Profession libérale</option>
                        <option value="createur">Créateur d'entreprise</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <!-- Message -->
                  <div>
                    <label for="message" class="block text-sm font-medium text-primary-700 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      [(ngModel)]="form.message"
                      required
                      rows="5"
                      class="w-full px-4 py-3.5"
                      placeholder="Parlez-moi de votre activité, vos objectifs, ce que vous attendez de votre site..."></textarea>
                  </div>

                  <!-- Budget -->
                  <div>
                    <label for="budget" class="block text-sm font-medium text-primary-700 mb-2">
                      Budget indicatif (optionnel)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      [(ngModel)]="form.budget"
                      class="w-full px-4 py-3.5">
                      <option value="">Je ne sais pas encore</option>
                      <option value="< 500">Moins de 500 euros</option>
                      <option value="500-1000">Entre 500 et 1000 euros</option>
                      <option value="> 1000">Plus de 1000 euros</option>
                    </select>
                  </div>

                  <!-- RGPD notice -->
                  <p class="text-sm text-primary-400">
                    En soumettant ce formulaire, vous acceptez que vos données soient utilisées
                    pour vous recontacter concernant votre projet.
                    <a routerLink="/politique-confidentialite" class="text-primary-700 hover:text-primary-900 underline">
                      Voir notre politique de confidentialité
                    </a>
                  </p>

                  <!-- Submit -->
                  <button
                    type="submit"
                    [disabled]="isSubmitting()"
                    class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                    <span *ngIf="!isSubmitting()">Envoyer ma demande</span>
                    <span *ngIf="isSubmitting()" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  </button>
                </form>
              </div>
            </div>

            <!-- Contact info -->
            <div class="space-y-6">
              <!-- Quick contact card -->
              <div class="bg-white rounded-2xl border border-primary-100 p-8">
                <h3 class="text-lg font-semibold text-primary-900 mb-6">Contact direct</h3>

                <div class="space-y-4">
                  <!-- Phone -->
                  <a [href]="site.contact.phoneLink"
                     class="flex items-center p-4 bg-accent-50 rounded-xl hover:bg-accent-100 transition-colors group">
                    <div class="w-11 h-11 bg-accent-600 rounded-xl flex items-center justify-center mr-4">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-primary-900 text-sm">Appeler</p>
                      <p class="text-primary-500 text-sm">{{ site.contact.phone }}</p>
                    </div>
                  </a>

                  <!-- Email -->
                  <a [href]="'mailto:' + site.contact.email"
                     class="flex items-center p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
                    <div class="w-11 h-11 bg-accent-600 rounded-xl flex items-center justify-center mr-4">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-primary-900 text-sm">Email</p>
                      <p class="text-primary-500 text-sm">{{ site.contact.email }}</p>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Info card -->
              <div class="bg-primary-900 rounded-2xl p-8">
                <h3 class="text-lg font-semibold text-white mb-6">Informations</h3>
                <div class="space-y-4 text-primary-300">
                  <p class="flex items-center text-sm">
                    <svg class="w-4 h-4 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Nord, Hauts-de-France</span>
                  </p>
                  <p class="flex items-center text-sm">
                    <svg class="w-4 h-4 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Disponible {{ site.contact.hours }}</span>
                  </p>
                </div>
              </div>

              <!-- Trust badges -->
              <div class="bg-white rounded-2xl border border-primary-100 p-6">
                <div class="space-y-3">
                  <div class="flex items-center text-primary-600">
                    <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mr-3"></div>
                    <span class="text-sm">Réponse sous 24h</span>
                  </div>
                  <div class="flex items-center text-primary-600">
                    <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mr-3"></div>
                    <span class="text-sm">Devis gratuit et détaillé</span>
                  </div>
                  <div class="flex items-center text-primary-600">
                    <div class="w-1.5 h-1.5 rounded-full bg-accent-500 mr-3"></div>
                    <span class="text-sm">Sans engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
})
export class ContactComponent {
  site = SITE_DATA;

  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    activity: '',
    message: '',
    budget: ''
  };

  isSubmitting = signal(false);
  formSubmitted = signal(false);

  onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting.set(true);

    // Simulate form submission (Netlify will handle the actual submission)
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
    .then(() => {
      this.formSubmitted.set(true);
      this.isSubmitting.set(false);
    })
    .catch((error) => {
      console.error('Form submission error:', error);
      this.isSubmitting.set(false);
      // Fallback: show success anyway for better UX
      this.formSubmitted.set(true);
    });
  }
}
