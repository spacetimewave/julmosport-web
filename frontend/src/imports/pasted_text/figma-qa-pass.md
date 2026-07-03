Continue working in the same Figma Make project.

This is a targeted QA, bug-fixing and visual polish pass.
Do NOT rebuild the homepage.
Do NOT redesign the visual system.
Do NOT create new product pages yet.
Preserve the current premium dark brutalist cinematic Julmo Sport style:
- Black #0A0A0A background
- Yellow #ffcc00 accents
- Industrial boxing gym aesthetic
- Strong uppercase typography
- Cinematic shadows
- Premium product catalog feel
- No ecommerce, no prices, no cart, no checkout

Fix the following issues carefully:

1. Homepage hero secondary button bug

In the homepage hero, the secondary button “Ver catálogo” currently appears as a blank white button until hover.

Fix it so the label is always visible in the default state.

Preferred style:
- Text: “VER CATÁLOGO”
- Default state: transparent or very dark background, yellow #ffcc00 border, yellow #ffcc00 text
- Hover state: yellow #ffcc00 background, black #0A0A0A text
- Focus state: visible accessible outline
- No layout shift on hover

The primary WhatsApp button should remain yellow and visually dominant.

2. Homepage “La Diferencia Julmo Sport” card consistency

In the section “LA DIFERENCIA JULMO SPORT”, make the four cards exactly the same visual size.

Cards:
- Artesanía Venezolana
- Calidad Garantizada
- Innovación Constante
- Pasión por el Combate

Requirements:
- Same width
- Same height
- Same padding
- Same icon position
- Same text alignment
- Same border style
- Same internal spacing
- The 2x2 desktop grid must look perfectly balanced
- On mobile, cards should stack cleanly with consistent spacing

Use a grid/flex implementation that stretches all cards equally.
Do not let longer or shorter copy create different card heights.

3. Product category route scroll position bug

When clicking the “Guantes de Boxeo” card from the homepage, the page currently opens halfway down the page, around “Elige según tu uso”.

Fix this behavior globally.

Every time the user navigates to a new internal route/page, the page must start at the top.

Specifically:
- Navigating to /catalogo/guantes-de-boxeo must load at the hero section
- Related category links should also open from the top
- Back/catalog links should not preserve the previous scroll position unexpectedly

Implement a scroll-to-top behavior on route/path changes.
Use an instant scroll reset, not a slow animated scroll.

4. Remove unwanted left yellow vertical gradient/line

On the “Guantes de Boxeo” page, at the beginning of the page there is an unwanted yellow vertical gradient/line on the far left edge of the screen.

Remove that full-height left-edge yellow line/gradient.

Important:
- Do NOT remove the small yellow decorative accent lines used next to section labels or headings.
- Only remove the unwanted vertical line attached to the left side of the viewport/page.

Also make sure the page has no accidental horizontal overflow.

5. Remove duplicate “Volver al catálogo” CTA

At the top of the “Guantes de Boxeo” page there are currently two “Volver al catálogo” actions:
- One small link/breadcrumb above the hero text
- One large secondary button next to “Consultar por WhatsApp”

Keep only ONE.

Preferred solution:
- Keep the small breadcrumb-style link above the hero content:
  “← Volver al catálogo”
- Remove the large secondary “Volver al catálogo” button next to the WhatsApp CTA

The hero should have one clear primary action:
“Consultar por WhatsApp”

This keeps WhatsApp as the main conversion goal.

6. Related categories card alignment

In the “Categorías relacionadas” section of the “Guantes de Boxeo” page, the “Ver categoría” buttons are not visually aligned across the three cards.

Fix the layout so all three “Ver categoría” CTAs sit on the same baseline.

Recommended implementation:
- Make all related category cards equal height
- Use a flex-column layout
- Keep icon/title/description at the top
- Push the CTA to the bottom using auto spacing
- Ensure the card descriptions have consistent visual rhythm

If needed, slightly adjust the third card copy so it wraps similarly to the others.

Use this copy for the third card:
“Material resistente para equipar salas, clubes y espacios de entrenamiento.”

7. General professional polish

While fixing the above, also check and polish these details:

- All buttons must have readable labels in default, hover and focus states
- No hover-only essential information, especially for mobile
- All catalog/category cards should clearly feel clickable
- CTA text should be vertically centered inside buttons
- Button heights should be consistent across similar components
- Card borders should use the same yellow opacity treatment
- Headings should not jump or resize unexpectedly on scroll
- The floating WhatsApp button should not cover important content
- Mobile layout should remain clean, stacked and readable
- No horizontal scroll on any page
- Keep animations smooth but subtle
- Do not add new sections unless necessary to fix spacing

8. Preserve the current content and structure

Do not change:
- Brand name: Julmo Sport
- Slogan: “Calidad Julmo dura más contigo”
- Legacy since 1984
- Homepage section order
- Existing visual direction
- The “Guantes de Boxeo” page structure
- The non-ecommerce catalog concept

Final expected result:
The homepage and the “Guantes de Boxeo” page should feel more polished, stable, premium and production-ready, while keeping the current cinematic dark industrial Julmo Sport identity.