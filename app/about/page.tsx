import { getInitialLang } from "../lang";
import { SitePage } from "../site";

export const metadata = {
  title: "About"
};

export default async function AboutPage() {
  return <SitePage page="about" initialLang={await getInitialLang()} />;
}
