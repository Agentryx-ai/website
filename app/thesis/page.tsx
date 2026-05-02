import { getInitialLang } from "../lang";
import { SitePage } from "../site";

export const metadata = {
  title: "Operating Thesis"
};

export default async function ThesisPage() {
  return <SitePage page="thesis" initialLang={await getInitialLang()} />;
}
