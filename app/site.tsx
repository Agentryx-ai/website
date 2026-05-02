"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Lang,
  PRODUCT_ORDER,
  aboutStories,
  i18n,
  notes,
  pressRows,
  principles,
  productDetails,
  products,
  text
} from "./site-data";

type Page = "home" | "about" | "thesis" | "press";
const LANG_STORAGE_KEY = "ax_lang";
const CONTACT_EMAIL = "merozemory@gmail.com";

function isLang(value: string | null | undefined): value is Lang {
  return value === "ko" || value === "en";
}

function readCookieLang(): Lang | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)ax_lang=(en|ko)(?:;|$)/);
  return isLang(match?.[1]) ? match[1] : null;
}

function readInitialLang(fallback: Lang): Lang {
  if (typeof window === "undefined") return fallback;
  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  return isLang(stored) ? stored : readCookieLang() ?? fallback;
}

function persistLang(lang: Lang) {
  if (typeof document === "undefined") return;
  window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.cookie = `${LANG_STORAGE_KEY}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

function useLang(initialLang: Lang) {
  const [lang, setLangState] = useState<Lang>(() => readInitialLang(initialLang));

  useEffect(() => {
    setLangState(readInitialLang(initialLang));
  }, [initialLang]);

  useEffect(() => {
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;
    persistLang(lang);
  }, [lang]);

  const setLang = useCallback((nextLang: Lang) => {
    persistLang(nextLang);
    setLangState(nextLang);
  }, []);

  return {
    lang,
    setLang,
    t: i18n[lang]
  };
}

function statusLabel(status: string, lang: Lang) {
  const labels = {
    core: i18n[lang].statusCore,
    candidate: i18n[lang].statusCandidate,
    poc: i18n[lang].statusPoc,
    direction: i18n[lang].statusDirection
  };
  return labels[status as keyof typeof labels] || status;
}

function BrandMark() {
  return (
    <Link href="/" className="brand" aria-label="Agentryx AI home">
      <span className="brand-glyph" aria-hidden="true" />
      <span>Agentryx AI</span>
    </Link>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </button>
      <button type="button" aria-pressed={lang === "ko"} onClick={() => setLang("ko")}>
        KO
      </button>
    </div>
  );
}

function Topbar({
  active,
  lang,
  setLang,
  t
}: {
  active: Page | "products";
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof i18n.en;
}) {
  const items = [
    { key: "products", href: "/#products", label: t.navProducts },
    { key: "thesis", href: "/thesis", label: t.navThesis },
    { key: "about", href: "/about", label: t.navAbout },
    { key: "press", href: "/press", label: t.navPress }
  ];
  return (
    <header className="topbar">
      <div className="shell topbar-inner">
        <BrandMark />
        <nav className="nav" aria-label="Primary">
          {items.map((item) => (
            <Link key={item.key} href={item.href} aria-current={active === item.key ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-end">
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  );
}

function Footer({ lang, t }: { lang: Lang; t: typeof i18n.en }) {
  return (
    <footer className="foot">
      <div className="shell foot-inner">
        <div>
          <div className="brand foot-brand">
            <span className="brand-glyph" aria-hidden="true" />
            <span>Agentryx AI</span>
          </div>
          <p className="foot-tagline">{t.footerTagline}</p>
        </div>
        <div>
          <h4>Studio</h4>
          <ul>
            <li><Link href="/about">{t.navAbout}</Link></li>
            <li><Link href="/thesis">{t.navThesis}</Link></li>
            <li><Link href="/press">{t.navPress}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t.navProducts}</h4>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>{text(product.name, lang)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t.navContact}</h4>
          <ul>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="shell foot-meta">
        <span>© {new Date().getFullYear()} {t.footerRights}</span>
        <span>v1.0</span>
      </div>
    </footer>
  );
}

function Hero({ lang, t }: { lang: Lang; t: typeof i18n.en }) {
  return (
    <section className="hero shell" id="top">
      <div className="label">
        <span className="dot" />
        <span>{t.homeLabel}</span>
      </div>
      <h1>
        <span>{t.homeH1A}</span> <span className="accent">{t.homeH1B}</span>{" "}
        <span className="muted">{t.homeH1C}</span>
      </h1>
      <div className="hero-grid">
        <div>
          <p className="hero-lede">{t.homeLede}</p>
          <div className="hero-actions">
            <Link className="btn primary" href="#products">
              {t.seeProducts} <span className="arrow">→</span>
            </Link>
            <Link className="btn" href="/thesis">
              {t.readThesis}
            </Link>
          </div>
        </div>
        <div className="hero-aside" aria-label="Studio facts">
          <div className="stat-row"><span>Founded</span><span>2025</span></div>
          <div className="stat-row"><span>Team</span><span>{lang === "ko" ? "운영자 1인 + 에이전트" : "1 operator + agents"}</span></div>
          <div className="stat-row"><span>HQ</span><span>{lang === "ko" ? "서울" : "Seoul, KR"}</span></div>
          <div className="stat-row"><span>Stack</span><span>Codex · Agentryx</span></div>
        </div>
      </div>
    </section>
  );
}

function ProductCards({ lang, t }: { lang: Lang; t: typeof i18n.en }) {
  return (
    <section className="section shell" id="products">
      <div className="section-head">
        <div>
          <div className="num">{t.productsNum}</div>
          <h2>{t.productsHeading}</h2>
        </div>
        <p className="meta">{t.productsMeta}</p>
      </div>
      <div className="cards">
        {products.map((product) => (
          <article key={product.id} className="card" data-accent={product.accent}>
            <div className="card-top">
              <span className="num">{product.num}</span>
              <span className="status">{statusLabel(product.status, lang)}</span>
            </div>
            <div className="card-name">{text(product.name, lang)}</div>
            <p className="card-deck">{text(product.deck, lang)}</p>
            <div className="card-bottom">
              <Link className="card-action" href={`/products/${product.id}`}>
                <span>{t.open}</span>
                <span className="open">→</span>
              </Link>
              {"siteUrl" in product && product.siteUrl ? (
                <a className="card-action" href={product.siteUrl} target="_blank" rel="noreferrer">
                  <span>{t.visitSite}</span>
                  <span className="open">↗</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Home({ lang, t }: { lang: Lang; t: typeof i18n.en }) {
  return (
    <main>
      <Hero lang={lang} t={t} />
      <ProductCards lang={lang} t={t} />
      <section className="section shell" id="thesis-preview">
        <div className="section-head">
          <div>
            <div className="num">{t.thesisNum}</div>
            <h2>{t.thesisHeading}</h2>
          </div>
          <p className="meta">{t.thesisMeta}</p>
        </div>
        <div className="thesis-grid">
          {principles.map((principle) => (
            <article className="principle" key={text(principle.key, "en")}>
              <div className="roman">{text(principle.key, lang)}</div>
              <h3>{text(principle.h, lang)}</h3>
              <p>{text(principle.p, lang)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section shell">
        <div className="section-head">
          <div>
            <div className="num">{t.notesNum}</div>
            <h2>{t.notesHeading}</h2>
          </div>
        </div>
        <div className="notes">
          {notes.map((note) => (
            <article className="note" key={text(note.k, "en")}>
              <div className="k">{text(note.k, lang)}</div>
              <h4>{text(note.h, lang)}</h4>
              <p>{text(note.p, lang)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="shell">
        <div className="cta">
          <div>
            <span className="eyebrow"><span className="dot" /> {t.ctaEyebrow}</span>
            <h2>{t.ctaHeading}</h2>
            <div className="actions">
              <Link className="btn invert primary" href="/press#contact">
                {t.contact} <span className="arrow">→</span>
              </Link>
              <Link className="btn invert" href="/thesis">{t.readThesis}</Link>
            </div>
          </div>
          <p>{t.ctaBody}</p>
        </div>
      </section>
    </main>
  );
}

function AboutPageView({ lang, t }: { lang: Lang; t: typeof i18n.en }) {
  return (
    <main>
      <section className="about-hero shell">
        <div className="label"><span className="dot" /> <span>{t.aboutLabel}</span></div>
        <h1><span>{t.aboutH1A}</span> <span className="accent">{t.aboutH1B}</span></h1>
        <div className="about-grid">
          <p className="lede">{t.aboutLede}</p>
          <div className="aside">
            <div className="row"><span>Role</span><span>{lang === "ko" ? "운영자 + 디자이너 + 리뷰어" : "Operator + designer + reviewer"}</span></div>
            <div className="row"><span>Based</span><span>{lang === "ko" ? "서울" : "Seoul, Korea"}</span></div>
            <div className="row"><span>Languages</span><span>{lang === "ko" ? "한국어 · English" : "English, Korean"}</span></div>
            <div className="row"><span>Contact</span><span>{CONTACT_EMAIL}</span></div>
          </div>
        </div>
      </section>
      <StoryList lang={lang} stories={aboutStories} />
      <ContactBlock lang={lang} t={t} title={lang === "ko" ? "분기마다 소수의 파트너만 받습니다." : "We take a small number of partners each quarter."} />
    </main>
  );
}

function ThesisPageView({ lang, t }: { lang: Lang; t: typeof i18n.en }) {
  return (
    <main>
      <section className="about-hero shell">
        <div className="label"><span className="dot" /> <span>{t.thesisLabel}</span></div>
        <h1><span>{t.thesisH1A}</span> <span className="accent">{t.thesisH1B}</span></h1>
        <div className="about-grid">
          <p className="lede">{t.thesisLede}</p>
          <div className="aside">
            <div className="row"><span>Audience</span><span>{lang === "ko" ? "파트너 · 고객 · 채용" : "Partners, customers, hires"}</span></div>
            <div className="row"><span>Cadence</span><span>{lang === "ko" ? "분기마다 검토" : "Reviewed quarterly"}</span></div>
            <div className="row"><span>Last review</span><span>2026.05</span></div>
          </div>
        </div>
      </section>
      <section className="shell detail-spacer">
        <div className="section-head">
          <div>
            <div className="num">{lang === "ko" ? "네 가지 원칙" : "The four principles"}</div>
            <h2>{lang === "ko" ? "본질을 잃지 않고 여러 제품을 운영하는 방법." : "How a small studio runs many products without losing the plot."}</h2>
          </div>
          <p className="meta">{t.thesisMeta}</p>
        </div>
        <div className="thesis-list">
          {principles.map((principle) => (
            <div className="thesis-row" key={text(principle.key, "en")}>
              <div className="roman">{text(principle.key, lang)}</div>
              <h3>{text(principle.h, lang)}</h3>
              <p>{text(principle.long, lang)}</p>
            </div>
          ))}
        </div>
      </section>
      <NextBlock t={t} />
    </main>
  );
}

function PressPageView({ lang, t }: { lang: Lang; t: typeof i18n.en }) {
  return (
    <main>
      <section className="about-hero shell">
        <div className="label"><span className="dot" /> <span>{t.pressLabel}</span></div>
        <h1>{t.pressH1}</h1>
        <div className="about-grid">
          <p className="lede">{t.pressLede}</p>
          <div className="aside">
            <div className="row"><span>Response time</span><span>≤ 2 business days</span></div>
            <div className="row"><span>Languages</span><span>English, Korean</span></div>
            <div className="row"><span>Email</span><span>{CONTACT_EMAIL}</span></div>
          </div>
        </div>
      </section>
      <section className="shell detail-spacer">
        <div className="section-head">
          <div>
            <div className="num">{lang === "ko" ? "프레스 문의" : "Press inquiries"}</div>
            <h2>{lang === "ko" ? "기록에 남길 수 있는 이야기." : "What we will talk about, on record."}</h2>
          </div>
        </div>
        <div className="thesis-list">
          {pressRows.map((row, index) => (
            <div className="thesis-row" key={text(row.k, "en")}>
              <div className="roman">{String(index + 1).padStart(2, "0")}</div>
              <h3>{text(row.k, lang)}</h3>
              <p>{text(row.v, lang)}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactBlock lang={lang} t={t} title={lang === "ko" ? "직접 닿는 채널." : "Direct lines."} />
    </main>
  );
}

function StoryList({ lang, stories }: { lang: Lang; stories: typeof aboutStories }) {
  return (
    <section className="shell detail-spacer">
      <div className="section-head">
        <div>
          <div className="num">{lang === "ko" ? "운영 방식" : "How we work"}</div>
          <h2>{lang === "ko" ? "지금의 도구에 맞춘 크기의 스튜디오." : "A studio sized for the tools we have."}</h2>
        </div>
        <p className="meta">{lang === "ko" ? "운영을 떠받치는 세 가지 약속." : "Three commitments behind the operation."}</p>
      </div>
      <div className="thesis-list">
        {stories.map((story, index) => (
          <div className="thesis-row" key={text(story.h, "en")}>
            <div className="roman">{String(index + 1).padStart(2, "0")}</div>
            <h3>{text(story.h, lang)}</h3>
            <p>{text(story.p, lang)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactBlock({ lang, t, title }: { lang: Lang; t: typeof i18n.en; title: string }) {
  return (
    <section id="contact" className="shell">
      <div className="contact">
        <div>
          <div className="k">{t.navContact}</div>
          <h2>{title}</h2>
        </div>
        <div className="contact-list">
          <a className="row" href={`mailto:${CONTACT_EMAIL}`}>
            <span className="label">{lang === "ko" ? "이메일" : "Email"}</span>
            <span className="value">{CONTACT_EMAIL}</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function NextBlock({ t }: { t: typeof i18n.en }) {
  return (
    <section className="shell">
      <div className="contact">
        <div>
          <div className="k">{t.next}</div>
          <h2>{t.whereNext}</h2>
        </div>
        <div className="contact-list">
          <Link className="row" href="/#products"><span className="label">01</span><span className="value">{t.navProducts}</span><span className="arrow">→</span></Link>
          <Link className="row" href="/about"><span className="label">02</span><span className="value">{t.navAbout}</span><span className="arrow">→</span></Link>
          <Link className="row" href="/press#contact"><span className="label">03</span><span className="value">{t.navContact}</span><span className="arrow">→</span></Link>
        </div>
      </div>
    </section>
  );
}

export function SitePage({ page, initialLang }: { page: Page; initialLang: Lang }) {
  const { lang, setLang, t } = useLang(initialLang);
  const content = useMemo(() => {
    if (page === "about") return <AboutPageView lang={lang} t={t} />;
    if (page === "thesis") return <ThesisPageView lang={lang} t={t} />;
    if (page === "press") return <PressPageView lang={lang} t={t} />;
    return <Home lang={lang} t={t} />;
  }, [page, lang, t]);

  return (
    <>
      <Topbar active={page} lang={lang} setLang={setLang} t={t} />
      {content}
      <Footer lang={lang} t={t} />
    </>
  );
}

export function ProductDetailPage({ slug, initialLang }: { slug: string; initialLang: Lang }) {
  const { lang, setLang, t } = useLang(initialLang);
  const detail = productDetails[slug];
  const index = PRODUCT_ORDER.indexOf(slug);
  const prevSlug = PRODUCT_ORDER[(index - 1 + PRODUCT_ORDER.length) % PRODUCT_ORDER.length];
  const nextSlug = PRODUCT_ORDER[(index + 1) % PRODUCT_ORDER.length];
  const prev = productDetails[prevSlug];
  const next = productDetails[nextSlug];

  useEffect(() => {
    document.body.dataset.accent = detail.accent;
    return () => {
      document.body.removeAttribute("data-accent");
    };
  }, [detail.accent]);

  return (
    <>
      <Topbar active="products" lang={lang} setLang={setLang} t={t} />
      <main>
        <section className="detail-hero">
          <div className="shell">
            <div className="top-row">
              <span className="crumb"><Link href="/">Agentryx AI</Link></span>
              <span className="sep">/</span>
              <span className="crumb"><Link href="/#products">{t.navProducts}</Link></span>
              <span className="sep">/</span>
              <span className="num">{detail.num}</span>
            </div>
            <h1>{text(detail.name, lang)}</h1>
            <p className="tagline">{text(detail.tagline, lang)}</p>
            <p className="lede">{text(detail.lede, lang)}</p>
            <div className="actions">
              {detail.siteUrl ? (
                <a className="btn primary" href={detail.siteUrl} target="_blank" rel="noreferrer">
                  {t.visitSite} <span className="arrow">↗</span>
                </a>
              ) : (
                <Link className="btn primary" href="/press#contact">{t.contact} <span className="arrow">→</span></Link>
              )}
              {detail.siteUrl ? <Link className="btn" href="/press#contact">{t.contact}</Link> : null}
              <Link className="btn" href="/thesis">{t.readThesis}</Link>
              <span className="pill" data-status={detail.status}>{statusLabel(detail.status, lang)}</span>
            </div>
            <div className="metrics">
              {detail.metrics.map((metric) => (
                <div className="metric" key={text(metric.k, "en")}>
                  <div className="k">{text(metric.k, lang)}</div>
                  <div className="v">{text(metric.v, lang)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="shell detail-sections">
          {detail.sections.map((section) => (
            <div className="detail-section" key={text(section.k, "en")}>
              <div className="lead-col">
                <div className="k">{text(section.k, lang)}</div>
                <h2>{text(section.h, lang)}</h2>
              </div>
              <div className="body-col">
                <p>{text(section.body, lang)}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="detail-quote">
          <div className="shell">
            <p className="q">{text(detail.quote, lang)}</p>
          </div>
        </section>
        <section className="shell">
          <div className="detail-foot-nav">
            <Link className="prev" href={`/products/${prevSlug}`}>
              <span className="k">← {t.navProducts} · {prev.num}</span>
              <span className="name">{text(prev.name, lang)}</span>
            </Link>
            <Link className="next" href={`/products/${nextSlug}`}>
              <span className="k">{t.navProducts} · {next.num} →</span>
              <span className="name">{text(next.name, lang)}</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
