import { cookies } from "next/headers";
import type { Lang } from "./site-data";

export const LANG_COOKIE = "ax_lang";

export function normalizeLang(value: string | undefined | null): Lang | null {
  return value === "ko" || value === "en" ? value : null;
}

export async function getInitialLang(): Promise<Lang> {
  const cookieStore = await cookies();
  return normalizeLang(cookieStore.get(LANG_COOKIE)?.value) ?? "en";
}
