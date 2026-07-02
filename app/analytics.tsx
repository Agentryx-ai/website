"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Lang = "en" | "ko";
type AnalyticsProperties = Record<string, string | null>;

const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;

function currentLang(): Lang {
  return document.documentElement.lang === "ko" ? "ko" : "en";
}

function pathOnly() {
  return window.location.pathname || "/";
}

function stripLocalePrefix(route: string) {
  if (route === "/ko") return "/";
  if (route.startsWith("/ko/")) return route.slice("/ko".length);
  return route;
}

function routeGroup(route: string) {
  const path = stripLocalePrefix(route);
  if (path === "/") return "home";
  if (path.startsWith("/products/")) return "product";
  if (path === "/thesis") return "thesis";
  if (path === "/about") return "about";
  if (path === "/press") return "press";
  return "other";
}

function productSlug(route: string) {
  const match = stripLocalePrefix(route).match(/^\/products\/([^/]+)$/);
  return match ? match[1] : null;
}

function viewportClass() {
  const width = window.innerWidth;
  if (!Number.isFinite(width)) return "unknown";
  if (width < 768) return "mobile";
  if (width < 1100) return "tablet";
  return "desktop";
}

function referrerType() {
  if (!document.referrer) return "direct";

  try {
    const referrer = new URL(document.referrer);
    if (referrer.origin === window.location.origin) return "internal";

    const host = referrer.hostname.toLowerCase();
    if (/(^|\.)google\.|(^|\.)bing\.|(^|\.)naver\.|(^|\.)daum\.|(^|\.)yahoo\.|duckduckgo\.com$/.test(host)) {
      return "search";
    }
    return "external";
  } catch {
    return "unknown";
  }
}

function destinationDomain(element: HTMLElement) {
  const anchor = element.closest("a[href]");
  const href = anchor?.getAttribute("href");
  if (!href || href.startsWith("mailto:")) return null;

  try {
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin ? null : url.hostname;
  } catch {
    return null;
  }
}

function sendEvent(eventName: string, properties: AnalyticsProperties = {}) {
  if (!endpoint) return;

  const route = pathOnly();
  const payload = {
    event_name: eventName,
    event_version: "1.0",
    occurred_at: new Date().toISOString(),
    route,
    locale: currentLang(),
    referrer_type: referrerType(),
    viewport_class: viewportClass(),
    ...properties
  };
  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
    return;
  }

  void fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true
  });
}

export function Analytics() {
  const pathname = usePathname();
  const thesisReadSent = useRef(false);

  useEffect(() => {
    thesisReadSent.current = false;
    const route = pathname || "/";

    sendEvent("route_viewed", {
      route_group: routeGroup(route),
      product_slug: productSlug(route)
    });
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-analytics-event]") : null;
      if (!target) return;

      const eventName = target.dataset.analyticsEvent;
      if (!eventName) return;

      const sourceRoute = pathOnly();
      if (eventName === "product_card_opened") {
        sendEvent(eventName, {
          product_slug: target.dataset.analyticsProductSlug || null,
          product_status: target.dataset.analyticsProductStatus || "unknown",
          source_route: sourceRoute,
          open_type: target.dataset.analyticsOpenType || "detail_route"
        });
        return;
      }

      if (eventName === "external_site_visited") {
        sendEvent(eventName, {
          destination_type: target.dataset.analyticsDestinationType || "other",
          destination_domain: destinationDomain(target),
          product_slug: target.dataset.analyticsProductSlug || null,
          source_route: sourceRoute
        });
        return;
      }

      if (eventName === "contact_clicked") {
        sendEvent(eventName, {
          contact_type: target.dataset.analyticsContactType || "other",
          source_route: sourceRoute,
          destination_domain: destinationDomain(target)
        });
        return;
      }

      if (eventName === "language_toggled") {
        sendEvent(eventName, {
          from_locale: target.dataset.analyticsCurrentLocale || currentLang(),
          to_locale: target.dataset.analyticsToLocale || currentLang(),
          source_route: sourceRoute
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (pathname !== "/thesis" && pathname !== "/ko/thesis") return;

    function emitThesisRead(readSignal: "scroll_50" | "active_30s") {
      if (thesisReadSent.current) return;
      thesisReadSent.current = true;
      sendEvent("thesis_read", {
        route: "/thesis",
        read_signal: readSignal,
        content_version: "2026-05-03"
      });
    }

    const timer = window.setTimeout(() => emitThesisRead("active_30s"), 30_000);
    function handleScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= 0.5) emitThesisRead("scroll_50");
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
