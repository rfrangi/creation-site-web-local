import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_DATA } from '../../shared/data/site.data';

@Component({
  selector: 'app-mentions-legales',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main id="main-content" class="pt-20">
      <section class="section bg-white">
        <div class="container-custom">
          <div class="max-w-3xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold mb-8">Mentions légales</h1>

            <div class="prose prose-lg max-w-none">
              <h2>1. Éditeur du site</h2>
              <p>
                Le site <strong>{{ site.domain }}</strong> est édité par :
              </p>
              <ul>
                <li><strong>Nom :</strong> {{ site.contact.name }}</li>
                <li><strong>Statut :</strong> Auto-entrepreneur</li>
                <li><strong>Téléphone :</strong> {{ site.contact.phone }}</li>
                <li><strong>Email :</strong> {{ site.contact.email }}</li>
                <li><strong>SIRET :</strong> [À compléter]</li>
              </ul>

              <h2>2. Directeur de la publication</h2>
              <p>
                Le directeur de la publication est {{ site.contact.name }}.
              </p>

              <h2>3. Hébergement</h2>
              <p>
                Le site est hébergé par :
              </p>
              <ul>
                <li><strong>Netlify, Inc.</strong></li>
                <li>512 2nd Street, Suite 200</li>
                <li>San Francisco, CA 94107</li>
                <li>États-Unis</li>
                <li>Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">www.netlify.com</a></li>
              </ul>

              <h2>4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo, icônes, etc.)
                est la propriété exclusive de {{ site.contact.name }}, à l'exception des marques, logos
                ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
                même partielle, de ces différents éléments est strictement interdite sans l'accord
                exprès par écrit de {{ site.contact.name }}.
              </p>

              <h2>5. Limitation de responsabilité</h2>
              <p>
                {{ site.contact.name }} ne pourra être tenu responsable des dommages directs et indirects
                causés au matériel de l'utilisateur, lors de l'accès au site {{ site.domain }}.
              </p>
              <p>
                {{ site.contact.name }} décline toute responsabilité quant à l'utilisation qui pourrait
                être faite des informations et contenus présents sur {{ site.domain }}.
              </p>

              <h2>6. Liens hypertextes</h2>
              <p>
                Le site {{ site.domain }} peut contenir des liens hypertextes vers d'autres sites.
                {{ site.contact.name }} n'exerce aucun contrôle sur ces sites et décline toute
                responsabilité quant à leur contenu.
              </p>

              <h2>7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>

              <h2>8. Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
              </p>
              <ul>
                <li>Par email : {{ site.contact.email }}</li>
                <li>Par téléphone : {{ site.contact.phone }}</li>
              </ul>

              <p class="text-gray-500 text-sm mt-8">
                Dernière mise à jour : Décembre 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .prose h2 {
      @apply text-xl font-bold mt-8 mb-4 text-gray-900;
    }
    .prose p {
      @apply mb-4 text-gray-700;
    }
    .prose ul {
      @apply list-disc list-inside mb-4 text-gray-700;
    }
    .prose li {
      @apply mb-2;
    }
    .prose a {
      @apply text-primary-600 hover:underline;
    }
  `]
})
export class MentionsLegalesComponent {
  site = SITE_DATA;
}
