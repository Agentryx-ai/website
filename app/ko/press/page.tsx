import type { Metadata } from "next";
import { SitePage } from "../../site";

const description =
  "에이전트릭스 에이아이(Agentryx AI) 프레스·연락 정보. 에이전트로 AI 제품을 만드는 운영자 주도 스튜디오입니다.";

export const metadata: Metadata = {
  title: {
    absolute: "프레스 | 에이전트릭스 에이아이"
  },
  description,
  alternates: {
    canonical: "/ko/press",
    languages: {
      en: "/press",
      ko: "/ko/press",
      "x-default": "/press"
    }
  },
  openGraph: {
    title: "프레스 | 에이전트릭스 에이아이",
    description,
    url: "/ko/press",
    locale: "ko_KR"
  },
  twitter: {
    title: "프레스 | 에이전트릭스 에이아이",
    description
  }
};

export default function KoPressPage() {
  return <SitePage page="press" initialLang="ko" locked langLinks={{ en: "/press", ko: "/ko/press" }} />;
}
