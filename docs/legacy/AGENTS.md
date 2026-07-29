# Repository Guidelines

## Project Structure & Module Organization

This repository is a self-contained static landing page:

- `generated-page.html` contains the HTML, CSS, and JavaScript for the Axisform Studio site.
- `DESIGN.md` is the visual specification and source of truth for colors, typography, layout, motion, accessibility, and external assets.
- There is currently no package manifest, build output directory, or automated test suite.

Keep related styles and scripts grouped inside `generated-page.html`. If the project grows, move reusable code into clearly named `src/styles/`, `src/scripts/`, and `assets/` directories rather than adding more large inline blocks.

## Build, Test, and Development Commands

No build or dependency installation is required. Serve the repository locally so browser security and asset loading behave consistently:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/generated-page.html`. For a quick syntax-oriented review, use:

```bash
git diff --check
```

This detects whitespace errors in tracked changes. External fonts, images, Tailwind, Lucide, GSAP, and Lenis require network access at runtime.

## Coding Style & Naming Conventions

Use two-space indentation for new HTML, CSS, and JavaScript. Prefer semantic HTML and keep accessibility attributes on interactive or decorative elements. Use kebab-case for CSS classes (`service-card`) and camelCase for JavaScript variables and functions. Reuse the CSS custom properties in `:root` instead of duplicating color or easing values. Follow `DESIGN.md` for spacing, rounded corners, typography, and motion behavior.

## Testing Guidelines

There is no automated test framework or coverage target. Before submitting changes, manually verify the page at desktop and mobile widths. Check navigation, forms, hover states, scroll-triggered animations, remote assets, browser console errors, and the `prefers-reduced-motion` experience. Test keyboard focus and confirm decorative elements remain hidden from assistive technology where appropriate.

## Commit & Pull Request Guidelines

This snapshot has no readable Git history, so no established commit convention can be inferred. Use short, imperative subjects such as `Fix mobile navigation spacing`. Keep commits focused. Pull requests should explain the user-visible change, list manual checks performed, link related issues, and include before/after screenshots for visual changes.

## Security & Configuration

Do not commit secrets, tokens, or private asset URLs. Review third-party CDN version changes carefully, and preserve integrity, privacy, and analytics considerations when adding external scripts.
