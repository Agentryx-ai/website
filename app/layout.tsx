import type { Metadata, Viewport } from "next";
import { Analytics } from "./analytics";
import { getInitialLang } from "./lang";
import "./globals.css";

const siteUrl = "https://agentryx-ai.com";
const siteDescription =
  "Agentryx AI is an operator-led studio building Agentryx, Itineva, ModuBoza, and ReTalk.";
const ogImage = "/og-image.svg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Agentryx AI",
    template: "%s | Agentryx AI"
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getInitialLang();

  return (
    <html lang={lang} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
