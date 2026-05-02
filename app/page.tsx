import { getInitialLang } from "./lang";
import { SitePage } from "./site";

export default async function HomePage() {
  return <SitePage page="home" initialLang={await getInitialLang()} />;
}
