export type Lang = "en" | "ko";
export type Localized = string | { en: string; ko: string };

export function text(value: Localized, lang: Lang) {
  return typeof value === "string" ? value : value[lang] || value.en;
}

export const PRODUCT_ORDER = ["agentryx", "itineva", "moduboza", "retalk"];

export const i18n = {
  en: {
    navProducts: "Products",
    navThesis: "Thesis",
    navAbout: "About",
    navPress: "Press",
    navContact: "Contact",
    seeProducts: "See products",
    readThesis: "Read the operating thesis",
    contact: "Get in touch",
    visitSite: "Visit site",
    open: "Open",
    footerTagline: "Built in Seoul · Operating worldwide",
    footerRights: "Agentryx AI. A small operator-led studio.",
    statusCore: "Core product",
    statusCandidate: "Core candidate",
    statusPoc: "Internal PoC",
    statusDirection: "Direction",
    homeLabel: "Operator-led · Agent-first · Seoul, 2026",
    homeH1A: "We automate almost every workflow",
    homeH1B: "with AI",
    homeH1C: "to build and run AI products.",
    homeLede:
      "Agentryx AI is a small operator-led studio. Almost every workflow — building, reviewing, shipping, operating — runs on AI agents, and we lean on AI to design those workflows too. Agentryx is the environment we built to run the studio this way.",
    productsNum: "01 — Products",
    productsHeading: "Four bets, one operating system.",
    productsMeta:
      "Each product is a thesis strong enough to ship. Agentryx is the development environment we run the studio on; the other three are products built with that operating discipline.",
    thesisNum: "02 — Operating thesis",
    thesisHeading: "How a small studio runs many products.",
    thesisMeta: "Four operating principles that shape every product, every PR, every standup.",
    notesNum: "03 — Why now",
    notesHeading: "Three observations we are building against.",
    ctaEyebrow: "Working with us",
    ctaHeading: "We take on a small number of partners each quarter.",
    ctaBody:
      "If you operate a real business and want a studio that ships against your KPIs, not a deck, we should talk.",
    aboutLabel: "About · The studio",
    aboutH1A: "A small studio,",
    aboutH1B: "running like an AI company should.",
    aboutLede:
      "Agentryx AI is an operator-led studio in Seoul. One person sets priorities; agents execute against narrow, well-specified surfaces. We design the studio with the same discipline we ask of the products inside it.",
    thesisLabel: "Operating thesis",
    thesisH1A: "Four principles.",
    thesisH1B: "Every product, every PR, every standup.",
    thesisLede:
      "These are the rules we run the studio by. They are public so partners and customers can hold us to them.",
    pressLabel: "Press · Contact",
    pressH1: "Press, contact, and the things we will and won't say.",
    pressLede:
      "Agentryx AI is small and operator-led. We do not have a press team. The operator answers directly.",
    next: "Next",
    whereNext: "Where to go from here."
  },
  ko: {
    navProducts: "제품",
    navThesis: "운영 원칙",
    navAbout: "회사",
    navPress: "프레스",
    navContact: "연락",
    seeProducts: "제품 보기",
    readThesis: "운영 원칙 읽기",
    contact: "문의하기",
    visitSite: "사이트 방문",
    open: "열기",
    footerTagline: "서울에서 만들고, 어디서나 운영합니다",
    footerRights: "Agentryx AI. 운영자가 직접 운영하는 작은 스튜디오.",
    statusCore: "코어 제품",
    statusCandidate: "코어 후보",
    statusPoc: "내부 PoC",
    statusDirection: "방향성",
    homeLabel: "운영자 주도 · 에이전트 우선 · 서울, 2026",
    homeH1A: "거의 모든 워크플로를",
    homeH1B: "AI로 자동화해",
    homeH1C: "AI 제품을 만들고 운영합니다.",
    homeLede:
      "Agentryx AI는 운영자가 이끄는 작은 스튜디오입니다. 만들고, 리뷰하고, 출시하고, 운영하는 거의 모든 워크플로를 AI 에이전트로 돌리며, 그 워크플로를 설계하는 일에도 AI를 적극 활용합니다. Agentryx는 스튜디오를 이렇게 운영하려고 우리가 만든 환경입니다.",
    productsNum: "01 — 제품",
    productsHeading: "네 개의 베팅, 하나의 운영 체계.",
    productsMeta:
      "각 제품은 우리가 출시할 만큼 강하게 믿는 가설입니다. Agentryx는 스튜디오를 굴리는 개발 환경이고, 나머지 세 제품은 그 운영 규율로 만든 결과물입니다.",
    thesisNum: "02 — 운영 원칙",
    thesisHeading: "작은 스튜디오가 여러 제품을 운영하는 방식.",
    thesisMeta: "모든 제품, 모든 PR, 모든 스탠드업을 관통하는 네 가지 원칙입니다.",
    notesNum: "03 — 왜 지금인가",
    notesHeading: "우리가 베팅하는 세 가지 관찰.",
    ctaEyebrow: "함께하기",
    ctaHeading: "분기마다 소수의 파트너만 받습니다.",
    ctaBody: "데크가 아니라 KPI에 대고 출시할 스튜디오가 필요하다면 이야기 나눠 봅시다.",
    aboutLabel: "회사 · 스튜디오",
    aboutH1A: "작은 스튜디오,",
    aboutH1B: "AI 회사답게 운영합니다.",
    aboutLede:
      "Agentryx AI는 서울에 있는 운영자 주도 스튜디오입니다. 한 사람이 우선순위를 정하고, 에이전트는 잘 정의된 좁은 표면에서 일을 처리합니다. 제품에게 요구하는 그대로의 원칙으로 스튜디오를 설계합니다.",
    thesisLabel: "운영 원칙",
    thesisH1A: "네 가지 원칙.",
    thesisH1B: "모든 제품, 모든 PR, 모든 스탠드업.",
    thesisLede:
      "스튜디오를 굴리는 규칙입니다. 파트너와 고객이 우리에게 책임을 물을 수 있도록 공개합니다.",
    pressLabel: "프레스 · 연락",
    pressH1: "프레스, 연락, 우리가 답할 것과 답하지 않을 것.",
    pressLede:
      "Agentryx AI는 작고 운영자가 직접 운영합니다. 프레스 팀이 따로 없으며 운영자가 직접 답합니다.",
    next: "다음",
    whereNext: "여기서 어디로."
  }
};

