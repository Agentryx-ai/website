import { defineConfig, devices } from "@playwright/test";

const repoRoot = process.cwd();
const explicitBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const port = Number(process.env.PORT || (explicitBaseURL ? new URL(explicitBaseURL).port : 4173));
const baseURL = explicitBaseURL || `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: ".",
  timeout: 30_000,
  expect: {
    timeout: 10_000
  },
  fullyParallel: true,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  use: {
    baseURL,
    trace: "on-first-retry"
  },
  webServer: {
    command: `node scripts/start-standalone.mjs ${port}`,
    cwd: repoRoot,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});
