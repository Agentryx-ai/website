import { getInitialLang } from "../lang";
import { SitePage } from "../site";

export const metadata = {
  title: "Press"
};

export default async function PressPage() {
  return <SitePage page="press" initialLang={await getInitialLang()} />;
}
