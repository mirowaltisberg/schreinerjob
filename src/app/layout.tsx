import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { HapticProvider } from "@/components/haptic-provider";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://schreinerjob.ch";
const ANALYTICS_ENABLED = process.env.ANALYTICS_ENABLED === "true";
const GA_ID = ANALYTICS_ENABLED ? process.env.NEXT_PUBLIC_GA_ID : undefined;
const FB_PIXEL_ID = ANALYTICS_ENABLED ? process.env.NEXT_PUBLIC_FB_PIXEL_ID : undefined;

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
      <head>
        {FB_PIXEL_ID && <link rel="dns-prefetch" href="https://connect.facebook.net" />}
      </head>
      <body lang="de-CH" className="antialiased font-sans">
        <a className="skip-link" href="#main-content">
          Zum Inhalt
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <HapticProvider>{children}</HapticProvider>
        {ANALYTICS_ENABLED && <Analytics />}
        {ANALYTICS_ENABLED && <SpeedInsights />}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="gtag-init" strategy="lazyOnload">
              {`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${GA_ID}');
          `}
            </Script>
          </>
        )}
        {FB_PIXEL_ID && (
          <Script id="fb-pixel" strategy="lazyOnload">
            {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
          </Script>
        )}
        {FB_PIXEL_ID && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
      </body>
    </html>
  );
}
