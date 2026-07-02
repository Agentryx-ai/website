import type { Metadata } from "next";
import { getInitialLang } from "../lang";
import { SitePage } from "../site";

const description =
  "Press and contact for Agentryx AI, an operator-led AI studio building products with agents.";

export const metadata: Metadata = {
  title: "Press",
  description,
  alternates: {
    canonical: "/press",
    languages: {
      en: "/press",
      ko: "/ko/press",
      "x-default": "/press"
    }
  },
  openGraph: {
    title: "Press | Agentryx AI",
    description,
    url: "/press"
  },
  twitter: {
    title: "Press | Agentryx AI",
    description
  }
};

export default async function PressPage() {
  return <SitePage page="press" initialLang={await getInitialLang()} />;
}
