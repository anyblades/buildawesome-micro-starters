// Dynamic Open Graph image for this site, via eleventy-plugin-shotpipe.
//
// The URL is signed locally here at build time (one HMAC, no network call);
// the image itself renders on shotpipe.io the first time a social crawler
// fetches it. `{{ og }}` in the layout head becomes the og:image URL.
//
// No key set? This returns '' and the layout omits the card — the build still
// succeeds. Turn cards on with:  npx shotpipe-init  (free, no signup).

import shotpipe from 'eleventy-plugin-shotpipe'

export default function () {
  const { SHOTPIPE_KEY: key, SHOTPIPE_SECRET: secret } = process.env
  if (!key || !secret) return ''
  return shotpipe.signedOgUrl(
    {
      title: 'Build Awesome + Shotpipe',
      author: 'Build Awesome',
      tag: '11ty starter',
      template: 'terminal',
      accent: '#5ca9ff',
    },
    { key, secret },
  )
}
