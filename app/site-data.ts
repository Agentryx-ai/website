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
    footerTagline: "Operator-led · Run by agents",
    footerRights: "Agentryx AI. A small operator-led studio.",
    statusCore: "Core product",
    statusCandidate: "Core candidate",
    statusPoc: "Internal PoC",
    statusDirection: "Direction",
    homeLabel: "Operator-led · Agent-first · 2026",
    homeH1A: "Four products.",
    homeH1B: "Built and run by agents.",
    homeH1C: "An operator decides what ships.",
    homeLede:
      "Agentryx AI is an operator-led AI studio. It runs four products — a development environment it builds on, and three built with that same discipline. Agents handle the building, reviewing, shipping, and operating end to end.",
    productsNum: "01 — Products",
    productsHeading: "Four bets, one operating system.",
    productsMeta:
      "Each product is a thesis strong enough to ship.",
    thesisNum: "02 — Operating thesis",
    thesisHeading: "How a small studio runs many products.",
    thesisMeta: "Four operating principles that shape every product, every PR, every standup.",
    notesNum: "03 — Why now",
    notesHeading: "Three observations we are building against.",
    ctaEyebrow: "See for yourself",
    ctaHeading: "Judge us by what ships.",
    ctaBody:
      "Try each product as it launches, and hold us to the thesis. Or if you want to compare notes on running a company with agents, the operator reads every email.",
    aboutLabel: "About · The studio",
    aboutH1A: "A small studio,",
    aboutH1B: "proving an AI company can run on agents.",
    aboutLede:
      "Agentryx AI is an operator-led AI studio. An operator sets priorities; agents execute against narrow, well-specified surfaces. We design the studio with the same discipline we ask of the products inside it. The shipped products are how we test the idea in the open.",
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
    footerTagline: "운영자가 정하고, 에이전트가 만듭니다",
    footerRights: "Agentryx AI. 운영자 주도의 작은 스튜디오.",
    statusCore: "코어 제품",
    statusCandidate: "코어 후보",
    statusPoc: "내부 PoC",
    statusDirection: "방향성",
    homeLabel: "운영자 주도 · 에이전트 우선 · 2026",
    homeH1A: "네 개의 제품.",
    homeH1B: "만들고 운영하는 건 에이전트.",
    homeH1C: "무엇을 낼지는 운영자가 정합니다.",
    homeLede:
      "Agentryx AI는 운영자 주도의 AI 스튜디오입니다. 네 개의 제품을 운영합니다. 스튜디오를 굴리는 개발 환경 하나와, 그 규율 위에서 만든 세 제품입니다. 만들고, 리뷰하고, 출시하고, 운영하는 일은 에이전트가 맡습니다.",
    productsNum: "01 — 제품",
    productsHeading: "네 개의 베팅, 하나의 운영 체계.",
    productsMeta:
      "각 제품은 출시할 만큼 확신이 선 가설입니다. Agentryx는 스튜디오를 굴리는 개발 환경이고, 나머지 세 제품은 그 위에서 나온 결과물입니다.",
    thesisNum: "02 — 운영 원칙",
    thesisHeading: "작은 스튜디오가 여러 제품을 운영하는 방식.",
    thesisMeta: "모든 제품, 모든 PR, 모든 스탠드업을 관통하는 네 가지 원칙입니다.",
    notesNum: "03 — 왜 지금인가",
    notesHeading: "우리가 딛고 서 있는 세 가지 관찰.",
    ctaEyebrow: "직접 확인하세요",
    ctaHeading: "출시한 것으로 판단해 주세요.",
    ctaBody: "출시되는 대로 직접 써 보고 따져 보세요. 에이전트로 회사를 굴리는 이야기가 궁금하다면 메일을 보내 주세요. 운영자가 직접 읽습니다.",
    aboutLabel: "회사 · 스튜디오",
    aboutH1A: "작은 스튜디오,",
    aboutH1B: "AI 회사가 에이전트로 굴러갈 수 있는지 증명하는 중.",
    aboutLede:
      "Agentryx AI는 운영자 주도의 AI 스튜디오입니다. 운영자가 우선순위를 정하고, 에이전트는 잘 정의된 좁은 작업 범위에서 일을 처리합니다. 제품에 요구하는 것과 똑같은 원칙으로 스튜디오를 설계합니다. 다 됐다고 말하지 않습니다. 출시한 제품이 이 생각을 공개적으로 시험하는 방식입니다.",
    thesisLabel: "운영 원칙",
    thesisH1A: "네 가지 원칙.",
    thesisH1B: "모든 제품, 모든 PR, 모든 스탠드업.",
    thesisLede:
      "스튜디오를 굴리는 규칙입니다. 제품을 쓰는 사람이라면 누구나 우리에게 책임을 물을 수 있도록 공개합니다.",
    pressLabel: "프레스 · 연락",
    pressH1: "프레스와 연락, 그리고 우리가 말할 것과 말하지 않을 것.",
    pressLede:
      "Agentryx AI는 작은 회사입니다. 프레스 팀은 따로 없으며 문의에는 운영자가 직접 답합니다.",
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
      en: "A program that turns a goal into finished work on its own. It splits the goal into a sub-task DAG, runs it, and replans from the error when a step fails.",
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
      en: "A travel planner that turns destination, dates, travelers, and taste into a shareable trip page — versioned, with route checks built in.",
      ko: "여행지·일정·동행·취향을 입력하면 여행 페이지가 만들어집니다. 버전 관리, 갤러리, 동선 점검까지 됩니다."
    }
  },
  {
    id: "moduboza",
    num: "03",
    accent: "violet",
    status: "direction",
    name: { en: "ModuBoza", ko: "모두보자" },
    deck: {
      en: "Find something to watch and pay less for it — streaming discovery with one simple checkout. In development.",
      ko: "볼 것을 찾고, 더 저렴하게. 간단한 결제 하나로 즐기는 스트리밍 디스커버리. 개발 중."
    }
  },
  {
    id: "retalk",
    num: "04",
    accent: "moss",
    status: "candidate",
    name: { en: "ReTalk", ko: "리톡" },
    deck: {
      en: "A local-first desktop app that restores the KakaoTalk conversations already on your PC — read, search, and export. It also backs up expiring photos for free. Launching soon.",
      ko: "PC에 남은 카카오톡 대화를 복원해 열람·검색·내보내는 로컬 우선 데스크톱 앱. 사라질 사진은 무료로 자동 보관합니다. 곧 출시합니다."
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
      en: "When agents just debate in a chat log until they agree, the evidence says most of the gain comes from the vote, not the debate — and a confident, wrong consensus is a real failure mode. So we bet the other way: an operator owns the roadmap, the design, and the merge button; agents work in parallel against a small, well-specified surface; and nothing ships on agreement alone — the bar is whether it holds up, not whether everyone agreed.",
      ko: "에이전트들을 채팅 로그에서 합의할 때까지 토론하게 두면, 이득은 대개 토론이 아니라 다수결에서 나온다는 게 지금까지의 근거입니다. 게다가 자신만만하게 틀린 합의로 수렴하기도 합니다. 그래서 우리는 반대로 겁니다. 운영자가 로드맵·디자인·머지 버튼을 쥐고, 에이전트는 잘 정의된 좁은 범위에서 병렬로 일하며, 합의만으로는 내지 않습니다. 기준은 모두의 동의가 아니라 실제로 버티느냐입니다."
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
      en: "AI agents are the highest-leverage tool we have, and we treat them that way. Specs are written so an agent can act on them; repos are structured so agents can navigate them; reviews are scheduled so agent work rarely becomes the long pole.",
      ko: "AI 에이전트는 우리가 가진 가장 레버리지 높은 도구이고, 실제로 그렇게 대우합니다. 스펙은 에이전트가 바로 작업할 수 있게 쓰고, 레포는 에이전트가 탐색하기 좋게 구조화하며, 리뷰는 에이전트 작업이 병목이 되지 않도록 운영합니다."
    }
  },
  {
    key: { en: "III — Verification over velocity", ko: "III — 속도보다 검증" },
    h: { en: "We'd rather verify than rush.", ko: "빠름보다 검증을 택합니다." },
    p: {
      en: "We build static checks and human judgment into how work ships, and we don't treat a green check as finished.",
      ko: "정적 검증과 사람의 판단을 출시 흐름에 넣고, 초록불이 곧 완료라고 보지 않습니다."
    },
    long: {
      en: "We treat verification as the point, not a hoop to clear on the way to shipping. Static checks — lint, types, tests, screenshot diffs — catch the mechanical failures; a human read catches copy, taste, and the edge cases a check won't. We'd rather ship less and trust it more.",
      ko: "검증을 통과 의례가 아니라 목적으로 봅니다. 린트·타입·테스트·스크린샷 회귀 같은 정적 검증이 기계적 실패를 잡고, 사람이 읽어 카피·취향·엣지 케이스를 잡습니다. 적게 내더라도 더 믿을 수 있는 쪽을 택합니다."
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
      en: "We're testing whether a small operator inside a purpose-built development environment can run an entire company.",
      ko: "흥미로운 질문은, 운영자가 목적에 맞게 만든 개발 환경 안에서 회사 하나를 통째로 굴릴 수 있느냐입니다."
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
      en: "Generic tools force every studio into the same workflow. One built in-house can be shaped exactly to how the work gets done.",
      ko: "자체 개발 환경을 만들고 직접 쓰는 스튜디오는 일반 도구를 짜깁기하는 스튜디오를 앞섭니다."
    }
  }
];

