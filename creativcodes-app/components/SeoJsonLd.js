import { packages, salesEmail, serviceTiers } from "./siteData";

export default function SeoJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.creativcodes.com";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "CreativCodes",
        description: "Technical consulting, automation, cloud, AI, and fractional CTO services for growing businesses.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "CreativCodes",
        url: siteUrl,
        email: salesEmail,
        logo: `${siteUrl}/CreativIcon.svg`,
        contactPoint: {
          "@type": "ContactPoint",
          email: salesEmail,
          contactType: "sales",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: "CreativCodes",
        url: siteUrl,
        image: `${siteUrl}/creativ-codes-logo.jpeg`,
        email: salesEmail,
        areaServed: { "@type": "Country", name: "United States" },
        slogan: "Voltage for modern business",
        description:
          "CreativCodes provides administrative support, marketing operations, technical consulting, senior engineering, cloud architecture, AI systems, and fractional CTO services.",
        priceRange: "$59-$350 per hour",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "CreativCodes service catalog",
          itemListElement: serviceTiers.map((service) => ({
            "@type": "Offer",
            name: service.name,
            url: `${siteUrl}/#${service.slug}`,
            priceCurrency: "USD",
            price: service.rate.replace(/[^0-9]/g, ""),
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: "USD",
              price: service.rate.replace(/[^0-9]/g, ""),
              unitText: "hour",
            },
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.summary,
              serviceType: service.items.join(", "),
              provider: { "@id": `${siteUrl}/#organization` },
            },
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#packages`,
        name: "CreativCodes productized retainer packages",
        itemListElement: packages.map((servicePackage, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: servicePackage.name,
          description: servicePackage.description,
          url: `${siteUrl}/#packages`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
