import type { Metadata, Viewport } from "next";
import { getInitialLang } from "./lang";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Agentryx AI",
    template: "%s | Agentryx AI"
  },
  description:
    "Agentryx AI is an operator-led studio building Agentryx, Itineva, ModuBoza, and ReTalk.",
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
