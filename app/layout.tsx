import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Analytics } from "./analytics";
import { getInitialLang } from "./lang";
import "./globals.css";

const siteUrl = "https://agentryx-ai.com";
const siteDescription =
  "Agentryx AI is an operator-led AI studio building products — Agentryx, Itineva, ModuBoza, and ReTalk — by running almost every workflow on agents.";
const ogImage = "/og-image.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Agentryx AI",
    template: "%s | Agentryx AI"
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ko: "/ko",
      "x-default": "/"
    }
  },
  verification: {
    other: {
      "naver-site-verification": "c72c35fd79684c48a8164fbb0f444f55a011f2e1"
    }
  },
  openGraph: {
    title: "Agentryx AI",
    description: siteDescription,
    url: "/",
    siteName: "Agentryx AI",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Agentryx AI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentryx AI",
    description: siteDescription,
    images: [ogImage]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Agentryx AI",
  alternateName: ["에이전트릭스 에이아이", "에이전트릭스"],
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const lang = pathname === "/ko" || pathname.startsWith("/ko/") ? "ko" : await getInitialLang();

  return (
    <html lang={lang} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
