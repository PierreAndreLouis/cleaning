import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function ContactSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Contact - Services de Nettoyage Professionnels</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Contactez-nous pour découvrir nos services de nettoyage professionnels. Nous offrons des solutions adaptées pour maintenir vos espaces propres et accueillants."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="services de nettoyage, nettoyage résidentiel, nettoyage commercial, entretien ménager, services d'entretien, nettoyage professionnel" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Contact - Services de Nettoyage Professionnels" />
                <meta property="og:description" content="Contactez notre équipe pour en savoir plus sur nos services de nettoyage professionnels et obtenir un devis personnalisé." />
                <meta property="og:image" content="https://mon-site.com/images/contact-cleaning-service.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact - Services de Nettoyage Professionnels" />
                <meta name="twitter:description" content="Contactez-nous pour en savoir plus sur nos services de nettoyage professionnels et obtenir un devis personnalisé." />
                <meta name="twitter:image" content="https://mon-site.com/images/contact-cleaning-service.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Services de Nettoyage Professionnels",
              "url": "https://mon-site.com/contact",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+1-800-555-5555",
                "email": "contact@mon-site.com"
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
