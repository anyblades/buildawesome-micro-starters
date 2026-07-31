---
permalink: /
content_for_header: <meta property="og:image" content="https://build.blades.ninja/og/micro.png">
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

<figure>

| [1] [*Bl*ades CSS](//micro.build.blades.ninja/) <i data-v="./micro/ (default, multi-site)"></i>         | <img src="https://img.shields.io/netlify/41df6bc0-3b91-48f7-903a-3511ca3652a8?logo=&label=🥷">                                           |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| <i data-v="├──"></i> [2] [Pico CSS](//pico.build.blades.ninja/) <i data-v="./micro-pico/"></i>          | <img src="https://img.shields.io/netlify/93494d69-cb21-4ad0-855f-3748d3741e5c?logo=&label=✨">                                           |
| <i data-v="├──"></i> [3] [Bootstrap CSS](//bs.build.blades.ninja/) <i data-v="./micro-bootstrap/"></i>  | <img src="https://img.shields.io/netlify/e58db8aa-94b7-4637-80cc-50e03cff45b0?logo=bootstrap&logoColor=lavender&label=&labelColor=gray"> |
| <i data-v="├──"></i> [4] [Web Awesome](//wa.build.blades.ninja/) <i data-v="./micro-webawesome/"></i>   | <img src="https://img.shields.io/netlify/40dc0253-7a90-4970-ba8d-80a1ec52093c?logo=webawesome&label=&labelColor=gray">                   |
| <i data-v="├──"></i> [5] Sveltia CMS <i data-v="./micro-sveltia-cms/"></i>                              |                                                                                                                                          |
| <i data-v="└──"></i> [6] Liquid (templates) <i data-v="./micro-liquid/"></i>                            |
| [7] [Content-First](//content.build.blades.ninja/) <i data-v="(sub-starter)"></i>                       | <img src="https://img.shields.io/netlify/346efcff-c92c-4f1c-bf3c-047049fc6a8c?label=📝">                                                 |
| [8] [Tailwind CSS](//tw.build.blades.ninja/) <i data-v="./tailwind/"></i>                               | <img src="https://img.shields.io/netlify/a980220a-630d-4022-9496-fb83b5db7c6b?logo=tailwindcss&label=&labelColor=gray">                  |
| [9] [Shotpipe (OG images)](//shot.build.blades.ninja/) <i data-v="./shotpipe-og-images/"></i>           | <img src="https://img.shields.io/netlify/c4a8f0e9-2d85-4bd4-9607-a9043ab8a0a4?label=🖼️">                                                 |
| [10] Bare [Build Awesome Kit (plugin)](//build.blades.ninja/plugin/) <i data-v="./bare-plugin/"></i>    |
| [11] Bare [Build Awesome Kit (scripts)](//build.blades.ninja/scripts/) <i data-v="./bare-scripts/"></i> |

{.striped .borderless}

</figure>
<style>
  /* Render text as unselectable icon */
  [data-v]::before { content: attr(data-v); font-family: monospace; opacity: 37.5% }
</style>

---

## Killer features

- **Eleventy v4 by default**  
  <sup>both v4 (Build Awesome) & v3 supported</sup>
- **"Thin client" architecture**  
  <sup>thanks [Eleventy *Bl*ades](//build.blades.ninja/) for heavy lifting</sup>
- **Tailwind v4 CLI**  
  <sup>either Tailwind CSS <b class="faded">–OR–</b> your own CSS</sup>
- **[*Bl*ades CSS](//blades.ninja/css/standalone/) included**  
  <sup>standalone framework-agnostic helpers</sup>
- **Sveltia CMS included**  
  <sup>modern Decap/Netlify CMS successor</sup>
- **Multi-site support**  
  <sup>thanks to symlink-based setup</sup>
- **One-click start**  
  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/anyblades/buildawesome-starters)

<!--{.columns}-->

---

## Local development

```sh {data-caption="As simple as:"}
npm install    # dependencies
npm start      # development
npm run stage  # serve production version locally
               # ready to deploy! 🚀
```

Add `IN=...` to build the specific site:

```sh
IN=site-webawesome npm start
IN=site-webawesome npm run stage
```

---

- Featured by:
  - https://11tybundle.dev/starters/
  - https://sveltiacms.app/en/docs/frameworks/eleventy
  - https://www.11ty.dev/docs/starter/
- See also:
  - https://build.blades.ninja/starters/
  - https://build.blades.ninja/awesome/

<!--{.unlist .columns}-->
