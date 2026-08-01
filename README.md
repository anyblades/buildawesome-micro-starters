---
permalink: /
content_for_header: <meta property="og:image" content="https://build.blades.ninja/og/micro.png">
tags: [11ty, buildawesome, micro, starter]
---

<h1>
  <sup style class="faded">Build Awesome<br></sup><!-- <br> for GitHub only -->
  <em>M</em>icro-Starter<sup class="faded"><sub>[s]</sub></sup>
</h1>

<p>
  <img src="https://img.shields.io/github/v/release/anyblades/buildawesome-micro-starters?label=&color=darkslategray&style=for-the-badge">
  <a href="https://micro.build.blades.ninja/"><img src="https://img.shields.io/badge/Demo_➜-blue?style=for-the-badge" hidden></a><!-- GitHub only -->
  <object data="https://img.shields.io/github/stars/anyblades/buildawesome-micro-starters?label=GitHub&labelColor=silver&color=gainsboro&style=for-the-badge"></object><!-- won't render on GitHub -->
</p>

<big>Modern <mark>11-in-1</mark> micro-starter showcasing [Build&nbsp;Awesome&nbsp;Kit](//build.blades.ninja/) for:</big>

<figure><!-- <img src> breaks shields w/ emojis on GitHub, but ![]() works -->

| [1] [*Bl*ades CSS](//micro.build.blades.ninja/) <!--{data-a="./micro/ (default, multi-site)"}-->              | ![](https://img.shields.io/netlify/41df6bc0-3b91-48f7-903a-3511ca3652a8?logo=&label=🥷)                                           |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [2] [Pico CSS](//pico.build.blades.ninja/) <!--{data-b=├── data-a=./micro-pico/}-->                           | ![](https://img.shields.io/netlify/93494d69-cb21-4ad0-855f-3748d3741e5c?logo=&label=✨)                                           |
| [3] [Bootstrap CSS](//bs.build.blades.ninja/) <!--{data-b=├── data-a=./micro-bootstrap/}-->                   | ![](https://img.shields.io/netlify/e58db8aa-94b7-4637-80cc-50e03cff45b0?logo=bootstrap&logoColor=lavender&label=&labelColor=gray) |
| [4] [Web Awesome](//wa.build.blades.ninja/) <!--{data-b=├── data-a=./micro-webawesome/}-->                    | ![](https://img.shields.io/netlify/40dc0253-7a90-4970-ba8d-80a1ec52093c?logo=webawesome&label=&labelColor=gray)                   |
| [5] Sveltia CMS <!--{data-b=├── data-a=./micro-sveltia-cms/}-->                                               |                                                                                                                                   |
| [6] Liquid (templates) <!--{data-b=└── data-a=./micro-liquid/}-->                                             |
| [7] [Tailwind CSS](//tw.build.blades.ninja/) <!--{data-a=./tailwind/}-->                                      | ![](https://img.shields.io/netlify/a980220a-630d-4022-9496-fb83b5db7c6b?logo=tailwindcss&label=&labelColor=gray)                  |
| [8] [Shotpipe (OG images)](//shot.build.blades.ninja/) <!--{data-a=./shotpipe-og-images/}-->                  | ![](https://img.shields.io/netlify/c4a8f0e9-2d85-4bd4-9607-a9043ab8a0a4?label=🖼️)                                                 |
| [9] [Content-First](//content.build.blades.ninja/) 🔥 <!--{data-a="(best-in-class, now separate repo)"}-->    | ![](https://img.shields.io/netlify/346efcff-c92c-4f1c-bf3c-047049fc6a8c?label=📝)                                                 |
| [10] Bare [Build Awesome Kit (plugin)](//build.blades.ninja/plugin/) <!--{data-a=./bare-plugin/ .faded}-->    |
| [11] Bare [Build Awesome Kit (scripts)](//build.blades.ninja/scripts/) <!--{data-a=./bare-scripts/ .faded}--> |

<!--{.striped .borderless}-->

</figure>
<style>
  table td { vertical-align: middle }
  /* Render text as unselectable icon */
  [data-b]::before, [data-a]::after { font-family: monospace; opacity: 50% }
  [data-b]::before { content: attr(data-b) " " }
  [data-a]::after { content: " " attr(data-a) }
</style>

---

## Local development

As simple as:

```sh
cd micro/
npm install    # dependencies
npm start      # development
npm run stage  # serve production version locally
               # ready to deploy! 🚀
```

---

## Micro multi-site starter

`micro/` starter is multi-site — meaning you can switch its input folder via `IN=` environment variable like this:

```sh
IN=../micro-bootstrap/ npm start
```

---

- ## Sveltia CMS starter <sub style>`micro-sveltia-cms/`</sub>

  <a href="/admin/" role="button">Go to Sveltia CMS Admin</a>

- ## Web Awesome starter <sub style>`micro-webawesome/`</sub>

  <wa-button variant="brand">Click Web Awesome Button!</wa-button>

<!--{.unlist .grid}-->

---

## Shotpipe (OG images) starter

<big>Dynamic **Open Graph images** for your Eleventy starter, via [Shotpipe](//shotpipe.io) — the `og:image` most 11ty starters skip.</big>

Share any page of this site on X, Slack, or Discord and it renders a real social card instead of a bare link. The card's URL is signed locally **at build time** (one HMAC, no network call, no Chromium in CI), and the image renders lazily the first time a crawler fetches it — so your build stays exactly as fast as it was.

###### Enable it:

```sh
cd shotpipe-og-images/
npm i
npx shotpipe-init  # free key, no signup — writes it to .env
npm start
```

With no key set, the site still builds — the card is simply omitted until you run `npx shotpipe-init`. Nothing breaks, which is what makes it safe to ship in a starter.

###### How it works:

- **at build time** — the plugin signs the template parameters into a URL. No network, no headless browser.
- **in your `<head>`** — the URL waits in `<meta property="og:image">`, doing nothing.
- **on first share** — when a crawler fetches it, Shotpipe renders the template and caches the PNG forever.

###### Links:

- https://github.com/podop29/eleventy-plugin-shotpipe
- https://shotpipe.io

---

## <sup style>Featured by</sup>

- https://www.11ty.dev/docs/starter/
- https://sveltiacms.app/en/docs/frameworks/eleventy
- https://build.blades.ninja/starters/
- https://11tybundle.dev/starters/
- [awesome-buildawesome](https://github.com/anyblades/awesome-buildawesome)

<!--{.columns}-->
