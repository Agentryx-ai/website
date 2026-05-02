import type { Metadata } from "next";
import { getInitialLang } from "../lang";
import { SitePage } from "../site";

const description =
  "Agentryx AI is a small operator-led studio in Seoul, built around agents, narrow surfaces, and verified product work.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about"
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