export const aboutStories = [
  {
    h: { en: "The operator decides; agents build.", ko: "결정은 운영자, 구현은 에이전트." },
    p: {
      en: "Agents take the implementation work; the operator owns priorities, design, and the merge button.",
      ko: "구현은 에이전트가 맡고, 운영자는 우선순위·디자인·머지 버튼을 쥡니다."
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
      en: "How a small studio runs four products with agents, the operating thesis, verification systems, and what has not worked.",
      ko: "작은 스튜디오가 에이전트와 함께 네 제품을 운영하는 방식, 운영 원칙, 검증 시스템, 그리고 잘 안 된 것."
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
      en: "Agentryx decides whether to run a task directly or split it into a sub-task DAG, runs each piece in its own git worktree, and synthesizes the result. When a step fails, it replans with the actual error in hand. It drives the Claude or Codex CLI, and it's built one small, verifiable stage at a time.",
      ko: "Agentryx는 목표 하나를 스스로 완성된 결과로 바꿉니다. 목표를 주면 바로 실행할지 하위 작업 DAG로 쪼갤지 직접 정하고, 각 조각을 별도 git worktree에서 실행해 결과를 합칩니다. 한 단계가 실패하면 실제 에러를 손에 쥐고 다시 계획합니다."
    },
    metrics: [
      { k: { en: "Pattern", ko: "패턴" }, v: { en: "Recursive orchestrator-workers", ko: "재귀적 오케스트레이터-워커" } },
      { k: { en: "Runner", ko: "러너" }, v: "Claude · Codex CLI" },
      { k: { en: "Isolation", ko: "격리" }, v: { en: "Per-task git worktree", ko: "태스크별 git worktree" } },
      { k: { en: "Stage", ko: "단계" }, v: { en: "Stages 00–28 shipped · 29 in design", ko: "Stage 00–28 완료 · 29 설계 중" } }
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
          en: "The closest validated peer is Anthropic's orchestrator-workers; Agentryx is its recursive generalization, built one small stage at a time. Through Stage 28 it runs the DAG in parallel, replans on failure, coordinates through a single conversation, and checks whether a goal was actually met — not just whether a task ran. Stage 29, benchmark-gated completion, is in design.",
          ko: "가장 가까운 검증된 선례는 Anthropic의 오케스트레이터-워커이고, Agentryx는 그것의 재귀적 일반화입니다. 작고 검증 가능한 단계로 하나씩 만들었습니다. 그 결과 Stage 28까지 DAG를 병렬로 실행하고 실패 시 다시 계획하며, 하나의 대화로 조율하고, 태스크가 돌았는지가 아니라 목표가 실제로 달성됐는지를 확인합니다. Stage 29(벤치마크 게이트 완료)는 설계 중입니다."
        }
      }
    ],
    proofs: [
      {
        k: { en: "Implementation evidence", ko: "구현 근거" },
        h: { en: "The task model is built, not promised.", ko: "태스크 모델은 약속이 아니라 구현입니다." },
        body: {
          en: "The task model — run-or-split, run, synthesize — has been implemented since Stage 02, and the system has grown through Stage 28: parallel DAG execution, failure replanning, and goal-achievement verification all run today.",
          ko: "태스크 모델(실행-또는-분할, 실행, 합성)은 Stage 02부터 구현됐고, 시스템은 Stage 28까지 자랐습니다. 병렬 DAG 실행, 실패 시 재계획, 목표 달성 검증이 지금 모두 동작합니다."
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
        h: { en: "What's done, and what's next.", ko: "된 것과 다음이 분명합니다." },
        body: {
          en: "Stages 00–28 are done — through parallel execution, goal verification, and a single-conversation coordinator. Stage 29 hard-gates completion behind an independent benchmark, so a goal can't be self-certified as done.",
          ko: "Stage 00–28 완료 — 병렬 실행, 목표 검증, 단일 대화 코디네이터까지. Stage 29는 독립 벤치마크로 완료를 하드 게이트해서, 목표를 스스로 '완료'라 단정하지 못하게 합니다."
        }
      }
    ],
    quote: {
      en: "An AI company should run on leverage, not headcount.",
      ko: "AI 회사는 인원이 아니라 레버리지로 굴러가야 합니다."
    }
  },
  itineva: {
    accent: "teal",
    status: "candidate",
    num: "02",
    name: { en: "Itineva", ko: "Itineva" },
    tagline: {
      en: "Travel plans built like websites: versioned, shared, alive.",
      ko: "웹사이트처럼 만드는 여행 계획. 버전이 관리되고, 공유되고, 계속 살아 있습니다."
    },
    lede: {
      en: "Itineva turns destination, dates, travelers, and taste into a shareable trip page — a full day-by-day plan filled with real places. Each day is checked so it's doable before you share it. In development.",
      ko: "Itineva는 여행지·일정·동행·취향을 공유 가능한 여행 페이지로 바꿉니다. 실제 장소로 채운 일자별 계획을 만들고, 공유하기 전에 각 날이 실제로 가능한지 점검합니다. 개발 중입니다."
    },
    metrics: [
      { k: { en: "Inputs", ko: "입력" }, v: { en: "Destination · dates · travelers · taste", ko: "여행지·일정·동행·취향" } },
      { k: { en: "Output", ko: "출력" }, v: { en: "Versioned trip page", ko: "버전 관리 여행 페이지" } },
      { k: { en: "Sharing", ko: "공유" }, v: { en: "One link, always current", ko: "링크 하나, 항상 최신" } },
      { k: { en: "Stage", ko: "단계" }, v: { en: "In development", ko: "개발 중" } }
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
        k: { en: "02 — Built for you, then checked", ko: "02 — 만들고, 다듬어서" },
        h: { en: "A draft worth editing, not a blank page.", ko: "실제 장소로 채운 완성된 계획." },
        body: {
          en: "Itineva drafts the whole trip day by day, fills it with real places, and cleans it up before you ever see it — so you start from a plan worth editing, not a blank page.",
          ko: "여행 전체를 일자별로 짜고, 실제 장소로 채운 뒤 다듬어서 보여줍니다. 빈 페이지가 아니라 손볼 만한 계획에서 시작합니다."
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
        h: { en: "The plan is built in passes, not one shot.", ko: "계획은 단발이 아니라 여러 단계로." },
        body: {
          en: "Itineva drafts the trip, then fills and cleans up each day before publish — separate passes, not a single raw generation.",
          ko: "여행의 골격을 잡고, 하루하루를 채우고, 실제 장소 데이터로 보강한 뒤, 게시 전에 정리 단계를 거칩니다. 그래서 단발 생성이 아니라 앞뒤가 맞는 결과가 나옵니다."
        }
      },
      {
        k: { en: "Share evidence", ko: "공유 근거" },
        h: { en: "The shared plan stays versioned and current.", ko: "공유한 계획은 버전으로 관리되고 최신입니다." },
        body: {
          en: "Every trip keeps a version history and one stable share link, so nobody ends up passing around a stale copy in a chat.",
          ko: "여행마다 버전과 변하지 않는 공유 링크가 있습니다. 링크는 그대로, 그 안에서 보이는 버전만 최신으로 바뀝니다."
        }
      },
      {
        k: { en: "Reality evidence", ko: "현실 검증 근거" },
        h: { en: "Days are checked against reality.", ko: "일정은 현실에 맞춰 점검합니다." },
        body: {
          en: "Each day is checked against real transit-time and opening-hours data, not a guess.",
          ko: "장소는 실제 데이터로 보강하고, 각 날은 그 데이터를 기준으로 이동 시간과 운영 시간을 확인합니다."
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
    status: "direction",
    num: "03",
    name: { en: "ModuBoza", ko: "모두보자" },
    tagline: {
      en: "Find something to watch — and pay less for it.",
      ko: "볼 것을 찾고, 더 저렴하게."
    },
    lede: {
      en: "ModuBoza pairs streaming discovery with one simple checkout, so you spend less time hunting and less money watching. It's an independent service, still in development.",
      ko: "모두보자는 볼 만한 것을 찾아, 간단한 결제 하나로 더 저렴하게 즐기도록 돕습니다. 아직 개발 중인 독립 서비스입니다."
    },
    metrics: [
      { k: { en: "Focus", ko: "초점" }, v: { en: "Streaming discovery", ko: "스트리밍 디스커버리" } },
      { k: { en: "Payment", ko: "결제" }, v: { en: "One simple checkout", ko: "간단한 결제 하나" } },
      { k: { en: "Privacy", ko: "프라이버시" }, v: { en: "No content stored", ko: "콘텐츠 저장 안 함" } },
      { k: { en: "Status", ko: "상태" }, v: { en: "In development", ko: "개발 중" } }
    ],
    sections: [
      {
        k: { en: "01 — Start from what to watch", ko: "01 — '무엇을 볼까'에서 시작" },
        h: { en: "Content first, not accounts.", ko: "계정이 아니라 콘텐츠부터." },
        body: {
          en: "ModuBoza starts from what you want — something to watch — and gets you there without the usual friction.",
          ko: "모두보자는 정말 원하는 것, 즉 '볼 것'에서 시작해, 번거로움 없이 거기에 닿도록 돕습니다."
        }
      },
      {
        k: { en: "02 — One simple payment", ko: "02 — 간단한 결제 하나" },
        h: { en: "Clear price, easy to leave.", ko: "명확한 가격, 쉬운 해지." },
        body: {
          en: "The price is shown up front, and leaving is as easy as joining — no dark patterns, no traps.",
          ko: "가격은 미리 보여주고, 해지는 가입만큼 쉽습니다. 다크 패턴도, 함정도 없습니다."
        }
      },
      {
        k: { en: "03 — Built carefully, in the open", ko: "03 — 조심스럽게, 공개적으로" },
        h: { en: "Still in development.", ko: "아직 개발 중입니다." },
        body: {
          en: "ModuBoza is an independent service, not affiliated with the streaming providers it helps you discover.",
          ko: "모두보자는 안내하는 스트리밍 사업자와 제휴하지 않은 독립 서비스입니다. 아직 개발 중입니다."
        }
      }
    ],
    proofs: [
      {
        k: { en: "Value", ko: "가치" },
        h: { en: "Less friction, lower cost.", ko: "덜 번거롭게, 더 저렴하게." },
        body: {
          en: "Make watching what you want easier and cheaper than piecing it together yourself.",
          ko: "생각은 단순합니다. 원하는 걸 보는 일을, 직접 하나하나 챙기는 것보다 더 쉽고 더 저렴하게 만드는 것."
        }
      },
      {
        k: { en: "Trust", ko: "신뢰" },
        h: { en: "We don't store your content.", ko: "콘텐츠를 저장하지 않습니다." },
        body: {
          en: "ModuBoza doesn't keep what you watch, and it's built to respect the providers it works alongside.",
          ko: "모두보자는 무엇을 보는지 저장하지 않고, 함께 일하는 사업자를 존중하도록 설계합니다."
        }
      },
      {
        k: { en: "Posture", ko: "태도" },
        h: { en: "Still in development.", ko: "아직 출시하지 않았습니다." },
        body: {
          en: "It isn't launched yet.",
          ko: "모두보자는 지금 개발 중입니다."
        }
      }
    ],
    quote: {
      en: "Watching by yourself shouldn't be priced like a household.",
      ko: "혼자 보는데 가구 요금을 낼 이유는 없습니다."
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
      en: "ReTalk is a local-first desktop app that restores the KakaoTalk conversations already on your PC. Find and preview what's recoverable, then read, search, and export a clean archive. It also auto-saves expiring photos and videos for free, and chat content stays on the device by default.",
      ko: "리톡은 PC에 이미 남아 있는 카카오톡 대화를 복원하는 로컬 우선 데스크톱 앱입니다. 전체 기록을 열람·검색하고 깔끔한 아카이브로 내보내며, 사라질 사진·동영상은 무료로 자동 보관합니다. 대화 내용은 기기 안에 머뭅니다."
    },
    metrics: [
      { k: { en: "Stance", ko: "포지셔닝" }, v: { en: "Local-first by design", ko: "설계부터 로컬 우선" } },
      { k: { en: "Network", ko: "네트워크" }, v: { en: "Account · license · updates", ko: "계정·라이선스·업데이트" } },
      { k: { en: "Platform", ko: "플랫폼" }, v: { en: "Windows 10/11 · macOS 13+", ko: "Windows 10/11 · macOS 13+" } },
      { k: { en: "Stage", ko: "단계" }, v: { en: "Launching soon", ko: "출시 준비 중" } }
    ],
    sections: [
      {
        k: { en: "01 — A restoration tool, not an analyzer", ko: "01 — 분석 도구가 아니라 복원 도구" },
        h: { en: "Restore, read, search, export.", ko: "복원하고, 읽고, 검색하고, 내보냅니다." },
        body: {
          en: "ReTalk reads the KakaoTalk data already on the PC and rebuilds it into rooms you can read again, a history you can search across rooms, and an archive you can export as CSV, HTML, JSON, ZIP, or PDF. No AI summary, no cloud sync.",
          ko: "리톡은 PC에 이미 있는 카카오톡 데이터를 읽습니다. 다시 읽을 수 있는 방별 대화, 여러 방을 가로지르는 검색, CSV·HTML·JSON·ZIP·PDF로 내보낼 수 있는 아카이브로 되살립니다. AI 요약도, 클라우드 동기화도 없습니다."
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
          en: "Download, preview counts, latest-message preview, and free media auto-backup need no payment. A one-time ₩49,000 pass — permanent, for one KakaoTalk profile — unlocks full reading, cross-room and semantic search, and export. Chat content, names, and media never leave the device.",
          ko: "다운로드, 복원 가능 분량 확인, 최신 대화 미리보기, 무료 미디어 자동 보관은 결제가 필요 없습니다. ₩49,000 1회 결제 이용권(영구·카카오톡 프로필 1개)으로 전체 열람, 통합·의미 검색, 내보내기가 열립니다. 대화 내용·이름·미디어는 기기를 떠나지 않습니다."
        }
      }
    ],
    proofs: [
      {
        k: { en: "Local evidence", ko: "로컬 근거" },
        h: { en: "Personal content stays on-device by default.", ko: "개인 콘텐츠는 기기를 떠나지 않습니다." },
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
        h: { en: "No login. No guaranteed recovery.", ko: "근거 없는 보장은 하지 않습니다." },
        body: {
          en: "ReTalk needs no KakaoTalk login and no Kakao ID or password — it only needs that KakaoTalk to have been used on this PC, so local records exist. It restores only the segments the PC holds and does not guarantee recovery of deleted or expired content. It is an independent tool, not affiliated with KakaoTalk.",
          ko: "리톡은 카카오톡 로그인도, 카카오 아이디·비밀번호도 필요 없습니다. 그 PC에서 카카오톡을 써 온 기록만 있으면 됩니다. PC에 남아 있는 구간만 복원하고, 삭제·만료된 내용의 복구는 보장하지 않습니다. 카카오와 제휴하지 않은 독립 도구입니다."
        }
      }
    ],
    quote: {
      en: "A conversation history is part of who you are. It should live close to you.",
      ko: "대화 기록도 당신의 일부입니다. 당신 가까이에 있어야 합니다."
    }
  }
};
