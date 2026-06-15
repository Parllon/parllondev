/* ===============================================================
   FONTE ÚNICA DE SEO  (plain JS, sem imports)
   ---------------------------------------------------------------
   Este ficheiro é lido pelo plugin do Vite (vite.config.js) e
   injetado ESTATICAMENTE no index.html durante o build/dev, além
   de gerar sitemap.xml e robots.txt. Por ser estático, o Google e
   os robôs de preview (WhatsApp, LinkedIn, Facebook, X) leem tudo
   sem precisar executar JavaScript.

   Alguns valores (telefone, e-mail, redes) espelham os de
   src/data/content.js de propósito: este ficheiro precisa ser
   "plain" (sem alias/assets) para ser importável pelo Node.
=============================================================== */

export const seoConfig = {
  /* ---- Básico ---- */
  lang: "pt-BR",
  locale: "pt_BR",
  url: "https://parllondev.net", // sem barra no final
  name: "Parllon Mendonça — Desenvolvedor Full Stack",
  shortName: "Parllon Mendonça",
  author: "Parllon Mendonça",
  description:
    "Desenvolvedor Full Stack no Rio de Janeiro. Crio sites, sistemas e APIs com React, Node.js e design moderno — código limpo, performance e foco em resultado para o seu negócio.",
  keywords:
    "Parllon Mendonça, desenvolvedor full stack, programador, criação de sites, desenvolvimento web, React, Node.js, JavaScript, TypeScript, freelancer, Rio de Janeiro, Duque de Caxias",
  themeColor: "#0a0a0a",

  /* ---- Imagem de partilha (Open Graph / Twitter) ----
     Recomendado 1200x630. Coloque public/og-image.jpg para ativar. */
  ogImage: {
    url: "https://parllondev.net/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Parllon Mendonça — Desenvolvedor Full Stack",
    type: "image/jpeg",
  },

  /* ---- Twitter / X (opcional) ----
     Deixe handle vazio se não tiver perfil; as tags são omitidas. */
  twitter: {
    card: "summary_large_image",
    handle: "",
  },

  /* ---- Pessoa (E-E-A-T / autor) ---- */
  person: {
    name: "Parllon Mendonça",
    jobTitle: "Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack que cria aplicações web rápidas, escaláveis e bem desenhadas com React e Node.js.",
    // Foto real (mesma do Hero). Troque por um URL no seu domínio se preferir.
    image:
      "https://horizons-cdn.hostinger.com/2a7fb558-f565-4434-92b4-342aa66596bd/b90d82b63eb90c4a5ed017369e747713.jpg",
    email: "contato@parllondev.net",
    knowsAbout: [
      "React",
      "Node.js",
      "Python",
      "TypeScript",
      "JavaScript",
      "AWS",
      "Docker",
      "React Native",
      "APIs REST",
      "Desenvolvimento Web",
    ],
    sameAs: [
      "https://github.com/Parllon",
      "https://www.linkedin.com/in/parllon-mendonca",
    ],
  },

  /* ---- Negócio (LocalBusiness → ProfessionalService) ----
     ProfessionalService é um subtipo de LocalBusiness, mais
     adequado para quem presta serviço. Edite os campos abaixo. */
  business: {
    type: "ProfessionalService",
    name: "Parllon Mendonça — Desenvolvimento Full Stack",
    priceRange: "$$", // faixa de preço (edite à vontade)
    telephone: "+5522981290841",
    email: "contato@parllondev.net",
    logo: "https://parllondev.net/favicon.svg",
    address: {
      locality: "Duque de Caxias",
      region: "RJ",
      regionName: "Rio de Janeiro",
      country: "BR",
    },
    // Geo a nível de cidade (não é a sua morada exata). Remova se preferir.
    geo: { latitude: -22.7858, longitude: -43.3119 },
    // Áreas atendidas (presencial + remoto em todo o Brasil).
    areaServed: ["Rio de Janeiro", "Brasil"],
    // Serviços oferecidos → vira makesOffer no structured data.
    services: [
      "Desenvolvimento Web Full Stack",
      "Desenvolvimento Front-end (React)",
      "Desenvolvimento Back-end (Node.js)",
      "APIs e Integrações",
      "Aplicações Mobile (React Native)",
      "Consultoria e Otimização de Performance",
    ],
  },
};

