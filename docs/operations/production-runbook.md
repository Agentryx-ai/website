# Production Runbook

- Site: `https://agentryx-ai.com`
- Scope: public marketing/product website only
- Owner: solo operator until an on-call rotation exists
- Last reviewed: 2026-05-03

This runbook assumes the site is a static or server-rendered Next.js deployment
behind a managed host such as Vercel, Netlify, Cloudflare Pages, or a similar
platform. Replace the placeholders below when the production host is finalized.

## Host Assumptions

- Production domain: `agentryx-ai.com`
- Canonical URL: `https://agentryx-ai.com`
- Expected redirects:
  - `http://agentryx-ai.com` redirects to HTTPS.
  - `https://www.agentryx-ai.com` redirects to `https://agentryx-ai.com`, unless
    product decides to make `www` canonical.
- Deployment source: protected default branch in the website repository.
- Build command: use the repository's configured package script on the host.
- Runtime: managed Node/Next.js runtime or static output, depending on host
  configuration.
- DNS: registrar or DNS provider should point apex and optional `www` to the
  production host.
- TLS: managed certificate from the host or DNS provider.

Record the chosen production values here before launch:

| Item | Value |
| --- | --- |
| Hosting provider | TBD |
| Production project/app | TBD |
| Deployment dashboard | TBD |
| DNS provider | TBD |
| Domain owner account | TBD |
| Alert destination | TBD |
| Rollback method | Previous successful deployment |

## Deployment Checklist

Before deploying:

1. Confirm the change is intended for the public website.
2. Confirm no secrets, internal URLs, private repo names, or private customer
   information were added to public pages or public docs.
3. Run the normal local checks for the repository.
4. Review the diff for files outside the intended scope.
5. Confirm environment variables in the host are current and are not duplicated
   in source control.
6. Confirm the target branch and deployment environment are production.
7. Confirm a recent successful deployment exists for rollback.

Deploy:

1. Merge or promote the reviewed change using the hosting provider's normal
   production path.
2. Wait for the build to finish.
3. Save the deployment URL, commit SHA, and deployment time in the release note
   or incident log.

After deploy:

1. Run the smoke checks below against the production domain.
2. Check uptime monitor status after the first scheduled probe.
3. Check host build/runtime logs for new errors.
4. If analytics is enabled, confirm route view events appear without personal
   data.

## Smoke Checks

Run these checks after every production deploy and after DNS or host changes.

| Check | Expected result |
| --- | --- |
| `https://agentryx-ai.com` | Loads with HTTP 200. |
| `http://agentryx-ai.com` | Redirects to HTTPS. |
| `https://www.agentryx-ai.com` | Redirects to canonical domain or loads intentionally. |
| Home route | Hero and product list render. |
| Product detail route | At least one product page renders and has no 404. |
| Thesis route | Thesis page renders. |
| About route | About page renders. |
| Press route | Press page renders. |
| Language toggle | Switches language without breaking the route. |
| External product links | Open intended destination in a new tab or current expected behavior. |
| Contact links | Open expected mail, social, or external destination. |
| Mobile viewport | Header, product cards, and primary text do not overlap. |

Suggested manual commands:

```bash
curl -I https://agentryx-ai.com
curl -I http://agentryx-ai.com
curl -I https://www.agentryx-ai.com
```

## Rollback

Rollback is the default response when production is materially broken and a
forward fix is not obvious within 10 minutes.

Rollback triggers:

- Home page, product pages, or thesis page returns 5xx.
- Deployment causes a domain-wide 404.
- Navigation or language switching blocks normal browsing.
- A public page exposes secrets, private links, private data, or claims that
  should not be live.
- Build succeeds but production assets fail to load across multiple browsers.

Rollback steps:

1. Identify the last known good deployment in the hosting dashboard.
2. Promote or redeploy that deployment using the host's rollback feature.
3. Confirm the rollback deployment completed.
4. Run the smoke checks against `https://agentryx-ai.com`.
5. Record:
   - incident start time
   - bad deployment SHA
   - rollback deployment SHA or host deployment ID
   - visible user impact
   - suspected cause
6. Open a follow-up issue for the forward fix.

If the incident is caused by DNS, expired TLS, or account access, rollback may
not help. Move directly to the provider dashboard and restore the last known
working DNS/TLS/account configuration.

## Incident Response

Severity levels:

| Severity | Definition | Target response |
| --- | --- | --- |
| SEV1 | Site unavailable, unsafe content exposed, or domain hijack suspected. | Start immediately; rollback or disable exposure first. |
| SEV2 | Core pages load but key navigation, language, or contact flows fail. | Start same day; rollback if public impact is high. |
| SEV3 | Minor visual, copy, analytics, or non-critical link issue. | Fix in normal work queue. |

First 15 minutes:

1. Confirm the issue from a clean browser or `curl`.
2. Check whether the issue affects production domain, preview deploy only, or
   local environment only.
3. Check the hosting dashboard for build failures, runtime errors, and recent
   deployments.
4. Decide rollback vs. forward fix.
5. If public trust or private information is involved, remove exposure first and
   investigate second.

Incident log template:

```text
Date:
Severity:
Detected by:
Start time:
End time:
Affected URL(s):
User impact:
Bad deployment:
Rollback deployment:
Root cause:
Action taken:
Follow-up:
```

## Secret Handling

- Do not commit production secrets, API keys, tokens, analytics write keys, DNS
  tokens, or provider credentials.
- Store production secrets only in the hosting provider's environment variable
  manager or a password manager.
- Use separate values for local, preview, and production environments.
- Prefer read-only or least-privilege tokens for analytics and monitoring.
- Rotate a secret immediately if it appears in a commit, build log, screenshot,
  issue, chat, or public page.
- After rotation, invalidate the old value with the provider. Do not only hide
  or delete the exposed copy.
- Do not add personal email inbox credentials or social account passwords to the
  hosting environment.

## Release Notes

For each production deploy, record a short note:

```text
Date/time:
Operator:
Commit SHA:
Deployment ID/URL:
Summary:
Smoke checks passed: yes/no
Rollback candidate:
Notes:
```
