import type { Metadata } from "next";
import { SitePage } from "../site";

const description =
  "에이전트릭스 에이아이(Agentryx AI)는 운영자 주도의 AI 스튜디오입니다. Agentryx, Itineva, ModuBoza, 리톡 네 제품을 만들고, 거의 모든 워크플로를 에이전트가 실행합니다.";

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
