import { cookies, headers } from "next/headers";
import { LANG_COOKIE, LANG_SOURCE_COOKIE, MANUAL_LANG_SOURCE } from "./lang-constants";
import type { Lang } from "./site-data";

export function normalizeLang(value: string | undefined | null): Lang | null {
  return value === "ko" || value === "en" ? value : null;
}

export function detectLangFromAcceptLanguage(value: string | undefined | null): Lang {
  if (!value) return "en";

  const preferred = value
    .split(",")
    .map((entry, index) => {
      const [rawTag, ...params] = entry.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const q = qParam ? Number(qParam.trim().slice(2)) : 1;
      return {
        index,
        q: Number.isFinite(q) ? q : 0,
        primary: rawTag.trim().toLowerCase().split("-")[0]
      };
    })
    .filter((entry) => entry.primary && entry.primary !== "*")
    .sort((a, b) => b.q - a.q || a.index - b.index)[0];

  return preferred?.primary === "ko" ? "ko" : "en";
}

export async function getInitialLang(): Promise<Lang> {
  const [cookieStore, headerStore] = await Promise.all([cookies(), headers()]);
  const explicitLang = normalizeLang(cookieStore.get(LANG_COOKIE)?.value);
  const langSource = cookieStore.get(LANG_SOURCE_COOKIE)?.value;

  if (explicitLang && langSource === MANUAL_LANG_SOURCE) return explicitLang;

  return detectLangFromAcceptLanguage(headerStore.get("accept-language"));
}
