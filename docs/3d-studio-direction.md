# FORME — The Garage / 3D asset research

**Status:** Research only. No asset has been purchased, licensed, downloaded, or inspected locally. The viewer remains intentionally unbuilt until an authorized model file and suitable usage rights are available.

## Quality benchmark

For a studio centerpiece, the asset must pass more than a turntable preview. Once we have the authorized archive, inspect:

- Correct generation and body proportions from front, profile, rear, and high/low angles.
- Exterior close-ups: panel edges, glass thickness, lamp lenses, grille, badges, trim, wheel spokes, tires, brakes, and underside where visible.
- Cabin: dashboard, instruments, steering wheel, seats, door cards, glass transparency, and convincing detail through windows; verify door/window openings only if they will be part of the interaction.
- Mesh/material organization: separate paint, glass, chrome, rubber, lights, upholstery, and wheels; identify a safe paint-only material.
- PBR maps and color space, UV quality, texture dimensions, number of materials/draw calls, normals, pivots, model scale and orientation.
- Actual GLB/GLTF download weight and decoded texture/memory cost. Test load time and stable frame rate on a midrange phone as well as desktop.
- License applies to the model files; separately review the depicted vehicle's brand/design rights and the license's interactive web distribution conditions.

**Evidence labels in this review:** “Listing states” means public marketplace metadata or creator description. “Not verified” means it cannot be confirmed until we inspect the authorized original files. Previews are useful for screening visual form, not proof of mesh, material, or runtime quality.

## Three strongest candidates

### 1. White Porsche 911 1968 Rigged — TurboSquid · $129

