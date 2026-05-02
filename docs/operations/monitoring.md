# Uptime and Monitoring Plan

- Site: `https://agentryx-ai.com`
- Scope: immediate, low-cost production monitoring
- Last reviewed: 2026-05-03

The goal is to detect public website breakage quickly without committing to an
enterprise observability stack. Use managed host logs plus independent uptime
checks first. Add deeper tooling only when the site has enough traffic or
operational complexity to justify it.

## Minimum Setup

Set up these monitors before or at launch:

| Monitor | Target | Frequency | Alert when |
| --- | --- | --- | --- |
| Home uptime | `https://agentryx-ai.com` | 1 minute or 5 minutes | Non-2xx/3xx or timeout. |
| Thesis uptime | `https://agentryx-ai.com/thesis` | 5 minutes | Non-2xx/3xx or timeout. |
| Product route uptime | One stable product detail URL | 5 minutes | Non-2xx/3xx or timeout. |
| TLS certificate | `agentryx-ai.com` | Daily | Certificate expires within 14 days. |
| Domain expiry | `agentryx-ai.com` | Daily or provider alert | Domain expires within 30 days. |
| Redirect check | `http://agentryx-ai.com` | Daily | Does not redirect to HTTPS. |

Good immediate options:

- UptimeRobot
- Better Stack uptime checks
- Pingdom basic uptime
- Cloudflare notifications if DNS is on Cloudflare
- GitHub Actions scheduled `curl` check if no external monitor is available yet

Choose one independent uptime provider even if the hosting platform has its own
health checks. The monitor should test the public domain from outside the host.

## Alert Routing

Keep alerting simple:

- Primary alert: operator email.
- Secondary alert: phone push notification from the uptime provider, if
  available.
- Avoid noisy Slack/Discord integrations until there is a team channel that
  someone actively watches.

Alert rules:

- Alert after 2 consecutive failures for 1-minute checks.
- Alert after 1 failure for TLS expiry below 14 days.
- Alert on recovery, so the operator can close the incident.
- Do not page on analytics delivery failures unless they also indicate site
  breakage.

## Synthetic Checks

The first synthetic check can be a simple shell script or hosted monitor that
requests critical pages and verifies status codes.

Required URLs:

```text
https://agentryx-ai.com
https://agentryx-ai.com/thesis
https://agentryx-ai.com/about
https://agentryx-ai.com/press
https://agentryx-ai.com/products/<stable-product-slug>
```

Optional checks once the product slug is confirmed:

- Verify page HTML contains the site name.
- Verify the canonical domain responds within 3 seconds.
- Verify `www` behavior matches the production decision.

Do not make synthetic checks submit forms, send contact emails, or click external
links yet. Those checks can create noise for third parties and are not needed for
the current website.

## Host Logs

Use the production host's built-in dashboards for:

- build failures
- deployment history
- runtime exceptions
- 404/500 spikes
- bandwidth or request spikes
- environment variable changes

Review logs:

- after every production deploy
- when an uptime alert fires
- before rolling back
- after DNS or environment variable changes

Do not stream host logs into a third-party data warehouse until a privacy and
retention decision exists.

## Error Tracking

Do not add a full client-side error tracker by default. If production errors
become frequent, choose a small setup with:

- source maps disabled for public access unless access is controlled
- short retention
- no session replay
- no keystroke capture
- no full DOM capture
- no collection of contact link destinations beyond allowlisted metadata

Until then, use host errors plus manual reproduction.

## Operational Thresholds

Use these thresholds for the first production phase:

| Metric | Watch for | Action |
| --- | --- | --- |
| Availability | Any confirmed outage over 5 minutes | Start incident response. |
| Response time | Home page over 3 seconds for 3 checks | Check host status and recent deploys. |
| 5xx | Any repeated 5xx on public routes | Roll back if tied to latest deploy. |
| 404 | Spike after navigation or route changes | Verify routes and redirects. |
| TLS | Expires within 14 days | Renew or fix DNS validation. |
| Domain | Expires within 30 days | Renew immediately. |

## Weekly Review

Once per week:

1. Confirm uptime monitors are green.
2. Confirm alert email and phone push still work.
3. Review latest production deployment status.
4. Check TLS and domain expiry.
5. Review analytics event volume for obvious instrumentation breakage, not user
   profiling.

## When to Add More Tooling

Add a more complete observability stack only when at least one is true:

- The site has recurring incidents that host logs cannot explain.
- There are multiple operators who need shared incident history.
- The site adds authenticated flows, forms, payments, or user-generated content.
- Product decisions require reliable funnel metrics beyond aggregate events.
- Compliance or customer requirements demand retention and audit controls.