export const products = [
  {
    id: "agentryx",
    num: "01",
    accent: "brick",
    status: "core",
    name: { en: "Agentryx", ko: "Agentryx" },
    deck: {
      en: "An agent-company platform: a single Team Channel, a Lead that routes work, and two-layer verification before anything ships.",
      ko: "에이전트-컴퍼니 플랫폼. 단일 팀 채널, 라우팅을 맡는 Lead, 출시 전 두 단계 검증."
    }
  },
  {
    id: "itineva",
    num: "02",
    accent: "teal",
    status: "candidate",
    name: { en: "Itineva", ko: "Itineva" },
    deck: {
      en: "A travel planner that turns destination, dates, travelers, and taste into a shareable trip page with versions, gallery, and route checks.",
      ko: "여행지·일정·동행·취향을 입력하면 버전 관리, 갤러리, 동선 점검까지 갖춘 여행 페이지가 만들어지는 기획기."
    },
    siteUrl: "https://itineva.com/"
  },
  {
    id: "moduboza",
    num: "03",
    accent: "violet",
    status: "poc",
    name: { en: "ModuBoza", ko: "모두보자" },
    deck: {
      en: "A private operations PoC for shared OTT subscriptions: pooled providers, isolated credentials, one-person sessions.",
      ko: "공유 OTT 구독을 위한 사내 운영 PoC. 풀링된 공급자, 격리된 자격 증명, 1인 세션."
    },
    siteUrl: "https://moduboza.com/"
  },
  {
    id: "retalk",
    num: "04",
    accent: "moss",
    status: "candidate",
    name: { en: "ReTalk", ko: "리톡" },
    deck: {
      en: "A local-first desktop app that restores the KakaoTalk conversations already on your PC — read, search, and export — and backs up expiring photos for free. Now in beta.",
      ko: "PC에 이미 남아 있는 카카오톡 대화를 복원해 열람·검색·내보내고, 사라질 사진은 무료로 자동 보관하는 로컬 우선 데스크탑 앱. 베타 운영 중."
    },
    siteUrl: "https://retalk.agentryx-ai.com/"
  }
];

