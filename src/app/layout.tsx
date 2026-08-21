import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/json-ld";
import { HapticProvider } from "@/components/haptic-provider";
import { PrivacyAnalytics } from "@/components/privacy-analytics";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://schreinerjob.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Schreiner Jobs Schweiz | Stellen für Schreiner-Fachkräfte",
    template: "%s | schreinerjob.ch",
  },
  description:
    "Finde Stellen für Schreiner, Möbel- und Bankschreinerei, Montage, CNC, AVOR und Projektleitung Schreinerei in der Schweiz.",
  keywords: [
    "Schreinerjobs",
    "Schreinerjobs Schweiz",
    "Schreiner Jobs",
    "Projektleiter Schreinerei",
    "Montageschreiner",
    "AVOR Schreinerei Jobs",
    "CNC Schreinerei Jobs",
    "Stellen Schreinerbranche Schweiz",
    "Schreiner Job Schweiz",
    "Schreiner Stellen Schweiz",
    "Schreiner Stellenangebote",
    "Montageschreiner Jobs Schweiz",
    "Schreiner Temporär",
    "Schreiner Festanstellung",
    "Schreiner Lohn Schweiz",
  ],
  openGraph: {
    title: "Schreiner Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Schreiner EFZ, Montage, Möbelbau, CNC, AVOR und Projektleitung Schreinerei.",
    type: "website",
    url: "/",
    siteName: "schreinerjob.ch",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schreiner Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Schreiner EFZ, Montage, Möbelbau, CNC, AVOR und Projektleitung Schreinerei.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      "x-default": "/",
    },
  },
  verification: {
    google: "el7V2RsquLlGsWyjTfpIu0taGlVTafpyDuinuMxx_Tc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "schreinerjob.ch",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    "schreinerjob.ch bündelt Stellenangebote mit klarem Bezug zum Schreinergewerk in der Schweiz.",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
    alternateName: "Schweiz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "German",
    url: `${SITE_URL}/kontakt`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "schreinerjob.ch",
  url: SITE_URL,
  description:
    "Die spezialisierte Jobbörse für Schreiner-Fachkräfte in der Schweiz.",
  inLanguage: "de-CH",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body lang="de-CH" className="antialiased font-sans">
        <a className="skip-link" href="#main-content">
          Zum Inhalt
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <HapticProvider>{children}</HapticProvider>
        <PrivacyAnalytics />
      </body>
    </html>
  );
}
