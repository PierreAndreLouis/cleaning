import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function BlogSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Blog - Pierre-André Louis | Services de Nettoyage</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez notre blog dédié aux services de nettoyage. Trouvez des conseils utiles, des astuces d'entretien, et les meilleures pratiques pour garder vos espaces propres et impeccables."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="service de nettoyage, entretien ménager, nettoyage résidentiel, nettoyage commercial, conseils de nettoyage, astuces d'entretien, blog de nettoyage" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Blog - Pierre-André Louis | Services de Nettoyage" />
                <meta property="og:description" content="Lisez notre blog pour des conseils pratiques et des astuces sur les services de nettoyage afin de maintenir des environnements propres et sains." />
                <meta property="og:image" content="https://mon-site.com/images/blog-cleaning-service.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/blog" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog - Pierre-André Louis | Services de Nettoyage" />
                <meta name="twitter:description" content="Suivez notre blog pour des articles utiles et des conseils sur les services de nettoyage pour garder vos espaces impeccables." />
                <meta name="twitter:image" content="https://mon-site.com/images/blog-cleaning-service.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Blog",
              "name": "Blog - Pierre-André Louis",
              "url": "https://mon-site.com/blog",
              "description": "Le blog de Pierre-André Louis offre des conseils et des astuces sur les services de nettoyage pour aider à maintenir des environnements propres et sains.",
              "publisher": {
                "@type": "Organization",
                "name": "Pierre-André Louis",
                "url": "https://mon-site.com",
                "logo": "https://mon-site.com/images/blog-cleaning-service.jpg"  // Mettre à jour avec un logo approprié
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