export const principles = [
  {
    key: { en: "I — Operator-led", ko: "I — 운영자 주도" },
    h: { en: "An operator should run the company.", ko: "회사는 운영자가 운영해야 합니다." },
    p: {
      en: "One operator owns priorities; agents execute against a small, well-specified surface.",
      ko: "운영자가 우선순위를 쥐고, 에이전트는 잘 정의된 표면에서 일을 처리합니다."
    },
    long: {
      en: "We do not believe in committees of agents arguing through a chat log until something ships. One operator owns the roadmap, the design, and the merge button; agents execute against a small surface where work can be verified before it is trusted.",
      ko: "에이전트들이 채팅 로그에서 합의에 이를 때까지 다투는 방식은 신뢰하지 않습니다. 운영자가 로드맵·디자인·머지 버튼을 쥐고, 에이전트는 검증 가능한 좁은 표면에서 일을 처리합니다."
    }
  },
  {
    key: { en: "II — Agent-first", ko: "II — 에이전트 우선" },
    h: { en: "AI agents are our default coworkers.", ko: "AI 에이전트가 기본 동료입니다." },
    p: {
      en: "We design specs, repos, reviews, and daily operations around AI agents as the highest-leverage tool in the studio.",
      ko: "스펙, 레포, 리뷰, 일일 운영을 AI 에이전트가 가장 높은 레버리지로 작동하도록 설계합니다."
    },
    long: {
      en: "AI agents are the highest-leverage tool we have, and we treat them that way. Specs are written so an agent can act on them; repos are structured so agents can navigate them; reviews are scheduled so agent work is never the long pole.",
      ko: "AI 에이전트는 우리가 가진 가장 레버리지 높은 도구이고, 그렇게 다룹니다. 스펙은 에이전트가 바로 작업할 수 있도록 쓰고, 레포는 에이전트가 탐색하기 좋게 구조화하며, 리뷰는 에이전트 작업이 병목이 되지 않게 운영합니다."
    }
  },
  {
    key: { en: "III — Verification before velocity", ko: "III — 속도 전에 검증" },
    h: { en: "Two layers of review, every time.", ko: "두 단계 리뷰, 매번." },
    p: {
      en: "Every change goes through static checks and a senior judgment layer before it merges.",
      ko: "모든 변경은 정적 검증과 시니어 판단 레이어를 모두 통과한 뒤 머지됩니다."
    },
    long: {
      en: "Every change goes through two layers: a static layer such as lint, types, tests, and screenshot regressions; and a senior layer that reviews copy, taste, edge cases, and what the user will actually feel.",
      ko: "모든 변경은 린트·타입·테스트·스크린샷 회귀 같은 정적 레이어와, 카피·취향·엣지 케이스·사용자 감각을 살피는 시니어 레이어를 통과합니다."
    }
  },
  {
    key: { en: "IV — Small, real surfaces", ko: "IV — 작고 실제적인 표면" },
    h: { en: "Ship the smallest verifiable thing.", ko: "검증 가능한 가장 작은 단위로 출시합니다." },
    p: {
      en: "We prefer narrow products that work end-to-end over broad products that mostly work.",
      ko: "넓고 어설픈 제품보다 좁고 끝까지 동작하는 제품을 만듭니다."
    },
    long: {
      en: "Each product fits on a single screen of pitch and does one thing fully. When we are tempted to expand a surface, we ask whether the new surface will be as verifiable as the old one. If not, we do not ship it.",
      ko: "각 제품은 한 화면 분량의 피치에 들어맞고 한 가지 일을 끝까지 합니다. 표면을 늘리고 싶을 때마다 새 표면이 기존만큼 검증 가능한지 묻고, 아니라면 출시하지 않습니다."
    }
  }
];

export const notes = [
  {
    k: { en: "Observation 01", ko: "관찰 01" },
    h: {
      en: "Most AI companies sell tools. We build the tool we use.",
      ko: "대부분의 AI 회사는 도구를 팝니다. 우리는 우리가 쓰는 도구를 만듭니다."
    },
    p: {
      en: "The interesting question is whether a small operator inside a purpose-built development environment can run an entire company.",
      ko: "흥미로운 질문은 작은 운영자가 목적성 있게 만들어진 개발 환경 안에서 회사 하나를 굴릴 수 있느냐입니다."
    }
  },
  {
    k: { en: "Observation 02", ko: "관찰 02" },
    h: { en: "Verification is the moat, not the model.", ko: "해자는 모델이 아니라 검증입니다." },
    p: {
      en: "Models commodify quickly. Review, evals, regression checks, and operations are where durable advantage lives.",
      ko: "모델은 빠르게 일반재가 됩니다. 리뷰·평가·회귀 테스트·운영 규율이 지속 가능한 우위입니다."
    }
  },
  {
    k: { en: "Observation 03", ko: "관찰 03" },
    h: {
      en: "The first AI-operator-run companies will eat the rest.",
      ko: "AI 오퍼레이터가 운영하는 회사가 다음 세대를 먹어 치웁니다."
    },
    p: {
      en: "A studio that builds and uses its own development environment outpaces studios that stitch together generic tools.",
      ko: "자체 개발 환경을 만들고 직접 쓰는 스튜디오는 일반 도구를 짜깁기하는 스튜디오를 앞섭니다."
    }
  }
];

export const aboutStories = [
  {
    h: { en: "One operator, many agents.", ko: "한 명의 운영자, 여러 에이전트." },
    p: {
      en: "Headcount stays small on purpose. Agents take implementation work; the operator owns priorities, design, and the merge button.",
      ko: "인원은 의도적으로 작게 유지합니다. 에이전트가 구현을 맡고, 운영자는 우선순위·디자인·머지 버튼을 쥡니다."
    }
  },
  {
    h: { en: "Korean-first, English-fluent.", ko: "한국어 우선, 영어 능통." },
    p: {
      en: "Two products are built for Korean users and platforms. Specs, support, and design copy are written in both languages from day one.",
      ko: "두 제품은 한국 사용자와 한국 플랫폼을 위해 만들어집니다. 스펙·지원·디자인 카피를 처음부터 두 언어로 씁니다."
    }
  },
  {
    h: { en: "Partnerships before customers.", ko: "고객보다 파트너 먼저." },
    p: {
      en: "Each quarter we take on a small number of design and platform partners who want to ship serious AI products.",
      ko: "분기마다 진지한 AI 제품을 출시하려는 소수의 디자인·플랫폼 파트너만 받습니다."
    }
  }
];

