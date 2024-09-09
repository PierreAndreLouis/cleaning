import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function ReservationSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Réservation - Services de Nettoyage Professionnels</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Réservez nos services de nettoyage professionnels pour maintenir vos espaces impeccables. Planifiez votre intervention de nettoyage facilement en ligne pour un service rapide et efficace."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="réservation nettoyage, services de nettoyage, nettoyage professionnel, entretien ménager, nettoyage résidentiel, nettoyage commercial, planification nettoyage" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Réservation - Services de Nettoyage Professionnels" />
                <meta property="og:description" content="Réservez nos services de nettoyage professionnels pour des espaces propres et accueillants. Planifiez votre nettoyage en ligne dès maintenant." />
                <meta property="og:image" content="https://mon-site.com/images/cleaning-reservation.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/reservation" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Réservation - Services de Nettoyage Professionnels" />
                <meta name="twitter:description" content="Réservez facilement vos services de nettoyage professionnels pour maintenir vos espaces impeccables. Planifiez votre nettoyage en ligne." />
                <meta name="twitter:image" content="https://mon-site.com/images/cleaning-reservation.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "name": "Réservation de Services de Nettoyage",
              "description": "Réservez nos services de nettoyage professionnels pour un entretien impeccable de vos espaces résidentiels ou commerciaux. Service rapide et efficace.",
              "provider": {
                "@type": "Organization",
                "name": "Services de Nettoyage Professionnels",
                "url": "https://mon-site.com"
              },
              "url": "https://mon-site.com/reservation"
            }
          `}
                </script>

                <meta name="google-site-verification" content="N-zeL1g6i8H01BkSrgIW_lM7MYrYGG3lVzsGMGvSq4o" />

                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFV9GQVC5K"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-GFV9GQVC5K');
                    `}
                </script>
            </Helmet>
        </div>
    )
}