[Direct asset page](https://www.turbosquid.com/3d-models/3d-white-porsche-911-1968-rigged-model-2282318)

**Listing states:** 1968 911; 274,893 polygons / 299,785 vertices; PBR; UV-mapped and non-overlapping; rigged; textures and original layered PSD textures; detailed interior; close-up capable; glTF format listed. A gallery includes many views and turntable imagery. Price observed: **$129**.

**Looks strongest on paper:** era matches FORME's classic 911 story; detailed interior and PBR/UV support make orbit, close views, lighting and paint investigation plausible. Geometry is substantial without being the biggest candidate. The format listing includes glTF, but the source scene is 3ds Max/V-Ray.

**Critical limitation:** The page is explicitly labeled **Editorial Uses Only**. TurboSquid's published terms say such depictions may only be used editorially/academically, prohibit commercial/promotional/advertising use, and require advance approval for WebGL applications other than Unity, Unreal, or Lumberyard. Its terms also place responsibility for depicted IP clearance on the buyer. FORME is an editorial experience, but a public interactive Garage on a product site is not clearly cleared by that label; Three.js is not one of the named WebGL exceptions. File size, exact texture resolutions, scene material names/separation, and glTF export quality are **not listed**.

**Disposition:** Best visual/technical **inspection candidate**, not a purchase recommendation yet. Ask TurboSquid in writing whether this exact model's editorial license permits FORME's Three.js browser experience and whether the site is within their editorial scope. If the answer is not explicit, exclude it.

### 2. Porsche 911 930 Turbo, clean topology — TurboSquid · $45

[Direct asset page](https://www.turbosquid.com/3d-models/3d-porsche-911-930-turbo-classic-car-clean-topology-model-2580446)

**Listing states:** 1975 930 Turbo; 128,568 polygons / 137,720 vertices; full cabin (seats, dashboard, wheel, gauges, gearshift); separated collections for body, glass, chrome, interior, lights, details and four wheels; two additional wheel designs; procedural materials with editable colors. Price observed: **$45**.

**Important technical mismatch:** The listing says the model has **not been UV-unwrapped** and preview materials are Blender Shader Nodes. It provides Blender, OBJ and FBX (not a ready GLB); the creator notes non-Blender users need to UV unwrap and apply their own textures/procedural shaders. This is promising geometry and organization, but a Blender/Cycles material setup does not prove it will transfer to a Three.js PBR scene. A conversion and material-baking pass could be required.

**License:** Also marked **Editorial Uses Only**, with the same WebGL approval and depicted-IP caveats above. File weight, texture maps/resolution, and glTF compatibility are not given.

**Disposition:** Strongest editable-geometry candidate and lower cost, but only if the author or TurboSquid can supply an authorized UV-mapped, browser-ready glTF export and written use approval. Otherwise material work and rights uncertainty outweigh the price.

### 3. Free 1975 Porsche 911 (930) Turbo — Lionsharp Studios / Sketchfab · free

[Direct asset page](https://sketchfab.com/3d-models/free-1975-porsche-911-930-turbo-8568d9d14a994b9cae59499f0dbed21e)

**Listing states:** 241.3k triangles / 133.5k vertices; described by creator as game-ready mid-poly with a clearcoat mesh; downloadable; **CC BY**; creator asks for attribution and notes the vehicle design belongs to Porsche AG. A third-party index reports 2048² PBR textures, but that is not source-file verification.

**Unknowns:** The listing does not establish cabin completeness, material naming/separation, exact map set/resolution, GLB compressed size, or whether clearcoat and glass behave correctly in Three.js. Its 930 Turbo is a G-body Turbo, not the 1972 911 S in FORME's story. CC BY requires creator credit but does not itself clear Porsche's depicted design/marks.

**Disposition:** Best no-cost browser-oriented control case due its mid-poly/game-asset intent. Keep as a fallback candidate only if authorized file inspection confirms the interior and PBR quality. Do not present it as the 1972 911 S.

## Other candidates screened

- [Porsche 911 Carrera — CGTrader](https://www.cgtrader.com/3d-models/car/sport-car/porsche-911-carrera-10f32061-a73e-4601-836b-8e1b3487c6ab): $40; listing says detailed high-poly paint and cabin, textures included, Blender 4.3, glTF; 1,257,482 polygons; glTF reported as 81.3 MB. No year/generation, texture dimensions, material layout, or reviews are established. This raw payload and million-plus polygon count are poor mobile starting points; it could only re-enter consideration after checking if the actual source includes usable lower LODs or can be optimized without damaging the close-up look.
- [Classic Porsche 911 Coupe — CGTrader](https://www.cgtrader.com/3d-models/car/racing-car/classic-porsche-911-coupe): $40; 13,037 polygons; 23.7 MB glTF; PBR textures and CGTrader technical checks are listed; preview text mentions Fuchs-style wheels, lamps, steering wheel and seats. Listing flags **AI GENERATED**, has no reviews, does not establish model year, interior depth, material count, or exact maps. Small geometry may compromise close studio views; AI-assisted origin and unverified authenticity make this unsuitable as the first heritage centerpiece without inspection.
- [Porsche 911 (Philipp Busse) — Sketchfab](https://sketchfab.com/3d-models/porsche-911-e5d5f35870344bd4a005ef5599a63313): 1970s, 22.2k triangles, PBR-tagged, CC BY. A light benchmark and closer era match, but no public cabin/material/texture/file-size detail; potentially under-detailed for hero close-ups.
- [Porsche 911 (n.brizitskaya) — Sketchfab](https://sketchfab.com/3d-models/porsche-911-with-interior-877b1bc1739f4a2bb65d62fd7ffd9f75): 424k triangles, detailed interior, CC BY. It is a modern Turbo S, not a classic, so it does not fit the first story.
- Blendkit/BlenderKit surfaced current-generation or stylized Porsche-labelled models, but not a documented classic 911 candidate with the needed cabin, PBR, and web-delivery evidence. A Blender source file is useful for authoring, but is not itself proof of runtime readiness.
- TurboSquid and CGTrader surfaced additional classic 911 assets, but several lacked a detailed cabin, had very large GLTF downloads, or only offered render-oriented formats. A generic listing is not treated as a finalist solely because its renders look polished.

## Recommendation

**Prioritize visual quality but make no purchase yet.** Start with the TurboSquid 1968 model for authorized file inspection if—and only if—TurboSquid confirms in writing that its Editorial Use classification and Three.js/WebGL distribution are allowed for FORME. Its public listing has the strongest combined evidence for correct era, interior, UVs, PBR, textures, and close views. The $129 cost may be justified if the actual files validate those claims and the use fits the license.

If that license cannot cover the experience, pursue a commissioned or directly licensed 1965–73 911 model with explicit interactive-web and commercial publication rights. The free Sketchfab 930 is a practical technical benchmark, not a quality-equivalent replacement. Do not purchase the $45 TurboSquid 930 unless it can be delivered with working UV/PBR data and the same written web-use clearance.

## Studio implementation target (after asset clearance)

Keep the feature isolated in the existing vanilla JavaScript site. Load Three.js, `GLTFLoader`, and `OrbitControls` only on Garage entry. Provide damped 360° orbit, bounded vertical angle and zoom, three authored views (front three-quarter, side, rear three-quarter), keyboard-accessible reset/presets, reduced-motion support, a poster/loading state and still-image fallback. Keep the model local and attributed; do not load it on the landing page. Build no paint configurator until a paint-only material is confirmed.

Three.js directly fits the current stack. [GLTFLoader](https://threejs.org/docs/pages/GLTFLoader) supports glTF 2.0 and PBR-related extensions. [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) is a React renderer and Drei's [useGLTF](https://drei.docs.pmnd.rs/loaders/gltf-use-gltf) is a React hook; adding React just for this viewer is unnecessary.