export const pressRows = [
  {
    k: { en: "We'll talk about", ko: "이야기할 것" },
    v: {
      en: "How a single operator runs four products with agents, the operating thesis, verification systems, and what has not worked.",
      ko: "한 사람이 에이전트와 함께 네 제품을 운영하는 방식, 운영 원칙, 검증 시스템, 그리고 잘 안 된 것."
    }
  },
  {
    k: { en: "We won't talk about", ko: "이야기하지 않을 것" },
    v: {
      en: "Speculative model capabilities, unreleased product details, or customer KPIs without consent.",
      ko: "추정성 모델 능력, 미공개 제품 세부 사항, 고객 동의 없는 개별 KPI."
    }
  },
  {
    k: { en: "Translation", ko: "번역" },
    v: {
      en: "Press materials are available in English and Korean. Korean-language interviews are welcome.",
      ko: "프레스 자료는 한국어와 영어로 제공합니다. 한국어 인터뷰 환영합니다."
    }
  }
];

export const productDetails: Record<string, {
  accent: string;
  status: string;
  num: string;
  name: { en: string; ko: string };
  tagline: { en: string; ko: string };
  lede: { en: string; ko: string };
  siteUrl?: string;
  metrics: { k: Localized; v: Localized }[];
  sections: { k: Localized; h: Localized; body: Localized }[];
  proofs: { k: Localized; h: Localized; body: Localized }[];
  quote: Localized;
}> = {
  agentryx: {
    accent: "brick",
    status: "core",
    num: "01",
    name: { en: "Agentryx", ko: "Agentryx" },
    tagline: {
      en: "Run an AI company from a single Team Channel.",
      ko: "단 하나의 팀 채널에서 AI 회사를 운영합니다."
    },
    lede: {
      en: "Agentryx is the platform we built so a single operator can run an Agent Company: one Team Channel, an auxiliary router, a Lead that decomposes work, and a Codex runner that builds in per-agent workspaces.",
      ko: "Agentryx는 한 명의 운영자가 Agent Company를 운영할 수 있도록 만든 플랫폼입니다. 단일 팀 채널, 보조 라우터, 일을 분해하는 Lead, 에이전트별 워크스페이스에서 동작하는 Codex 러너를 갖습니다."
    },
    metrics: [
      { k: { en: "Surface", ko: "표면" }, v: { en: "1 Team Channel", ko: "단일 팀 채널" } },
      { k: { en: "Runner", ko: "러너" }, v: "Codex CLI app-server" },
      { k: { en: "Verification", ko: "검증" }, v: { en: "2-layer", ko: "2단계" } },
      { k: { en: "Stage", ko: "단계" }, v: { en: "Core · MVP slice", ko: "코어 · MVP 슬라이스" } }
    ],
    sections: [
      {
        k: { en: "01 — One channel, many agents", ko: "01 — 하나의 채널, 여러 에이전트" },
        h: { en: "The whole company lives in one feed.", ko: "회사 전체가 하나의 피드에서 살아갑니다." },
        body: {
          en: "Every message lands in the same Team Channel. An auxiliary router extracts mentions and routes each message: idle agents are woken up, active agents receive their inbox at the next cycle boundary.",
          ko: "모든 메시지는 같은 팀 채널에 도착합니다. 보조 라우터가 멘션을 추출하고 메시지를 라우팅합니다. idle 에이전트는 깨우고, 동작 중인 에이전트는 다음 cycle 경계에서 인박스를 받습니다."
        }
      },
      {
        k: { en: "02 — Lead decomposes, Teammates execute", ko: "02 — Lead가 분해하고 Teammate가 실행합니다" },
        h: { en: "One Lead owns task assignment.", ko: "Task 할당은 Lead가 책임집니다." },
        body: {
          en: "Lead reads the operator's intent, breaks it into a DAG of subtasks with acceptance criteria, and dispatches it. Teammates can answer in the channel, but they do not reassign work to each other.",
          ko: "Lead는 운영자의 의도를 읽어 받아들임 기준이 있는 subtask DAG로 나누고 전달합니다. Teammate는 채널에서 답할 수 있지만 서로에게 작업을 재할당하지 않습니다."
        }
      },
      {
        k: { en: "03 — Two-layer verification", ko: "03 — 두 단계 검증" },
        h: { en: "Deterministic checks first. Judgment second.", ko: "먼저 결정론적 검증, 그 다음 판단." },
        body: {
          en: "Every change goes through deterministic scripts and a semantic review layer before it reaches human approval. Rejected work returns to the agent with the failing trace.",
          ko: "모든 변경은 사람의 승인 전에 결정론적 스크립트와 의미 기반 리뷰 레이어를 통과합니다. 반려된 작업은 실패 트레이스와 함께 에이전트에게 돌아갑니다."
        }
      }
    ],
    proofs: [
      {
        k: { en: "Routing evidence", ko: "라우팅 근거" },
        h: { en: "Team Channel is the primary product surface.", ko: "Team Channel이 주 제품 표면입니다." },
        body: {
          en: "The current Agentryx research points to accepted Team Channel ADRs, @mention extraction, an auxiliary LLM router, target-only mailbox delivery, and Lead fallback when explicit mentions fail.",
          ko: "현재 Agentryx 리서치는 Team Channel ADR, @mention 추출, 보조 LLM 라우터, 대상별 mailbox 전달, 명시적 멘션 실패 시 Lead fallback을 근거로 합니다."
        }
      },
      {
        k: { en: "Execution evidence", ko: "실행 근거" },
        h: { en: "The runner is built around Codex workspaces.", ko: "러너는 Codex 워크스페이스 중심입니다." },
        body: {
          en: "The platform separates a Control Plane for company state, tasks, approvals, messages, artifacts, and memory from a Runner that uses Codex CLI app-server in per-agent workspaces.",
          ko: "플랫폼은 회사 상태, 태스크, 승인, 메시지, 아티팩트, 메모리를 담는 Control Plane과 에이전트별 워크스페이스에서 Codex CLI app-server를 쓰는 Runner를 분리합니다."
        }
      },
      {
        k: { en: "Verification evidence", ko: "검증 근거" },
        h: { en: "Verification is explicit, not implied.", ko: "검증은 암묵적이 아니라 명시적입니다." },
        body: {
          en: "Product docs describe deterministic scripts as Layer 1 and semantic review as Layer 2 before human approval, with rejected work returned to the agent with a failing trace.",
          ko: "제품 문서는 사람 승인 전에 Layer 1 결정론적 스크립트와 Layer 2 의미 리뷰를 거치고, 반려된 작업은 실패 트레이스와 함께 에이전트에게 돌아간다고 설명합니다."
        }
      }
    ],
    quote: {
      en: "An AI company should be a small operator and a lot of leverage.",
      ko: "AI 회사는 작은 운영자와 큰 레버리지여야 합니다."
    }
  },
  itineva: {
    accent: "teal",
    status: "candidate",
    num: "02",
    name: { en: "Itineva", ko: "Itineva" },
    siteUrl: "https://itineva.com/",
    tagline: {
      en: "Travel plans built like websites: versioned, shared, alive.",
      ko: "웹사이트처럼 만드는 여행 계획: 버전 관리, 공유, 살아 있는."
    },
    lede: {
      en: "Itineva turns destination, dates, travelers, and taste into a shareable trip page. A staged generator drafts a skeleton, fills day-by-day events, enriches places, and checks routes before publish.",
      ko: "Itineva는 여행지, 일정, 동행, 취향을 공유 가능한 여행 페이지로 바꿉니다. 단계별 생성기가 골격을 만들고 일자별 이벤트를 채우며 장소를 보강하고 동선을 점검합니다."
    },
    metrics: [
      { k: { en: "Inputs", ko: "입력" }, v: { en: "Destination · dates · travelers · taste", ko: "여행지·일정·동행·취향" } },
      { k: { en: "Output", ko: "출력" }, v: { en: "Versioned trip page", ko: "버전 관리 여행 페이지" } },
      { k: { en: "Generation", ko: "생성" }, v: { en: "Streamed · 4-stage", ko: "스트리밍 · 4단계" } },
      { k: { en: "Stage", ko: "단계" }, v: { en: "Core candidate", ko: "코어 후보" } }
    ],
    sections: [
      {
        k: { en: "01 — Why a website beats a PDF", ko: "01 — 왜 PDF보다 웹사이트인가" },
        h: { en: "Plans change. Pages change with them.", ko: "계획은 바뀝니다. 페이지도 함께 바뀝니다." },
        body: {
          en: "A trip page with versioning keeps every traveler on the same plan. Each version has a stable share link, and the featured version is what the group sees by default.",
          ko: "버전이 관리되는 여행 페이지는 동행 모두가 같은 계획을 보게 합니다. 각 버전은 안정된 공유 링크를 갖고, featured 버전이 기본으로 노출됩니다."
        }
      },
      {
        k: { en: "02 — A four-stage generator", ko: "02 — 4단계 생성기" },
        h: { en: "Skeleton, day-events, enrichment, autofix.", ko: "골격, 일자 이벤트, 보강, autofix." },
        body: {
          en: "The generator streams a skeleton, creates day plans in parallel, enriches places with real-world data, and runs an autofix pass before publish.",
          ko: "생성기는 골격을 스트리밍하고, 일자별 계획을 병렬로 만들고, 실제 장소 데이터로 보강한 뒤 게시 전 autofix를 실행합니다."
        }
      },
      {
        k: { en: "03 — Route checks against reality", ko: "03 — 현실에 맞춘 동선 점검" },
        h: { en: "We refuse to suggest impossible days.", ko: "불가능한 일정은 제안하지 않습니다." },
        body: {
          en: "Day plans are checked against transit time, opening hours, and pace. If a day is too tight, the page flags it before publish.",
          ko: "일정은 이동 시간, 운영 시간, 적정 페이스와 비교됩니다. 너무 빡빡한 날은 게시 전에 표시합니다."
        }
      }
    ],
    proofs: [
      {
        k: { en: "Generator evidence", ko: "생성 근거" },
        h: { en: "Generation is staged, not one-shot.", ko: "생성은 단발 호출이 아니라 단계형입니다." },
        body: {
          en: "Repo research identifies Stage A skeleton streaming, Stage B parallel day-event generation, Stage C Google Places enrichment, and Stage D autofix/watchdog before publish.",
          ko: "레포 리서치는 게시 전 Stage A 골격 스트리밍, Stage B 일자별 이벤트 병렬 생성, Stage C Google Places 보강, Stage D autofix/watchdog를 확인합니다."
        }
      },
      {
        k: { en: "Share evidence", ko: "공유 근거" },
        h: { en: "The shared artifact is versioned.", ko: "공유 결과물은 버전으로 관리됩니다." },
        body: {
          en: "The implementation uses Project, Run, and Version models, a featured_version_id, publish/feature/share/import flows, public gallery behavior, and shared itinerary attribution.",
          ko: "구현은 Project, Run, Version 모델과 featured_version_id, publish/feature/share/import 흐름, public gallery 동작, 공유 일정 attribution을 사용합니다."
        }
      },
      {
        k: { en: "Reality evidence", ko: "현실 검증 근거" },
        h: { en: "Routes and places are part of the product surface.", ko: "장소와 동선이 제품 표면에 포함됩니다." },
        body: {
          en: "The product facts identify Google Places-based place enrichment and Google Routes-based route validation, with public copy limited to checks that the repo actually supports.",
          ko: "제품 근거는 Google Places 기반 장소 보강과 Google Routes 기반 동선 검증을 확인하며, 공개 카피는 레포가 실제로 뒷받침하는 점검 범위로 제한합니다."
        }
      }
    ],
    quote: {
      en: "A trip plan should be a living artifact, not a stale attachment.",
      ko: "여행 계획은 낡은 첨부 파일이 아니라 살아 움직이는 결과물이어야 합니다."
    }
  },
  moduboza: {
    accent: "violet",
    status: "poc",
    num: "03",
    name: { en: "ModuBoza", ko: "모두보자" },
    siteUrl: "https://moduboza.com/",
    tagline: {
      en: "An operations PoC for shared OTT, designed to be honest about scarcity.",
      ko: "희소성을 정직하게 다루도록 설계한 공유 OTT 운영 PoC."
    },
    lede: {
      en: "ModuBoza is a private proof-of-concept exploring subscription pooling at the operations layer: provider pools, isolated credentials, queueing, session rules, and an audit-oriented operator surface.",
      ko: "모두보자는 구독 풀링을 운영 계층에서 탐구하는 비공개 PoC입니다. 공급자 풀, 격리된 자격 증명, 대기열, 세션 규칙, 감사 중심 운영자 표면을 다룹니다."
    },
    metrics: [
      { k: { en: "Mode", ko: "모드" }, v: { en: "Internal PoC", ko: "내부 PoC" } },
      { k: { en: "Phase 1", ko: "Phase 1" }, v: { en: "Single provider · single region", ko: "단일 공급자 · 단일 지역" } },
      { k: { en: "Sessions", ko: "세션" }, v: { en: "1 per pool, enforced", ko: "풀당 1, 강제" } },
      { k: { en: "Posture", ko: "상태" }, v: { en: "Legal review required", ko: "법무 검토 필요" } }
    ],
    sections: [
      {
        k: { en: "01 — Pool, not share", ko: "01 — 공유가 아니라 풀링" },
        h: { en: "Credentials stay in the operator layer.", ko: "자격 증명은 운영자 계층 안에 머뭅니다." },
        body: {
          en: "Users are matched to managed provider accounts without seeing credentials. The system models scarcity through queues rather than overbooking.",
          ko: "사용자는 자격 증명을 보지 않고 관리되는 공급자 계정에 매칭됩니다. 시스템은 오버부킹 대신 대기열로 희소성을 모델링합니다."
        }
      },
      {
        k: { en: "02 — Bots, jobs, and audit", ko: "02 — 봇, 작업, 감사 로그" },
        h: { en: "Every state change leaves a trace.", ko: "모든 상태 변경이 흔적을 남깁니다." },
        body: {
          en: "Verification, health checks, and auto-login are modeled as queued BotJobs. Operators can inspect what ran, when it ran, and how it failed.",
          ko: "검증, 헬스체크, 자동 로그인은 대기열 BotJob으로 모델링됩니다. 운영자는 무엇이 언제 실행됐고 어떻게 실패했는지 확인할 수 있습니다."
        }
      },
      {
        k: { en: "03 — Conservative public posture", ko: "03 — 보수적인 공개 포지션" },
        h: { en: "PoC first, launch claims later.", ko: "먼저 PoC, 출시 주장은 나중에." },
        body: {
          en: "The product remains private until legal, payment, platform, and operational review are complete. Public copy avoids partnership or legality claims.",
          ko: "법무, 결제, 플랫폼, 운영 검토가 끝나기 전까지 제품은 비공개 PoC로 유지됩니다. 공개 카피는 제휴나 법적 결론을 단정하지 않습니다."
        }
      }
    ],
    proofs: [
      {
        k: { en: "Credential evidence", ko: "자격 증명 근거" },
        h: { en: "Credentials are isolated from subscribers.", ko: "자격 증명은 구독자와 분리됩니다." },
        body: {
          en: "Research confirms provider account registration, AES-256-GCM passwordCipher storage, managed account matching, and a product rule that OTT credentials are not shown to users.",
          ko: "리서치는 공급자 계정 등록, AES-256-GCM passwordCipher 저장, 관리 계정 매칭, OTT 자격 증명을 사용자에게 노출하지 않는 제품 원칙을 확인합니다."
        }
      },
      {
        k: { en: "Operations evidence", ko: "운영 근거" },
        h: { en: "Scarcity is modeled in queues and sessions.", ko: "희소성은 대기열과 세션으로 모델링합니다." },
        body: {
          en: "The PoC describes one-person sessions, provider pools, BotJob queues for verify/health/auto-login work, admin inspection, and audit logs for state changes.",
          ko: "PoC는 1인 세션, 공급자 풀, verify/health/auto-login 작업용 BotJob 대기열, 관리자 점검, 상태 변경 감사 로그를 설명합니다."
        }
      },
      {
        k: { en: "Risk evidence", ko: "리스크 근거" },
        h: { en: "The public posture stays deliberately conservative.", ko: "공개 포지션은 의도적으로 보수적입니다." },
        body: {
          en: "The research flags legal, tax, payment, copyright, platform ToS, and partnership-misread risks, so the page presents ModuBoza as an internal PoC rather than a launched service.",
          ko: "리서치는 법무, 세무, 결제, 저작권, 플랫폼 약관, 제휴 오인 리스크를 표시하므로 이 페이지는 모두보자를 출시 서비스가 아니라 내부 PoC로 다룹니다."
        }
      }
    ],
    quote: {
      en: "A solo streaming subscription should be built for one viewer, not priced like a household.",
      ko: "혼자 보는 OTT 구독은 가구 단위 가격이 아니라, 한 사람에게 맞춘 선택지여야 합니다."
    }
  },
  retalk: {
    accent: "moss",
    status: "candidate",
    num: "04",
    name: { en: "ReTalk", ko: "리톡" },
    siteUrl: "https://retalk.agentryx-ai.com/",
    tagline: {
      en: "Restore the conversations already on your PC.",
      ko: "내 PC에 이미 있는 대화를 되살립니다."
    },
    lede: {
      en: "ReTalk is a local-first desktop app that restores the KakaoTalk conversations already on your PC: find and preview what is recoverable, read and search the full history, export a clean archive, and auto-save expiring photos and videos for free. Chat content stays on the device by default.",
      ko: "리톡은 PC에 이미 남아 있는 카카오톡 대화를 복원하는 로컬 우선 데스크탑 앱입니다. 복원 가능한 분량을 찾아 미리 보고, 전체 기록을 열람·검색하고, 깔끔한 아카이브로 내보내며, 사라질 사진·동영상은 무료로 자동 보관합니다. 대화 내용은 기본적으로 기기 안에 머뭅니다."
    },
    metrics: [
      { k: { en: "Posture", ko: "포지셔닝" }, v: { en: "Local-first by design", ko: "설계부터 로컬 우선" } },
      { k: { en: "Network", ko: "네트워크" }, v: { en: "Account · license · updates", ko: "계정·라이선스·업데이트" } },
      { k: { en: "Platform", ko: "플랫폼" }, v: { en: "Windows (beta) · macOS soon", ko: "Windows(베타) · macOS 예정" } },
      { k: { en: "Stage", ko: "단계" }, v: { en: "Beta · live", ko: "베타 · 운영 중" } }
    ],
    sections: [
      {
        k: { en: "01 — A restoration tool, not an analyzer", ko: "01 — 분석 도구가 아니라 복원 도구" },
        h: { en: "Restore, read, search, export.", ko: "복원하고, 읽고, 검색하고, 내보냅니다." },
        body: {
          en: "ReTalk reads the KakaoTalk data already on the PC and rebuilds it into rooms you can read again, a history you can search across rooms, and an archive you can export as CSV, HTML, JSON, ZIP, or PDF. No AI summary, no cloud sync.",
          ko: "리톡은 PC에 이미 있는 카카오톡 데이터를 읽어, 다시 읽을 수 있는 방별 대화와 여러 방을 가로지르는 검색, 그리고 CSV·HTML·JSON·ZIP·PDF로 내보낼 수 있는 아카이브로 되살립니다. AI 요약도, 클라우드 동기화도 없습니다."
        }
      },
      {
        k: { en: "02 — Free media backup before it expires", ko: "02 — 만료 전 무료 미디어 자동 보관" },
        h: { en: "Save the photos before they disappear.", ko: "사진이 사라지기 전에 지켜냅니다." },
        body: {
          en: "KakaoTalk keeps shared photos and videos only briefly. ReTalk quietly backs up still-available media to the PC before that window closes — free, with no paid cloud subscription. It prevents loss; it does not recover media that has already expired.",
          ko: "카카오톡은 주고받은 사진·동영상을 잠깐만 보관합니다. 리톡은 그 기간이 지나기 전에 아직 남아 있는 미디어를 조용히 내 PC에 보관합니다 — 무료로, 유료 클라우드 구독 없이. 사라지기 전에 지켜내는 것이며, 이미 만료된 미디어를 되살리지는 않습니다."
        }
      },
      {
        k: { en: "03 — Preview before paywall", ko: "03 — 결제 전 미리 보기" },
        h: { en: "See what is recoverable before you pay.", ko: "결제 전에 무엇이 복원되는지 봅니다." },
        body: {
          en: "Download, preview counts, latest-message preview, and free media auto-backup need no payment. A one-time, 31-day, per-profile pass unlocks full reading, cross-room search, and export. Chat content, names, and media never leave the device.",
          ko: "다운로드, 복원 가능 분량 확인, 최신 대화 미리보기, 무료 미디어 자동 보관은 결제가 필요 없습니다. 한 번 결제하는 프로필 1개·31일 이용권이 전체 열람·통합 검색·내보내기를 엽니다. 대화 내용·이름·미디어는 기기를 떠나지 않습니다."
        }
      }
    ],
    proofs: [
      {
        k: { en: "Local evidence", ko: "로컬 근거" },
        h: { en: "Personal content stays on-device by default.", ko: "개인 콘텐츠는 기본적으로 기기에 남습니다." },
        body: {
          en: "Restore, read, search, and export all run on the user's PC. The service server is limited to account, payment and license, update checks, and non-personal stats; chat bodies, room names, contacts, and media stay off it. The one stored personal field is the user's own profile name, kept to bind a license to a profile.",
          ko: "복원·열람·검색·내보내기는 모두 사용자 PC에서 실행됩니다. 서비스 서버는 계정, 결제·라이선스, 업데이트 확인, 비개인 통계로 역할이 제한되며 대화 본문·방 이름·연락처·미디어는 저장하지 않습니다. 저장하는 유일한 개인 정보는 라이선스를 프로필에 연결하기 위한 본인 프로필 이름입니다."
        }
      },
      {
        k: { en: "Workflow evidence", ko: "워크플로 근거" },
        h: { en: "The first run proves recoverability before unlock.", ko: "첫 실행에서 unlock 전 복원 가능성을 보여줍니다." },
        body: {
          en: "On first run ReTalk reports recoverable rooms, messages, dates, and media counts and shows a most-recent preview — before any payment. Segments the PC never received are marked as an unviewable gap rather than hidden.",
          ko: "첫 실행에서 리톡은 결제 전에 복원 가능한 방·메시지·기간·미디어 수를 보여주고 최신 대화를 미리 보여줍니다. PC가 받지 못한 구간은 숨기지 않고 ‘표시할 수 없는 구간’으로 구분합니다."
        }
      },
      {
        k: { en: "Scope evidence", ko: "범위 근거" },
        h: { en: "The product avoids unsupported claims.", ko: "지원되지 않는 보장은 피합니다." },
        body: {
          en: "ReTalk requires the target KakaoTalk account to be logged in on the same PC, restores only the segments the PC holds, and does not guarantee recovery of deleted or expired content. It is an independent tool, not affiliated with KakaoTalk.",
          ko: "리톡은 대상 카카오톡 계정이 같은 PC에 로그인돼 있어야 동작하고, PC에 남아 있는 구간만 복원하며, 삭제·만료된 내용의 복구를 보장하지 않습니다. 카카오와 제휴하지 않은 독립 도구입니다."
        }
      }
    ],
    quote: {
      en: "A conversation history is part of who you are. It should live close to you.",
      ko: "대화 기록은 자신의 일부입니다. 사용자 가까이에 있어야 합니다."
    }
  }
};
