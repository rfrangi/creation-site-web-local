import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_DATA } from '../../shared/data/site.data';

@Component({
  selector: 'app-politique-confidentialite',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main id="main-content" class="pt-20">
      <section class="section bg-white">
        <div class="container-custom">
          <div class="max-w-3xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-bold mb-8">Politique de confidentialité</h1>

            <div class="prose prose-lg max-w-none">
              <p class="text-lg text-gray-600 mb-8">
                La protection de vos données personnelles est une priorité pour {{ site.contact.name }}.
                Cette politique de confidentialité explique comment nous collectons, utilisons et
                protégeons vos informations.
              </p>

              <h2>1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles est :
              </p>
              <ul>
                <li><strong>{{ site.contact.name }}</strong></li>
                <li>Téléphone : {{ site.contact.phone }}</li>
                <li>Email : {{ site.contact.email }}</li>
              </ul>

              <h2>2. Données collectées</h2>
              <p>
                Nous collectons les données que vous nous fournissez directement via le formulaire de contact :
              </p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Type d'activité professionnelle</li>
                <li>Description de votre projet</li>
                <li>Budget indicatif (optionnel)</li>
              </ul>

              <h2>3. Finalité du traitement</h2>
              <p>
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <ul>
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Vous recontacter concernant votre projet</li>
                <li>Établir un devis personnalisé</li>
                <li>Assurer le suivi de notre relation commerciale</li>
              </ul>

              <h2>4. Base légale du traitement</h2>
              <p>
                Le traitement de vos données repose sur :
              </p>
              <ul>
                <li><strong>Votre consentement</strong> : en soumettant le formulaire de contact</li>
                <li><strong>L'exécution d'un contrat</strong> : pour la réalisation de prestations</li>
                <li><strong>Notre intérêt légitime</strong> : pour répondre à vos demandes</li>
              </ul>

              <h2>5. Destinataires des données</h2>
              <p>
                Vos données personnelles sont destinées uniquement à {{ site.contact.name }}.
                Elles ne sont ni vendues, ni louées, ni cédées à des tiers.
              </p>
              <p>
                Les données du formulaire sont transmises via Netlify Forms, notre prestataire
                d'hébergement, qui agit en tant que sous-traitant.
              </p>

              <h2>6. Durée de conservation</h2>
              <p>
                Vos données sont conservées pendant :
              </p>
              <ul>
                <li><strong>3 ans</strong> à compter de notre dernier contact pour les prospects</li>
                <li><strong>5 ans</strong> après la fin de la relation commerciale pour les clients</li>
              </ul>

              <h2>7. Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD),
                vous disposez des droits suivants :
              </p>
              <ul>
                <li><strong>Droit d'accès</strong> : obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                <li><strong>Droit de rectification</strong> : demander la correction de données inexactes</li>
                <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
                <li><strong>Droit à la limitation</strong> : demander la limitation du traitement</li>
                <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : <strong>{{ site.contact.email }}</strong>
              </p>

              <h2>8. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données personnelles contre tout accès non autorisé,
                modification, divulgation ou destruction.
              </p>
              <ul>
                <li>Connexion sécurisée HTTPS</li>
                <li>Hébergement sécurisé chez Netlify</li>
                <li>Accès limité aux données personnelles</li>
              </ul>

              <h2>9. Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de suivi ou de publicité.
                Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
              </p>

              <h2>10. Modifications</h2>
              <p>
                Cette politique de confidentialité peut être mise à jour à tout moment.
                La date de dernière mise à jour est indiquée en bas de page.
              </p>

              <h2>11. Réclamation</h2>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser
                une réclamation à la CNIL :
              </p>
              <ul>
                <li>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></li>
                <li>Adresse : 3 Place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07</li>
              </ul>

              <h2>12. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité :
              </p>
              <ul>
                <li>Email : {{ site.contact.email }}</li>
                <li>Téléphone : {{ site.contact.phone }}</li>
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
export class PolitiqueConfidentialiteComponent {
  site = SITE_DATA;
}
