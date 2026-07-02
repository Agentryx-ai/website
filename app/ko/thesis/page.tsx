import type { Metadata } from "next";
import { SitePage } from "../../site";

const description =
  "에이전트릭스 에이아이(Agentryx AI)의 운영 원칙: 운영자 주도, 에이전트 우선 실행, 속도보다 먼저인 검증, 작고 진짜인 범위.";

export const metadata: Metadata = {
  title: {
    absolute: "운영 원칙 | 에이전트릭스 에이아이"
  },
  description,
  alternates: {
    canonical: "/ko/thesis",
    languages: {
      en: "/thesis",
      ko: "/ko/thesis",
      "x-default": "/thesis"
    }
  },
  openGraph: {
    title: "운영 원칙 | 에이전트릭스 에이아이",
    description,
    url: "/ko/thesis",
    locale: "ko_KR"
  },
  twitter: {
    title: "운영 원칙 | 에이전트릭스 에이아이",
    description
  }
};

export default function KoThesisPage() {
  return <SitePage page="thesis" initialLang="ko" locked langLinks={{ en: "/thesis", ko: "/ko/thesis" }} />;
}
