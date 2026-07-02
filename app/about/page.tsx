import type { Metadata } from "next";
import { getInitialLang } from "../lang";
import { SitePage } from "../site";

const description =
  "Agentryx AI is an operator-led AI studio, built around agents, narrow surfaces, and careful review.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
    languages: {
      en: "/about",
      ko: "/ko/about",
      "x-default": "/about"
    }
  },
  openGraph: {
    title: "About | Agentryx AI",
    description,
    url: "/about"
  },
  twitter: {
    title: "About | Agentryx AI",
    description
  }
};

export default async function AboutPage() {
  return <SitePage page="about" initialLang={await getInitialLang()} />;
}
