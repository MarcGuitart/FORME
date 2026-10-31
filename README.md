# FORME

FORME is an editorial automotive experience: a visual collection for the cars, design and stories worth spending time with.

## First slice

- Cinematic, responsive landing page.
- Filterable collection of six automotive icons.
- Full-screen, URL-addressable editorial stories with previous/next navigation.
- Individual vehicle compositions, shared-image transitions and preview-led story navigation.
- Locally hosted automotive photography selected from verified source pages.
- Motion respects reduced-motion preferences.
- Static frontend with no backend or build step.

## Run locally

Open `index.html` in a browser or serve this folder with any static file server.

## Content and assets

The initial collection, image mapping and copy live in `src/app.js`. Photographs are stored in `public/assets/photography/`; [photography credits](photography-credits.html) records each creator, source page and license. Responsive WebP sources at 640, 960 and 1440 pixels are generated alongside JPEG fallbacks. Collection images load lazily, the hero is preloaded, and image dimensions are declared to reserve layout space. Images are locally hosted so the experience does not depend on third-party image delivery at runtime. Vehicle names and dates are written to match the photographed model where the source identifies it; broader date labels are used where an exact specimen year is not documented. The stories intentionally avoid presenting unverified technical specifications as facts.

## Next

The first 3D Studio proposal and a candidate GLB asset review are in [`docs/3d-studio-direction.md`](docs/3d-studio-direction.md). The viewer should arrive only after asset inspection and license/use clearance.

## Visual QA

Browser screenshots, all six vehicle stories, mobile and desktop contact sheets, and the tested browser-history sequence are in [`screenshots/visual-qa/`](screenshots/visual-qa/).
