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
    footerTagline: "Built in Seoul · Run from anywhere",
    footerRights: "Agentryx AI. A small operator-led studio.",
    statusCore: "Core product",
    statusCandidate: "Core candidate",
    statusPoc: "Internal PoC",
    statusDirection: "Direction",
    homeLabel: "Operator-led · Agent-first · Seoul, 2026",
    homeH1A: "One person.",
    homeH1B: "Four products.",
    homeH1C: "The work runs on agents.",
    homeLede:
      "Agentryx AI is a one-person studio in Seoul. Two of the four — Itineva and ReTalk — are live right now. Agents do the building, reviewing, shipping, and operating; one operator decides what ships.",
    productsNum: "01 — Products",
    productsHeading: "Four bets, one operating system.",
    productsMeta:
      "Each product is a thesis strong enough to ship. Agentryx is the development environment we run the studio on; the other three are products built with that operating discipline.",
    thesisNum: "02 — Operating thesis",
    thesisHeading: "How a small studio runs many products.",
    thesisMeta: "Four operating principles that shape every product, every PR, every standup.",
    notesNum: "03 — Why now",
    notesHeading: "Three observations we are building against.",
    ctaEyebrow: "See for yourself",
    ctaHeading: "Don't take our word for it — use the products.",
    ctaBody:
      "Two are open to anyone today: Itineva, a travel planner, and ReTalk, a KakaoTalk chat restorer in beta. Go open one. If it's useful, or you just want to compare notes on running a company with agents, the operator reads every email.",
    aboutLabel: "About · The studio",
    aboutH1A: "A small studio,",
    aboutH1B: "proving an AI company can run on agents.",
    aboutLede:
      "Agentryx AI is an operator-led studio in Seoul. One person sets priorities; agents execute against narrow, well-specified surfaces. We design the studio with the same discipline we ask of the products inside it. We're not claiming we've cracked it — the shipped products are how we test the idea in the open.",
    thesisLabel: "Operating thesis",
    thesisH1A: "Four principles.",
    thesisH1B: "Every product, every PR, every standup.",
    thesisLede:
      "These are the rules we run the studio by — public, so anyone who uses our products can hold us to them.",
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
    footerTagline: "서울에서 만들고, 어디서나 일합니다",
    footerRights: "Agentryx AI. 운영자가 직접 운영하는 작은 스튜디오.",
    statusCore: "코어 제품",
    statusCandidate: "코어 후보",
    statusPoc: "내부 PoC",
    statusDirection: "방향성",
    homeLabel: "운영자 주도 · 에이전트 우선 · 서울, 2026",
    homeH1A: "한 사람.",
    homeH1B: "네 개의 제품.",
    homeH1C: "일은 에이전트가 합니다.",
    homeLede:
      "Agentryx AI는 서울의 1인 스튜디오입니다. 네 제품 중 Itineva와 리톡은 지금 바로 쓸 수 있습니다. 만들고, 리뷰하고, 출시하고, 운영하는 일은 에이전트가 하고, 무엇을 낼지는 운영자 한 사람이 정합니다.",
    productsNum: "01 — 제품",
    productsHeading: "네 개의 베팅, 하나의 운영 체계.",
    productsMeta:
      "각 제품은 출시할 만큼 확신이 선 가설입니다. Agentryx는 스튜디오를 굴리는 개발 환경이고, 나머지 세 제품은 그 운영 규율 위에서 만든 결과물입니다.",
    thesisNum: "02 — 운영 원칙",
    thesisHeading: "작은 스튜디오가 여러 제품을 운영하는 방식.",
    thesisMeta: "모든 제품, 모든 PR, 모든 스탠드업을 관통하는 네 가지 원칙입니다.",
    notesNum: "03 — 왜 지금인가",
    notesHeading: "우리가 딛고 서 있는 세 가지 관찰.",
    ctaEyebrow: "직접 확인하세요",
    ctaHeading: "말로 믿지 말고, 직접 써 보세요.",
    ctaBody: "지금 누구나 써 볼 수 있는 건 둘입니다. 여행 기획 Itineva, 그리고 베타로 공개한 카톡 대화 복원 리톡. 하나 열어 보세요. 써 보고 쓸 만했거나 에이전트로 회사를 굴리는 이야기가 궁금하다면 메일을 보내 주세요. 운영자가 직접 읽습니다.",
    aboutLabel: "회사 · 스튜디오",
    aboutH1A: "작은 스튜디오,",
    aboutH1B: "AI 회사가 에이전트로 굴러갈 수 있는지 증명하는 중.",
    aboutLede:
      "Agentryx AI는 서울에 있는 운영자 주도 스튜디오입니다. 한 사람이 우선순위를 정하고, 에이전트는 잘 정의된 좁은 작업 범위에서 일을 처리합니다. 제품에 요구하는 것과 똑같은 원칙으로 스튜디오를 설계합니다. 다 됐다고 말하지 않습니다. 출시한 제품이 이 생각을 공개적으로 시험하는 방식입니다.",
    thesisLabel: "운영 원칙",
    thesisH1A: "네 가지 원칙.",
    thesisH1B: "모든 제품, 모든 PR, 모든 스탠드업.",
    thesisLede:
      "스튜디오를 굴리는 규칙입니다. 제품을 쓰는 사람이라면 누구나 우리에게 책임을 물을 수 있도록 공개합니다.",
    pressLabel: "프레스 · 연락",
    pressH1: "프레스와 연락, 그리고 우리가 말할 것과 말하지 않을 것.",
    pressLede:
      "Agentryx AI는 작은 회사이고, 운영자가 직접 운영합니다. 프레스 팀은 따로 없으며 문의에는 운영자가 직접 답합니다.",
    next: "다음",
    whereNext: "여기서 어디로 갈까요."
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
      en: "A program that turns a goal into finished work on its own — splitting it into a sub-task DAG, running it, and replanning from the error when a step fails.",
      ko: "목표 하나를 스스로 완성된 결과로 바꾸는 프로그램. 하위 작업 DAG로 쪼개 실행하고, 한 단계가 실패하면 에러를 읽고 다시 계획합니다."
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
      ko: "여행지·일정·동행·취향만 입력하면 버전 관리·갤러리·동선 점검까지 되는 여행 페이지가 만들어집니다."
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
      ko: "공유 OTT 구독을 위한 사내 운영 PoC. 공급자 풀, 격리된 자격 증명, 1인 세션."
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
      ko: "PC에 이미 남아 있는 카카오톡 대화를 복원해 열람·검색·내보내고, 사라질 사진은 무료로 자동 보관하는 로컬 우선 데스크톱 앱. 베타 운영 중."
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
      ko: "운영자가 우선순위를 쥐고, 에이전트는 잘 정의된 좁은 범위에서 일을 처리합니다."
    },
    // Principle I's "bet on verification, not consensus" claim (the `long` text
    // below) is grounded in the multi-agent-debate evidence; last reviewed
    // 2026-06-23 — re-check and update the copy if the research shifts. Sources:
    //   • Multi-LLM-Agents Debate, ICLR 2025 blogpost — MAD doesn't reliably beat
    //     a single agent; most gains come from majority voting, not the debate.
    //     https://d2jud02ci9yv69.cloudfront.net/2025-04-28-mad-159/blog/mad/
    //   • "Voting or Consensus?" arXiv 2502.19130 — majority pressure can yield a
    //     confident, wrong consensus and suppress independent correction.
    //     https://arxiv.org/pdf/2502.19130
    //   • Cognition "Don't Build Multi-Agents" vs Anthropic "How we built our
    //     multi-agent research system" (orchestrator-workers, +90.2% on research
    //     evals) — multi-agent pays off for breadth/orchestration + verification,
    //     not for agents debating to consensus (which is what Agentryx avoids:
    //     a Lead plus workers plus verification, not a consensus vote).
    //     https://www.anthropic.com/engineering/built-multi-agent-research-system
    long: {
      en: "When agents just debate in a chat log until they agree, the evidence says most of the gain comes from the vote, not the debate — and a confident, wrong consensus is a real failure mode. So we bet the other way: one operator owns the roadmap, the design, and the merge button; agents work in parallel against a small, well-specified surface; and nothing ships because everyone agreed — only because it was verified.",
      ko: "에이전트들을 채팅 로그에서 합의할 때까지 토론하게 두면, 이득은 대개 토론이 아니라 다수결에서 나온다는 게 지금까지의 근거입니다. 게다가 자신만만하게 틀린 합의로 수렴하기도 합니다. 그래서 우리는 반대로 겁니다. 운영자가 로드맵·디자인·머지 버튼을 쥐고, 에이전트는 잘 정의된 좁은 범위에서 병렬로 일하며, 합의했기 때문이 아니라 검증을 통과했기 때문에 출시합니다."
    }
  },
  {
    key: { en: "II — Agent-first", ko: "II — 에이전트 우선" },
    h: { en: "AI agents are our default coworkers.", ko: "AI 에이전트가 기본 동료입니다." },
    p: {
      en: "We design specs, repos, reviews, and daily operations around AI agents as the highest-leverage tool in the studio.",
      ko: "AI 에이전트가 스튜디오에서 가장 큰 레버리지를 내도록 스펙·레포·리뷰·일일 운영을 설계합니다."
    },
    long: {
      en: "AI agents are the highest-leverage tool we have, and we treat them that way. Specs are written so an agent can act on them; repos are structured so agents can navigate them; reviews are scheduled so agent work is never the long pole.",
      ko: "AI 에이전트는 우리가 가진 가장 레버리지 높은 도구이고, 실제로 그렇게 대우합니다. 스펙은 에이전트가 바로 작업할 수 있게 쓰고, 레포는 에이전트가 탐색하기 좋게 구조화하며, 리뷰는 에이전트 작업이 병목이 되지 않도록 운영합니다."
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
    key: { en: "IV — Small, real surfaces", ko: "IV — 작고 진짜인 범위" },
    h: { en: "Ship the smallest verifiable thing.", ko: "검증 가능한 가장 작은 단위로 출시합니다." },
    p: {
      en: "We prefer narrow products that work end-to-end over broad products that mostly work.",
      ko: "넓고 어설픈 제품보다 좁고 끝까지 동작하는 제품을 만듭니다."
    },
    long: {
      en: "Each product fits on a single screen of pitch and does one thing fully. When we are tempted to expand a surface, we ask whether the new surface will be as verifiable as the old one. If not, we do not ship it.",
      ko: "각 제품은 한 화면짜리 소개에 담기고, 한 가지 일을 끝까지 합니다. 기능 범위를 넓히고 싶을 때마다 새 범위가 기존만큼 검증 가능한지 묻고, 아니라면 출시하지 않습니다."
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
      ko: "흥미로운 질문은, 한 명의 운영자가 목적에 맞게 만든 개발 환경 안에서 회사 하나를 통째로 굴릴 수 있느냐입니다."
    }
  },
  {
    k: { en: "Observation 02", ko: "관찰 02" },
    h: { en: "Verification is the moat, not the model.", ko: "해자는 모델이 아니라 검증입니다." },
    p: {
      en: "Models commodify quickly. Review, evals, regression checks, and operations are where durable advantage lives.",
      ko: "모델은 빠르게 흔해집니다. 리뷰·평가·회귀 테스트·운영 규율이 오래가는 우위입니다."
    }
  },
  {
    k: { en: "Observation 03", ko: "관찰 03" },
    h: {
      en: "The studios that build their own tools pull ahead.",
      ko: "자기 도구를 만드는 스튜디오가 앞서 나갑니다."
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
    h: { en: "Plan to MVP in a month.", ko: "기획부터 MVP까지, 한 달." },
    p: {
      en: "Each product is scoped to go from plan to a shipped MVP in about a month — design, build, test, launch. ReTalk ran about 31 days end to end, ads and the payment-gateway application included.",
      ko: "각 제품은 기획부터 MVP 출시까지, 설계·구현·테스트·런칭을 한 달 안에 끝내도록 잡습니다. 리톡은 광고 집행과 결제대행(PG) 신청까지 포함해 처음부터 끝까지 약 31일이 걸렸습니다."
    }
  },
  {
    h: { en: "Proof, not promises.", ko: "약속 말고, 결과로." },
    p: {
      en: "The thesis is public and the products are real. We'd rather be measured by what ships than by what we promise.",
      ko: "제품은 이미 나와 있고, 가설도 공개합니다. 약속이 아니라 출시한 결과로 평가받는 편이 낫습니다."
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
      ko: "근거 없는 모델 성능 추정, 미공개 제품 세부 사항, 고객 동의 없는 개별 KPI."
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
      en: "Turn a goal into finished work, on its own.",
      ko: "목표를 스스로 완성된 결과로."
    },
    lede: {
      en: "Agentryx turns a goal into finished work on its own. Give it a goal; it decides whether to run the task directly or split it into a sub-task DAG, runs each piece in its own git worktree, and synthesizes the result — replanning with the actual error in hand when a step fails. It drives the Claude or Codex CLI, and it is built one small, verifiable stage at a time.",
      ko: "Agentryx는 목표 하나를 스스로 완성된 결과로 바꿉니다. 목표를 주면 그 일을 바로 할지 하위 작업 DAG로 쪼갤지 직접 정하고, 각 조각을 별도 git worktree에서 실행한 뒤 결과를 합칩니다. 한 단계가 실패하면 실제 에러를 손에 쥐고 다시 계획합니다. Claude나 Codex CLI를 구동하며, 작고 검증 가능한 단계로 하나씩 만들어 갑니다."
    },
    metrics: [
      { k: { en: "Pattern", ko: "패턴" }, v: { en: "Recursive orchestrator-workers", ko: "재귀적 오케스트레이터-워커" } },
      { k: { en: "Runner", ko: "러너" }, v: "Claude · Codex CLI" },
      { k: { en: "Isolation", ko: "격리" }, v: { en: "Per-task git worktree", ko: "태스크별 git worktree" } },
      { k: { en: "Stage", ko: "단계" }, v: { en: "Stages 00–02 · in build", ko: "Stage 00–02 · 개발 중" } }
    ],
    sections: [
      {
        k: { en: "01 — One shape for every task", ko: "01 — 모든 태스크가 한 형태" },
        h: { en: "Run it, or split it — the same rule at every level.", ko: "바로 실행하거나 쪼개거나, 모든 레벨에서 같은 규칙." },
        body: {
          en: "A task either runs directly or splits into a sub-task DAG, by the same recursive rule at every level. Single-agent execution isn't a special path; it's the base case of that rule.",
          ko: "태스크는 바로 실행되거나 하위 작업 DAG로 갈라집니다. 모든 레벨에 같은 재귀 규칙이 적용되고, 단일 에이전트 실행은 특별한 경로가 아니라 그 규칙의 기본 사례일 뿐입니다."
        }
      },
      {
        k: { en: "02 — Replan with understanding", ko: "02 — 이해하고 다시 계획" },
        h: { en: "It reads the error, then replans — not a blind retry.", ko: "에러를 읽고 다시 계획합니다. 맹목적 재시도가 아니라." },
        body: {
          en: "When a sub-task fails, its parent replans with the error and partial results in hand. If it still can't recover, the failure propagates up and a higher level replans with broader context. The nearest prior method re-splits without ever seeing the error.",
          ko: "하위 작업이 실패하면 부모가 에러와 부분 결과를 손에 쥐고 다시 계획합니다. 그래도 못 풀면 실패가 위로 전파되고, 더 위 레벨이 넓은 맥락으로 다시 계획합니다. 가장 가까운 기존 방법은 에러를 보지도 않고 다시 쪼갭니다."
        }
      },
      {
        k: { en: "03 — Built in small stages", ko: "03 — 작은 단계로 구현" },
        h: { en: "A recursive generalization of orchestrator-workers.", ko: "오케스트레이터-워커의 재귀적 일반화." },
        body: {
          en: "The closest validated peer is Anthropic's orchestrator-workers; Agentryx is its recursive generalization. It is built one stage at a time — Stages 00–02 are done (single agent, web frontend, task decomposition); agent-to-agent delegation, automatic verification, and parallel execution come later.",
          ko: "가장 가까운 검증된 선례는 Anthropic의 오케스트레이터-워커이고, Agentryx는 그것의 재귀적 일반화입니다. 한 번에 한 단계씩 만듭니다. Stage 00–02 완료(단일 에이전트, 웹 프런트엔드, 태스크 분해)이고, 에이전트 간 위임·자동 검증·병렬 실행은 다음 단계입니다."
        }
      }
    ],
    proofs: [
      {
        k: { en: "Implementation evidence", ko: "구현 근거" },
        h: { en: "The task model is built, not promised.", ko: "태스크 모델은 약속이 아니라 구현입니다." },
        body: {
          en: "The README states it plainly: \"Stages 00–02 are built — the task model is implemented as of Stage 02.\" Stage 00 is a single agent finishing one task; Stage 02 decomposes a task into a sub-task DAG, runs it, and synthesizes the result.",
          ko: "README가 그대로 적습니다. 'Stage 00–02 구현 완료 — 태스크 모델은 Stage 02 기준으로 구현됨.' Stage 00은 단일 에이전트가 한 태스크를 끝내고, Stage 02는 태스크를 하위 작업 DAG로 쪼개 실행하고 합성합니다."
        }
      },
      {
        k: { en: "Runner evidence", ko: "러너 근거" },
        h: { en: "Claude or Codex, in isolated worktrees.", ko: "Claude나 Codex, 격리된 worktree에서." },
        body: {
          en: "Agentryx drives the Claude or Codex CLI as interchangeable adapters, and each task runs in its own git worktree under a scratch repo — so an agent's work is isolated and can be inspected after the run.",
          ko: "Agentryx는 Claude 또는 Codex CLI를 교체 가능한 어댑터로 구동하고, 각 태스크는 스크래치 레포 아래 자기 git worktree에서 실행됩니다. 그래서 작업이 격리되고 실행 뒤 그대로 점검할 수 있습니다."
        }
      },
      {
        k: { en: "Scope evidence", ko: "범위 근거" },
        h: { en: "What it can't do yet is stated out loud.", ko: "아직 못 하는 것은 분명히 밝혀 둡니다." },
        body: {
          en: "The README is explicit about scope: at these stages there is no agent-to-agent delegation, no automatic verification, no parallel execution, and no multi-tenancy — those are later stages, and the public copy doesn't claim them.",
          ko: "README는 범위를 분명히 합니다. 지금 단계에는 에이전트 간 위임, 자동 검증, 병렬 실행, 멀티테넌시가 없습니다. 다음 단계의 일이고, 공개 카피도 그것을 주장하지 않습니다."
        }
      }
    ],
    quote: {
      en: "An AI company should be a small operator and a lot of leverage.",
      ko: "AI 회사는 작은 운영자 한 명과 큰 레버리지로 굴러가야 합니다."
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
      ko: "웹사이트처럼 만드는 여행 계획. 버전이 관리되고, 공유되고, 계속 살아 있습니다."
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
          ko: "버전이 관리되는 여행 페이지에서는 동행 모두가 같은 계획을 봅니다. 버전마다 변하지 않는 공유 링크가 있고, 대표로 지정한 버전이 기본으로 보입니다."
        }
      },
      {
        k: { en: "02 — A four-stage generator", ko: "02 — 4단계 생성기" },
        h: { en: "Skeleton, day plans, enrichment, autofix.", ko: "골격, 일자별 일정, 보강, 자동 보정." },
        body: {
          en: "The generator streams a skeleton, creates day plans in parallel, enriches places with real-world data, and runs an autofix pass before publish.",
          ko: "생성기는 골격을 스트리밍하고, 일자별 계획을 병렬로 만들고, 실제 장소 데이터로 보강한 뒤, 게시 전에 자동 보정을 한 번 돌립니다."
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
          ko: "레포 리서치는 게시 전 Stage A 골격 스트리밍, Stage B 일자별 일정 병렬 생성, Stage C Google Places 보강, Stage D 자동 보정·watchdog를 확인합니다."
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
        h: { en: "Routes and places are part of the product surface.", ko: "장소와 동선 검증도 제품의 일부입니다." },
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
      ko: "모두보자는 구독 풀링을 운영 계층에서 실험하는 비공개 PoC입니다. 공급자 풀, 분리된 자격 증명, 대기열, 세션 규칙, 그리고 감사 중심의 운영자 화면을 다룹니다."
    },
    metrics: [
      { k: { en: "Mode", ko: "모드" }, v: { en: "Internal PoC", ko: "내부 PoC" } },
      { k: { en: "Phase 1", ko: "Phase 1" }, v: { en: "Single provider · single region", ko: "단일 공급자 · 단일 지역" } },
      { k: { en: "Sessions", ko: "세션" }, v: { en: "1 per pool, enforced", ko: "풀당 1, 강제" } },
      { k: { en: "Status", ko: "상태" }, v: { en: "Legal review required", ko: "법무 검토 필요" } }
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
          ko: "검증, 헬스체크, 자동 로그인은 대기열에 쌓이는 BotJob으로 처리합니다. 운영자는 무엇이 언제 실행됐고 어떻게 실패했는지 확인할 수 있습니다."
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
          ko: "PoC는 1인 세션, 공급자 풀, 검증·헬스체크·자동 로그인 작업용 BotJob 대기열, 관리자 점검, 상태 변경 감사 로그를 설명합니다."
        }
      },
      {
        k: { en: "Risk evidence", ko: "리스크 근거" },
        h: { en: "The public posture stays deliberately conservative.", ko: "공개 포지션은 의도적으로 보수적입니다." },
        body: {
          en: "The research flags legal, tax, payment, copyright, platform ToS, and partnership-misread risks, so the page presents ModuBoza as an internal PoC rather than a launched service.",
          ko: "리서치는 법무·세무·결제·저작권·플랫폼 약관·제휴 오인 리스크를 짚어내므로, 이 페이지는 모두보자를 출시된 서비스가 아니라 내부 PoC로 다룹니다."
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
      ko: "리톡은 PC에 이미 남아 있는 카카오톡 대화를 복원하는 로컬 우선 데스크톱 앱입니다. 복원 가능한 분량을 찾아 미리 보고, 전체 기록을 열람·검색하고, 깔끔한 아카이브로 내보내며, 사라질 사진·동영상은 무료로 자동 보관합니다. 대화 내용은 기본적으로 기기 안에 머뭅니다."
    },
    metrics: [
      { k: { en: "Stance", ko: "포지셔닝" }, v: { en: "Local-first by design", ko: "설계부터 로컬 우선" } },
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
          ko: "카카오톡은 주고받은 사진·동영상을 잠깐만 보관합니다. 리톡은 그 기간이 지나기 전에 아직 남아 있는 미디어를 조용히 내 PC에 보관합니다. 무료이며, 유료 클라우드 구독도 필요 없습니다. 사라지기 전에 지켜내는 것이지, 이미 만료된 미디어를 되살리지는 않습니다."
        }
      },
      {
        k: { en: "03 — Preview before paywall", ko: "03 — 결제 전 미리 보기" },
        h: { en: "See what is recoverable before you pay.", ko: "결제 전에 무엇이 복원되는지 봅니다." },
        body: {
          en: "Download, preview counts, latest-message preview, and free media auto-backup need no payment. A one-time, 31-day, per-profile pass unlocks full reading, cross-room search, and export. Chat content, names, and media never leave the device.",
          ko: "다운로드, 복원 가능 분량 확인, 최신 대화 미리보기, 무료 미디어 자동 보관은 결제가 필요 없습니다. 프로필 1개·31일짜리 1회 결제 이용권으로 전체 열람·통합 검색·내보내기가 열립니다. 대화 내용·이름·미디어는 기기를 떠나지 않습니다."
        }
      }
    ],
    proofs: [
      {
        k: { en: "Local evidence", ko: "로컬 근거" },
        h: { en: "Personal content stays on-device by default.", ko: "개인 콘텐츠는 기본적으로 기기에 남습니다." },
        body: {
          en: "Restore, read, search, and export all run on the user's PC. The service server is limited to account, payment and license, update checks, and non-personal stats; chat bodies, room names, contacts, and media stay off it. The one stored personal field is the user's own profile name, kept to bind a license to a profile.",
          ko: "복원·열람·검색·내보내기는 모두 사용자 PC에서 실행됩니다. 서비스 서버는 계정, 결제·라이선스, 업데이트 확인, 개인정보가 아닌 통계로 역할이 제한되며, 대화 본문·방 이름·연락처·미디어는 저장하지 않습니다. 저장하는 유일한 개인정보는 라이선스를 프로필에 연결하기 위한 본인 프로필 이름입니다."
        }
      },
      {
        k: { en: "Workflow evidence", ko: "워크플로 근거" },
        h: { en: "The first run proves recoverability before unlock.", ko: "첫 실행에서, 결제 전에 복원 가능성을 보여줍니다." },
        body: {
          en: "On first run ReTalk reports recoverable rooms, messages, dates, and media counts and shows a most-recent preview — before any payment. Segments the PC never received are marked as an unviewable gap rather than hidden.",
          ko: "첫 실행에서 리톡은 결제 전에 복원 가능한 방·메시지·기간·미디어 수를 보여주고 최신 대화를 미리 보여줍니다. PC가 받지 못한 구간은 숨기지 않고 ‘표시할 수 없는 구간’으로 구분합니다."
        }
      },
      {
        k: { en: "Scope evidence", ko: "범위 근거" },
        h: { en: "The product avoids unsupported claims.", ko: "근거 없는 보장은 하지 않습니다." },
        body: {
          en: "ReTalk requires the target KakaoTalk account to be logged in on the same PC, restores only the segments the PC holds, and does not guarantee recovery of deleted or expired content. It is an independent tool, not affiliated with KakaoTalk.",
          ko: "리톡은 대상 카카오톡 계정이 같은 PC에 로그인돼 있어야 동작하고, PC에 남아 있는 구간만 복원하며, 삭제·만료된 내용의 복구를 보장하지 않습니다. 카카오와 제휴하지 않은 독립 도구입니다."
        }
      }
    ],
    quote: {
      en: "A conversation history is part of who you are. It should live close to you.",
      ko: "대화 기록도 당신의 일부입니다. 당신 가까이에 있어야 합니다."
    }
  }
};
