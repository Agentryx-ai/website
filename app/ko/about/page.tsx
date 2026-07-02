import type { Metadata } from "next";
import { SitePage } from "../../site";

const description =
  "에이전트릭스 에이아이(Agentryx AI)는 서울의 운영자 주도 스튜디오입니다. 에이전트, 좁은 작업 범위, 검증된 제품 작업을 중심으로 운영합니다.";

export const metadata: Metadata = {
  title: {
    absolute: "회사 | 에이전트릭스 에이아이"
  },
  description,
  alternates: {
    canonical: "/ko/about",
    languages: {
      en: "/about",
      ko: "/ko/about",
      "x-default": "/about"
    }
  },
  openGraph: {
    title: "회사 | 에이전트릭스 에이아이",
    description,
    url: "/ko/about",
    locale: "ko_KR"
  },
  twitter: {
    title: "회사 | 에이전트릭스 에이아이",
    description
  }
};

export default function KoAboutPage() {
  return <SitePage page="about" initialLang="ko" locked langLinks={{ en: "/about", ko: "/ko/about" }} />;
}