/* ===============================================================
   BUILDERS  (puros — usados pelo plugin do Vite)
=============================================================== */

/** Monta o grafo JSON-LD (schema.org). */
export function buildJsonLd(c = seoConfig) {
  const base = c.url.replace(/\/$/, "");
  const personId = `${base}/#person`;
  const businessId = `${base}/#business`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: c.name,
        description: c.description,
        inLanguage: c.lang,
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: c.person.name,
        jobTitle: c.person.jobTitle,
        description: c.person.description,
        url: `${base}/`,
        image: c.person.image,
        email: `mailto:${c.person.email}`,
        knowsAbout: c.person.knowsAbout,
        sameAs: c.person.sameAs,
      },
      {
        "@type": c.business.type,
        "@id": businessId,
        name: c.business.name,
        description: c.description,
        url: `${base}/`,
        image: c.person.image,
        logo: c.business.logo,
        telephone: c.business.telephone,
        email: `mailto:${c.business.email}`,
        priceRange: c.business.priceRange,
        knowsLanguage: c.lang,
        founder: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          addressLocality: c.business.address.locality,
          addressRegion: c.business.address.region,
          addressCountry: c.business.address.country,
        },
        ...(c.business.geo
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: c.business.geo.latitude,
                longitude: c.business.geo.longitude,
              },
            }
          : {}),
        areaServed: c.business.areaServed.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        sameAs: c.person.sameAs,
        makesOffer: c.business.services.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    ],
  };
}

/** Monta a lista de tags de <head> no formato de descritores do Vite. */
export function buildHeadTags(c = seoConfig) {
  const base = c.url.replace(/\/$/, "");
  const head = (attrs) => ({ tag: "meta", attrs, injectTo: "head" });

  const tags = [
    { tag: "title", children: c.name, injectTo: "head" },

    // Primárias
    head({ name: "description", content: c.description }),
    head({ name: "author", content: c.author }),
    head({ name: "keywords", content: c.keywords }),
    head({ name: "theme-color", content: c.themeColor }),
    head({
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    }),
    { tag: "link", attrs: { rel: "canonical", href: `${base}/` }, injectTo: "head" },

    // Open Graph
    head({ property: "og:type", content: "website" }),
    head({ property: "og:site_name", content: c.author }),
    head({ property: "og:title", content: c.name }),
    head({ property: "og:description", content: c.description }),
    head({ property: "og:url", content: `${base}/` }),
    head({ property: "og:locale", content: c.locale }),
    head({ property: "og:image", content: c.ogImage.url }),
    head({ property: "og:image:width", content: String(c.ogImage.width) }),
    head({ property: "og:image:height", content: String(c.ogImage.height) }),
    head({ property: "og:image:alt", content: c.ogImage.alt }),
    head({ property: "og:image:type", content: c.ogImage.type }),

    // Twitter
    head({ name: "twitter:card", content: c.twitter.card }),
    head({ name: "twitter:title", content: c.name }),
    head({ name: "twitter:description", content: c.description }),
    head({ name: "twitter:image", content: c.ogImage.url }),
    head({ name: "twitter:image:alt", content: c.ogImage.alt }),
  ];

  // Tags de Twitter só fazem sentido com handle definido.
  if (c.twitter.handle) {
    tags.push(head({ name: "twitter:site", content: c.twitter.handle }));
    tags.push(head({ name: "twitter:creator", content: c.twitter.handle }));
  }

  // Structured data (JSON-LD) estático.
  tags.push({
    tag: "script",
    attrs: { type: "application/ld+json" },
    children: JSON.stringify(buildJsonLd(c)),
    injectTo: "head",
  });

  return tags;
}

/** Gera o conteúdo do sitemap.xml. */
export function buildSitemap(c = seoConfig) {
  const base = c.url.replace(/\/$/, "");
  const lastmod = new Date().toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${base}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
}

/** Gera o conteúdo do robots.txt. */
export function buildRobots(c = seoConfig) {
  const base = c.url.replace(/\/$/, "");
  return `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;
}
