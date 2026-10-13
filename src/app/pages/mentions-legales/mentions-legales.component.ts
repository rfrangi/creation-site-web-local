import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SITE_DATA } from '../../shared/data/site.data';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main id="main-content" class="pt-20">
      <section class="section bg-white">
        <div class="container-custom">
          <div class="max-w-3xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold mb-8">Mentions légales</h1>

            <div class="prose prose-lg max-w-none">
              <h2>1. Éditeur du site</h2>
              <p>
                Le site <strong>{{ site.domain }}</strong>, exploité sous l'enseigne
                <strong>{{ site.name }}</strong>, est édité par :
              </p>
              <ul>
                <li><strong>Raison sociale :</strong> {{ legal.raisonSociale }}</li>
                <li><strong>Statut juridique :</strong> {{ legal.statut }}</li>
                <li><strong>Siège social :</strong> {{ legal.adresse }}, {{ legal.codePostal }} {{ legal.ville }}, {{ legal.pays }}</li>
                <li><strong>SIRET :</strong> {{ legal.siret }}</li>
                <li><strong>SIREN :</strong> {{ legal.siren }}</li>
                <li><strong>N° TVA intracommunautaire :</strong> {{ legal.tvaIntracom }}</li>
                <li><strong>RCS :</strong> {{ legal.rcs }}</li>
                <li><strong>Code APE :</strong> {{ legal.ape }}</li>
                <li><strong>Téléphone :</strong> {{ site.contact.phone }}</li>
                <li><strong>Email :</strong> {{ site.contact.email }}</li>
              </ul>

              <h2>2. Directeur de la publication</h2>
              <p>
                Le directeur de la publication est <strong>{{ legal.directeurPublication }}</strong>,
                joignable à l'adresse {{ site.contact.email }}.
              </p>

              <h2>3. Hébergement</h2>
              <p>
                Le site est hébergé sur l'infrastructure d'Amazon Web Services
                (stockage Amazon S3 et diffusion Amazon CloudFront) :
              </p>
              <ul>
                <li><strong>{{ legal.hebergeur.nom }}</strong></li>
                <li>{{ legal.hebergeur.adresse }}</li>
                <li>
                  Site web :
                  <a [href]="legal.hebergeur.site" target="_blank" rel="noopener noreferrer">
                    {{ legal.hebergeur.site }}
                  </a>
                </li>
              </ul>

              <h2>4. Formulaire de contact</h2>
              <p>
                Les demandes envoyées via le formulaire de contact sont acheminées par
                <strong>{{ legal.formulaire.nom }}</strong> ({{ legal.formulaire.pays }}), prestataire
                de traitement de formulaires. Le détail des données collectées et de leur
                traitement figure dans la
                <a routerLink="/politique-confidentialite">politique de confidentialité</a>.
              </p>

              <h2>5. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo, icônes)
                est la propriété exclusive de {{ legal.raisonSociale }}, à l'exception des marques,
                logos ou contenus appartenant à des clients, partenaires ou auteurs tiers, reproduits
                avec leur accord.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou
                publication, même partielle, de ces différents éléments est strictement interdite
                sans l'accord exprès par écrit de {{ legal.raisonSociale }}.
              </p>

              <h2>6. Limitation de responsabilité</h2>
              <p>
                {{ legal.raisonSociale }} s'efforce d'assurer l'exactitude et la mise à jour des
                informations diffusées sur ce site, sans pouvoir en garantir l'exhaustivité.
                Sa responsabilité ne saurait être engagée pour les dommages directs ou indirects
                causés au matériel de l'utilisateur lors de l'accès au site {{ site.domain }},
                ni pour l'usage qui pourrait être fait des informations qui y figurent.
              </p>

              <h2>7. Liens hypertextes</h2>
              <p>
                Le site {{ site.domain }} contient des liens vers des sites réalisés pour des clients
                ainsi que vers des sites tiers. {{ legal.raisonSociale }} n'exerce aucun contrôle sur
                ces sites et décline toute responsabilité quant à leur contenu.
              </p>

              <h2>8. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige, et après échec de toute tentative de résolution amiable,
                les tribunaux français seront seuls compétents.
              </p>

              <h2>9. Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales :
              </p>
              <ul>
                <li>Par email : {{ site.contact.email }}</li>
                <li>Par téléphone : {{ site.contact.phone }}</li>
              </ul>

              <p class="text-primary-500 text-sm mt-8">
                Dernière mise à jour : octobre 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .prose h2 {
      @apply text-xl font-bold mt-8 mb-4 text-primary-900;
    }
    .prose p {
      @apply mb-4 text-primary-600;
    }
    .prose ul {
      @apply list-disc list-inside mb-4 text-primary-600;
    }
    .prose li {
      @apply mb-2;
    }
    .prose a {
      @apply text-accent-700 hover:underline;
    }
  `]
})
export class MentionsLegalesComponent {
  site = SITE_DATA;
  legal = SITE_DATA.legal;
}
