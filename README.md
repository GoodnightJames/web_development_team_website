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

## Roadmap (next)

- Real booking flow (calendar + service durations)
- Photo gallery / before-and-after for detailing work
- Merch store integration
- Address, hours, and phone — populate `Footer`, `Nav`, and `contact/page.tsx`
  once finalized
