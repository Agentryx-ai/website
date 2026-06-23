import type { Metadata } from "next";
import { getInitialLang } from "../lang";
import { SitePage } from "../site";

const description =
  "The operating thesis behind Agentryx AI: operator-led work, agent-first execution, verification before velocity, and small real surfaces.";

export const metadata: Metadata = {
  title: "Operating Thesis",
  description,
  alternates: {
    canonical: "/thesis"
  },
  openGraph: {
    title: "Operating Thesis | Agentryx AI",
    description,
    url: "/thesis"
  },
  twitter: {
    title: "Operating Thesis | Agentryx AI",
    description
  }
};

export default async function ThesisPage() {
  return <SitePage page="thesis" initialLang={await getInitialLang()} />;
}
