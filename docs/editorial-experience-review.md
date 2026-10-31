# Editorial experience review

## Three highest-impact improvements

1. **Break the repeated image/title/story structure.** The collection's lead image and every vehicle story had nearly the same proportions and type placement, even when the photographs showed different things. The lead study now runs edge-to-edge. Individual stories use distinct compositions for a close garage portrait, a wide concours image, mechanical detail, a sculptural low angle, a touring saloon and a long-bodied roadster.
2. **Make navigation carry the photography forward.** Story changes previously replaced copy and image with no clear visual handoff; previous/next links were text only. The story image now shares a View Transition with the selected collection image where supported, and previous/next controls preview the adjacent photograph. Scroll reveals and archive image drift remain subtle and honor reduced-motion settings.
3. **Serve the right image for the viewport.** The local library had only full-size JPEGs. The hero is preloaded, collection photography is lazy-loaded, intrinsic dimensions reserve space, and every source now has 640, 960 and 1440 pixel WebP variants with JPEG fallbacks.

The implementation stays inside the existing static HTML/CSS/JavaScript architecture and adds no new site sections.
