---
version: alpha
name: Axisform Studio Landing Page
description: A cinematic, high-density landing page for an independent design studio, featuring deep blacks, atmospheric textures, and sophisticated GSAP-driven motion.
colors:
  bg: "#060706"
  panel: "#10110f"
  cream: "#f3f0e8"
  orange: "#ff5a1f"
  muted: "rgba(243, 240, 232, 0.58)"
  line: "rgba(243, 240, 232, 0.10)"
typography:
  family: "Inter, sans-serif"
  weights: [400, 500, 600, 700, 800, 900]
  wordmark: { size: "23vw", weight: 900, tracking: "-0.08em" }
  headings: { weight: 600, tracking: "-0.08em" }
spacing:
  base: "80px"
  rail: "22px"
rounded:
  cards: "28px"
  notes: "38px"
  buttons: "999px"
components:
  glass: "backdrop-filter: blur(18px); background: rgba(255,255,255,.035); border: 1px solid {colors.line}"
  magneticButton: "transition: transform .45s var(--ease); hover: translateY(-2px)"
---

## Overview
Axisform Studio is a dark-mode, editorial-style experience characterized by high-contrast typography and complex layering. The visual personality is "Launch OS"—technical yet refined, utilizing industrial textures (noise and grid veils) and cinematic depth. The density is medium-high, with large overlapping elements and a vertical "page rail" that reinforces the studio's technical tone.

## Colors
The palette is rooted in a deep void black (`#060706`) paired with a warm cream text (`#f3f0e8`). A high-energy orange (`#ff5a1f`) serves as the primary action and accent color, often accompanied by glow effects and subtle gradients. Translucent layers (glass) use varying opacities of white and orange to create structural hierarchy.

## Typography
Built exclusively on Inter. The type system relies on extreme scale differentials—from 10px "metadata" labels to 23vw wordmarks. Significant use of negative letter-spacing (`-0.08em`) on headings gives the brand a tight, compressed feel. Vertical text is used in the page rail for utility information.

## Layout
The layout uses a 12-column grid system with significant padding on the edges (up to 12.5% on large screens). Many sections feature a dual-layer approach: a background "drift" layer with massive, low-opacity wordmarks, and a foreground content layer. Vertical rhythm is driven by wide sections and distinct pinned-scroll transitions.

## Elevation & Depth
Depth is achieved through:
*   **Noise & Grid Overlays**: Fixed position textures that sit above the background but below the content.
*   **Glassmorphism**: Backdrop blurs (18px) for cards and navigation.
*   **Parallax Layers**: Floating images that move at different speeds (`parallax-slow` vs `parallax-fast`).
*   **Z-Stacking**: Hero cards are rotated and stacked with specific offsets to create a physical object feel.

## Shapes
Shapes are predominantly soft-geometric. Containers use large corner radii (28px to 38px), while interface buttons and status indicators are fully rounded (pill-shaped). The "ax-dot" and section labels use circular motifs to signify status or activity.

## Components
### Navigation
A fixed header with a glass background for mobile and a minimalist, wide-tracked link list for desktop. Hover states feature an underline that scales from the center.
### Service & Pricing Cards
Large glass tiles with high corner radii. They feature hover transitions that shift the Y-position and brighten the border-color to `{colors.orange}`.
### Field Note Cards
High-contrast blocks using either `{colors.cream}`, `{colors.bg}`, or `{colors.orange}`. These feature large numerical indicators in the background and bold, tight typography.
### Operating Loop Timeline
A custom progress component with horizontal bars that scale from left-to-right, representing sequential project phases.

## Page Sections
### Brand Preloader
A full-screen intro featuring a blurred-to-sharp brand reveal, a loading bar with an orange-to-cream gradient, and a percentage counter.
### Hero Section
A pinned sequence. Features a stack of four cards (image, color field, typographic, and abstract) that splay outward upon scrolling. The background features a massive "Axisform" wordmark that shifts vertically.
### Studio Method
A minimalist section with a large background drift wordmark and a grid of brand keywords (observe, compress, etc.) that stagger into view.
### Operating Stack (Services)
Features a background image strip under a rounded-bottom container. Content is organized into four glass cards with large numeric indicators.
### Field Archive
A horizontal-scrolling gallery of images with staggered rotation and scale. Images are filtered for low saturation and brightness until hovered.
### Work / Systems
Centers around a large "04" masked with an image, surrounded by floating project preview cards that shift on scroll.
### Field Notes
An editorial grid of cards with varying background colors and orientations. Includes a section for "Index" items with thin dividers.
### Contact Brief
A form-like layout featuring a glass dropdown and text inputs designed as underlined blocks.
### Footer
High-impact section with a massive wordmark, social links with directional arrow icons, and a site map organized by category (Studio, Field, Notes, Social, Legal).

## Motion & Interaction
*   **Smooth Scroll**: Powered by Lenis for uniform intertia.
*   **Scroll-Triggered Pinning**: Major sections (Hero, Studio, Work, Pricing) pin to the viewport while internal elements transform.
*   **Reveals**: Universal `[data-reveal]` attribute triggers Y-translation and opacity fades.
*   **Magnetic Effect**: CTA buttons and links use a soft `translateY` and color shift on hover.
*   **Masked Typography**: The "04" in the Work section uses `background-clip: text` with a moving background image.

## Do's and Don'ts
*   **Do**: Use negative letter-spacing for all headings above 32px.
*   **Do**: Maintain the 80px grid size for background patterns.
*   **Do**: Apply `mix-blend-overlay` to atmospheric orange glows.
*   **Don't**: Use sharp corners; always use a minimum of 18px radius for cards.
*   **Don't**: Use standard scroll behaviors; all motion must feel weighted and dampened.

## Accessibility
*   `aria-hidden` attributes are used on decorative grid veils, noise layers, and loaders.
*   Reduced motion media queries are implemented to strip all GSAP transitions and force immediate opacity.
*   Buttons include `aria-label` for icon-only interactions (menu/arrows).

## Assets
1. other: https://cdn.tailwindcss.com
2. other: https://unpkg.com/lucide@latest/dist/umd/lucide.min.js
3. other: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
4. other: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js
5. other: https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js
6. embed: https://fonts.googleapis.com
7. embed: https://fonts.gstatic.com
8. embed: https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap
9. other: https://www.googletagmanager.com/gtag/js?id=G-2M6V79H761
10. image: https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1be70dfc-949c-405c-893d-614e400fb2ca_1600w.png
11. image: https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b2725ca-5b05-49fe-b2ff-9de382bf26ef_1600w.webp
12. image: https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07705938-ccca-4133-9f21-1b3f01af3463_3840w.png
13. image: https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b07ad449-1292-4c6b-aff4-6ce345d9fa12_3840w.png
14. image: https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79e4228e-37c5-45bc-a352-ae8b41b6d71b_3840w.png
15. image: https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92ae1957-bb5d-4fef-b4fe-26a43ca6c254_3840w.png
16. image: https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1f39209-cbcc-4857-bc13-744562e16d78_3840w.png
17. image: https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf697fb6-c82a-4c34-95ec-cbfc47b8622f_3840w.png
18. image: https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/095918f0-0508-4c1f-867f-ec46e9f0720d_3840w.png
19. other: https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90

### Exported Codebase Asset Inventory
1. embed: https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap
   Context: index.html: markup attribute; index.html: absolute url literal
2. other: https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp;fit=crop&amp;w=1600&amp;q=90
   Context: index.html: css url(); index.html: absolute url literal
