import { expect, test } from "@playwright/test";

const routes = [
  { path: "/", text: "Agentryx AI" },
  { path: "/about", text: "A small studio" },
  { path: "/press", text: "Press, contact" },
  { path: "/thesis", text: "Four principles" },
  { path: "/products/agentryx", text: "Agentryx" },
  { path: "/products/itineva", text: "Itineva" },
  { path: "/products/moduboza", text: "ModuBoza" },
  { path: "/products/retalk", text: "ReTalk" }
];

test.describe("route smoke", () => {
  for (const route of routes) {
    test(`${route.path} renders`, async ({ page }) => {
      const response = await page.goto(route.path);

      expect(response?.status(), route.path).toBe(200);
      await expect(page.locator("body")).toContainText(route.text);
      await expect(page.locator(".topbar")).toContainText("Agentryx AI");
      await expect(page.locator("html")).toHaveAttribute("lang", /^(en|ko)$/);
    });
  }
});

test.describe("language negotiation", () => {
  test("Korean Accept-Language renders Korean by default", async ({ browser }) => {
    const context = await browser.newContext({
      locale: "ko-KR",
      extraHTTPHeaders: {
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.7,en;q=0.6"
      }
    });
    const page = await context.newPage();

    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "ko");
    await expect(page.getByRole("button", { name: "KO" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("main")).toContainText("AI 제품을");
    await expect(page.locator("main")).toContainText("제품 보기");

    await context.close();
  });

  test("non-Korean Accept-Language renders English by default", async ({ browser }) => {
    const context = await browser.newContext({
      locale: "en-US",
      extraHTTPHeaders: {
        "Accept-Language": "en-US,en;q=0.9,ja;q=0.5"
      }
    });
    const page = await context.newPage();

    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("button", { name: "EN" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("main")).toContainText("We run");
    await expect(page.locator("main")).toContainText("See products");

    await context.close();
  });
});

test.describe("language toggle persistence", () => {
  test("manual language choice persists across navigation", async ({ browser }) => {
    const context = await browser.newContext({
      locale: "en-US",
      extraHTTPHeaders: {
        "Accept-Language": "en-US,en;q=0.9"
      }
    });
    const page = await context.newPage();

    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    await page.getByRole("button", { name: "KO" }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "ko");
    await expect(page.locator("main")).toContainText("제품 보기");

    await page.getByLabel("Primary").getByRole("link", { name: "회사" }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "ko");
    await expect(page.locator("main")).toContainText("작은 스튜디오");

    await page.goto("/products/retalk");
    await expect(page.locator("html")).toHaveAttribute("lang", "ko");
    await expect(page.locator("main")).toContainText("리톡");

    await context.close();
  });
});
