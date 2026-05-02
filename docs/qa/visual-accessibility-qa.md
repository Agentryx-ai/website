# WEB-9 Visual and Accessibility QA

Date: 2026-05-03 KST

## Scope

Public routes tested:

- `/`
- `/about`
- `/press`
- `/thesis`
- `/products/agentryx`
- `/products/itineva`
- `/products/moduboza`
- `/products/retalk`

Viewports tested:

- Desktop: `1440x900`
- Tablet landscape: `1024x768`
- Tablet portrait: `768x1024`
- Mobile: `390x844`

Primary inspection targets:

- Header/nav layout and sticky behavior
- Language toggle state, `html lang`, and persistence
- Product cards on the homepage
- Product detail metrics, proof blocks, quote blocks, and previous/next product links
- Contact surfaces on `/`, `/about`, `/press`, and product pages
- Footer layout across desktop and mobile
- Text overlap, clipping, horizontal overflow, and obvious responsive breaks
- Basic accessibility signals: focus visibility, landmarks, headings, control names, obvious contrast issues, and language behavior

## Commands Used

```bash
npm run build
npm run smoke
node scripts/start-standalone.mjs 4173
PLAYWRIGHT_BASE_URL=http://127.0.0.1:4173 npx playwright test -c tests/playwright.config.ts --reporter=list --workers=1
PLAYWRIGHT_BASE_URL=http://127.0.0.1:3010 npm run smoke
npx playwright test -c tests/playwright.config.ts --list
curl -I http://127.0.0.1:4173/
curl -s -o /tmp/web9-status.txt -w '%{http_code} %{url_effective}\n' http://127.0.0.1:4173/about
```

Additional Playwright browser checks were run against `http://127.0.0.1:4173` to capture desktop/mobile screenshots, inspect DOM layout metrics, tab focus order, landmark/headings, visible link/button names, overflow, and language-toggle behavior.

Notes:

- `npm run build` passed.
- The first `npm run smoke` attempt during QA timed out after about two minutes without useful reporter output. The server on `127.0.0.1:4173` was still available afterward.
- Starting `node scripts/start-standalone.mjs 4173` directly then reported `EADDRINUSE`, confirming an existing server was already bound to that port.
- Re-running the Playwright suite with `PLAYWRIGHT_BASE_URL=http://127.0.0.1:4173` passed: 11 tests passed in 9.2s.
- After the standalone smoke script was corrected, `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3010 npm run smoke` passed: 11 tests passed in 10.7s.

## Pass Observations

- All eight required routes returned `200` in browser QA and rendered non-empty page content.
- Desktop, tablet, and mobile sweeps found no page-level horizontal overflow. `scrollWidth` matched the client width in the tested viewports.
- Header/nav remained visible and usable across viewports. On mobile the header reflows into brand, nav row, and language toggle without overlapping content.
- Product cards on `/` stack cleanly on mobile and keep product status, title, description, and actions inside card boundaries.
- Product detail pages keep metrics, proof cards, quotes, and previous/next product navigation readable at both desktop and mobile widths.
- Contact rows and CTA surfaces reflow without clipping. Email links remained visible and reachable on `/about`, `/press`, and footer/contact areas.
- Footer layout uses four columns on desktop and a two-column mobile layout; no overlap or truncation was observed.
- Each route exposes the expected semantic landmarks: `header`, `nav` with `aria-label="Primary"`, `main`, and `footer`.
- Each route has exactly one `h1`, followed by visible section headings.
- Visible links and buttons had accessible text or labels in the automated sweep; no unnamed visible controls were found.
- Keyboard focus was visible through the initial tab order on every tested route and viewport, including brand, primary nav links, `EN`/`KO` buttons, product/contact links, and page CTAs.
- Language toggle behavior passed manual and automated checks:
  - Initial English state showed `html lang="en"` and `EN` with `aria-pressed="true"`.
  - Clicking `KO` updated `html lang` and `body[data-lang]` to `ko`.
  - The selected language persisted after navigating from `/` to `/products/retalk`.
  - The existing Playwright language negotiation and persistence tests passed.

## Fail / Advisory Observations

No blocking visual or accessibility defect was found in the tested routes.

Advisory items:

- The inactive nav labels use muted gray text at a small size. Automated contrast sampling estimated this around the high-3:1 range against the light header background, which is below the usual 4.5:1 target for normal text. This is consistent across desktop and mobile.
- The muted phrase in the homepage hero headline, such as `the way an AI company should run itself`, is large display text and visually intentional, but automated sampling put it slightly below the 3:1 large-text contrast target. This should be reviewed if strict WCAG AA contrast is required for display text.
- Decorative separators in product breadcrumbs are intentionally low contrast. They should remain non-essential visual separators; do not rely on them as the only indication of hierarchy.
- The focus indicator is the browser default outline. It is visible, but a custom focus style could make keyboard state clearer and more consistent with the brand.
- The first `npm run smoke` command timed out during QA because an already-running server/port state confused the web-server startup path. The final integrated smoke run passed after the standalone server script was corrected.

## Remaining Risks

- This pass covered Chromium only, matching the current Playwright project. Safari/WebKit and Firefox were not tested.
- The contrast checks were basic computed-style sampling plus visual review, not a full axe/WCAG audit.
- Screenshots were captured for desktop and mobile route review, but no visual regression baselines exist for automated comparison.
- Dynamic browser states beyond language toggle, hover, and keyboard focus were not exhaustively tested.
- Korean copy was spot-checked through the language toggle and `/products/retalk`; every route was not visually reviewed in Korean at every viewport.

## Follow-Up Recommendations

- Add a small accessibility regression check for unnamed controls, one `h1` per route, landmark presence, `html lang`, and horizontal overflow.
- Consider adding an axe-based CI check for public routes if strict accessibility acceptance is expected.
- Review the muted nav and hero display contrast against the team accessibility target; if WCAG AA is required, increase contrast for inactive nav labels and homepage muted headline text.
- Add Playwright screenshot baselines for the eight public routes at desktop and mobile sizes once the design is considered stable.
- Keep an eye on Playwright web-server startup behavior in CI; the final local integrated run passed, but port reuse can still hide stale-server problems during manual QA.

## Completion Assessment

WEB-9 can be considered done for the requested documentation-only scope. The required routes and viewports were checked, the existing build and Playwright setup were used, no blocking UI defect was found, and the remaining risks are documented above.
