import "./globals.css";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.creativcodes.com";
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CreativCodes | AI, Cloud, Automation, and Fractional CTO Services",
    template: "%s | CreativCodes",
  },
  description:
    "CreativCodes helps growing teams convert leads, automate operations, modernize software, scale cloud infrastructure, and access senior AI and fractional CTO leadership.",
  applicationName: "CreativCodes",
  authors: [{ name: "CreativCodes" }],
  creator: "CreativCodes",
  publisher: "CreativCodes",
  category: "Technology consulting",
  keywords: [
    "AI consulting",
    "AI automation",
    "fractional CTO",
    "cloud architecture",
    "DevOps consulting",
    "workflow automation",
    "CRM automation",
    "API integrations",
    "full-stack development",
    "technical consulting",
    "software modernization",
    "lead generation SaaS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "CreativCodes",
    title: "CreativCodes | AI, Cloud, Automation, and Fractional CTO Services",
    description:
      "Add voltage to your business with senior technical services, AI automation, cloud engineering, CRM systems, and fractional CTO support.",
    images: [
      {
        url: "/creativ-codes-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "CreativCodes logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreativCodes | AI, Cloud, Automation, and Fractional CTO Services",
    description:
      "Senior technical services for lead conversion, automation, software modernization, cloud scale, and AI strategy.",
    images: ["/creativ-codes-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/CreativIcon.svg",
    shortcut: "/CreativIcon.svg",
    apple: "/creativ-codes-logo-cropped.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#9500f2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
