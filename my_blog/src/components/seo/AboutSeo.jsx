import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function AboutSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>À Propos - Pierre-André Louis | Service de Nettoyage</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez Pierre-André Louis et son service de nettoyage professionnel. Nous nous engageons à fournir un nettoyage impeccable pour des espaces résidentiels et commerciaux."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="service de nettoyage, nettoyage résidentiel, nettoyage commercial, entretien ménager, nettoyage professionnel, entreprise de nettoyage" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="À Propos - Pierre-André Louis | Service de Nettoyage" />
                <meta property="og:description" content="En savoir plus sur Pierre-André Louis et notre engagement à offrir un service de nettoyage de qualité supérieure pour tous vos besoins." />
                <meta property="og:image" content="https://mon-site.com/images/about-cleaning-service.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="À Propos - Pierre-André Louis | Service de Nettoyage" />
                <meta name="twitter:description" content="Découvrez notre service de nettoyage professionnel et comment Pierre-André Louis assure des espaces propres et impeccables." />
                <meta name="twitter:image" content="https://mon-site.com/images/about-cleaning-service.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "serviceType": "Service de Nettoyage",
              "provider": {
                "@type": "Organization",
                "name": "Pierre-André Louis",
                "url": "https://mon-site.com",
                "logo": "https://mon-site.com/images/about-cleaning-service.jpg",
                "sameAs": [
                  "https://www.linkedin.com/in/pierre-andre-louis",
                  "https://twitter.com/pierreandrelouis"
                ]
              },
              "description": "Service de nettoyage professionnel offrant des solutions de nettoyage pour espaces résidentiels et commerciaux.",
              "url": "https://mon-site.com/about"
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
