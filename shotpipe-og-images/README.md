---
permalink: /
tags: [11ty, starter]
---

# 🥷 *B*uild Awesome <span class="faded">+</span> Shotpipe

<big>Dynamic **Open Graph images** for your Eleventy starter, via [Shotpipe](https://shotpipe.io) — the `og:image` most 11ty starters skip.</big>

Share any page of this site on X, Slack, or Discord and it renders a real social card instead of a bare link. The card's URL is signed locally **at build time** (one HMAC, no network call, no Chromium in CI), and the image renders lazily the first time a crawler fetches it — so your build stays exactly as fast as it was.

## Enable it

```sh {data-caption="Two lines:"}
cd site-shotpipe/
npm i
npx shotpipe-init      # free key, no signup — writes it to .env
```

Then build this site:

```sh
npm start
```

With no key set, the site still builds — the card is simply omitted until you run `npx shotpipe-init`. Nothing breaks, which is what makes it safe to ship in a starter.

## How it works

- **at build time** — the plugin signs the template parameters into a URL. No network, no headless browser.
- **in your `<head>`** — the URL waits in `<meta property="og:image">`, doing nothing.
- **on first share** — when a crawler fetches it, Shotpipe renders the template and caches the PNG forever.

<!--{.unlist .grid}-->

---

Links:

- https://github.com/podop29/eleventy-plugin-shotpipe
- https://shotpipe.io
