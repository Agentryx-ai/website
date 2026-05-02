import type { Metadata } from "next";
import { getInitialLang } from "../lang";
import { SitePage } from "../site";

const description =
  "Press and contact information for Agentryx AI, an operator-led studio building AI products from Seoul.";

export const metadata: Metadata = {
  title: "Press",
  description,
  alternates: {
    canonical: "/press"
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
