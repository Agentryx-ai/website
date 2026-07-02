import type { Metadata } from "next";
import { SitePage } from "../site";

const description =
  "에이전트릭스 에이아이(Agentryx AI)는 서울의 1인 운영 스튜디오입니다. Agentryx, Itineva, ModuBoza, 리톡을 만들고 있고, 이 중 Itineva와 리톡은 지금 바로 써볼 수 있습니다. 거의 모든 워크플로를 에이전트가 실행합니다.";

export const metadata: Metadata = {
  title: {
    absolute: "에이전트릭스 에이아이 (Agentryx AI)"
  },
  description,
  alternates: {
    canonical: "/ko",
    languages: {
      en: "/",
      ko: "/ko",
      "x-default": "/"
    }
  },
  openGraph: {
    title: "에이전트릭스 에이아이 (Agentryx AI)",
    description,
    url: "/ko",
    siteName: "Agentryx AI",
    type: "website",
    locale: "ko_KR"
  },
  twitter: {
    card: "summary_large_image",
    title: "에이전트릭스 에이아이 (Agentryx AI)",
    description
  }
};

export default function KoHomePage() {
  return <SitePage page="home" initialLang="ko" locked langLinks={{ en: "/", ko: "/ko" }} />;
}
