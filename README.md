# Seaside Garage and Detailing

Marketing website for Seaside Garage and Detailing — a coastal shop housing a
Special Automotive Project (laser alignment, wheel repair, mounting and
balancing) and a separate high-end detailing operation.

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
  app/
    page.tsx              Home
    automotive/page.tsx   Special Automotive Project services
    detailing/page.tsx    High-end detailing services
    about/page.tsx        About the shop
    contact/
      page.tsx            Inquiry form page
      actions.ts          Server action that handles the form submit
    layout.tsx            Root layout, nav + footer
    globals.css           Brand theme (ocean / sand / copper) via Tailwind @theme
  components/
    Nav.tsx
    Footer.tsx
    InquiryForm.tsx       Progressive-enhancement form using useActionState
```

## Inquiry form

`src/app/contact/actions.ts` is the single integration point for the contact
form. It currently validates input and logs to the server console. To ship
real notifications, replace the `// TODO` block with one of:

- Resend / SendGrid email send
- A CRM webhook (HubSpot, Pipedrive, etc.)
- Database insert (when booking lands)

The form uses React's `useActionState`, so it works without JavaScript (full
page submit) and progressively enhances when JS is available.

## Environment variables

See `.env.example`. The only one needed for the marketing site today is:

- `NEXT_PUBLIC_SITE_URL` — absolute URL of the deployed site, used as the
  `metadataBase` for Open Graph / Twitter tags. Set this in Vercel's project
  settings (Production scope) once the first deploy gives you a URL, then
  redeploy.

Form-delivery vars (`RESEND_API_KEY`, `INQUIRY_TO_EMAIL`) are stubbed in the
example file and will be wired up when the inquiry action is connected.

## Gallery

`src/data/gallery.ts` holds the gallery manifest — an array of items with
`category`, `caption`, `alt`, `aspect`, and an optional `src`. Drop images
into `public/gallery/` and reference them by path (e.g. `/gallery/detail-001.jpg`)
in the `src` field. Until `src` is set, tiles render as on-brand gradient
placeholders so the page is presentable on launch.

Image prep:

- Export from the Hasselblad library at ~1600&ndash;2000px on the long edge,
  80&ndash;85% JPEG quality. Next.js will further optimize on serve.
- Square / portrait / landscape are all supported &mdash; set the `aspect`
  field accordingly for the layout to balance.
- Once the library outgrows `public/` (roughly &gt;100MB), switch to Vercel
  Blob, Cloudinary, or S3 by updating the `src` paths in
  `src/data/gallery.ts`. No other code changes needed.

## Deploy (Vercel)

1. Import the repo at https://vercel.com/new — framework is auto-detected.
2. First deploy can run without env vars; metadata will fall back to
   `localhost`.
3. After deploy, set `NEXT_PUBLIC_SITE_URL` in Project Settings →
   Environment Variables (Production scope) to the live URL, then redeploy.
4. Every push to a PR branch builds a preview deploy automatically.

## Roadmap (next)

- Real booking flow (calendar + service durations)
- Photo gallery / before-and-after for detailing work
- Merch store integration
- Address, hours, and phone — populate `Footer`, `Nav`, and `contact/page.tsx`
  once finalized
