import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function HomeSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Accueil - Services de Nettoyage Professionnels</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez nos services de nettoyage professionnels pour maintenir vos espaces impeccables. Profitez d'un service de qualité adapté à vos besoins résidentiels et commerciaux."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="services de nettoyage, nettoyage résidentiel, nettoyage commercial, entretien ménager, nettoyage professionnel, services d'entretien" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Accueil - Services de Nettoyage Professionnels" />
                <meta property="og:description" content="Découvrez nos services de nettoyage professionnels pour des espaces propres et accueillants. Contactez-nous pour un devis personnalisé." />
                <meta property="og:image" content="https://mon-site.com/images/cleaning-home-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accueil - Services de Nettoyage Professionnels" />
                <meta name="twitter:description" content="Maintenez vos espaces impeccables avec nos services de nettoyage professionnels. Contactez-nous pour un devis personnalisé." />
                <meta name="twitter:image" content="https://mon-site.com/images/cleaning-home-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "Services de Nettoyage Professionnels",
              "url": "https://mon-site.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mon-site.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
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
