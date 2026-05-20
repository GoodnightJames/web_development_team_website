"use server";

import { Resend } from "resend";

export type InquiryState = {
  status: "idle" | "ok" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof InquiryInput, string>>;
};

type InquiryInput = {
  name: string;
  email: string;
  phone: string;
  service: string;
  vehicle: string;
  preferredDate: string;
  message: string;
};

const SERVICE_LABELS: Record<string, string> = {
  "automotive-alignment": "Laser alignment",
  "automotive-wheel-repair": "Wheel repair",
  "automotive-mount-balance": "Mounting and balancing",
  "detailing-maintenance": "Maintenance detail",
  "detailing-correction": "Paint correction",
  "detailing-ceramic": "Ceramic coating",
  "detailing-interior": "Interior restoration",
  other: "Something else",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const input: InquiryInput = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    vehicle: String(formData.get("vehicle") ?? "").trim(),
    preferredDate: String(formData.get("preferredDate") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const fieldErrors: InquiryState["fieldErrors"] = {};
  if (!input.name) fieldErrors.name = "Please enter your name.";
  if (!input.email) fieldErrors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(input.email))
    fieldErrors.email = "That email doesn't look right.";
  if (!input.service || !(input.service in SERVICE_LABELS))
    fieldErrors.service = "Pick a service so we can route the inquiry.";
  if (!input.message || input.message.length < 10)
    fieldErrors.message = "A few sentences about the job, please.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and resubmit.",
      fieldErrors,
    };
  }

  // Always log so submissions show up in Vercel logs as a backup record.
  console.log("[inquiry]", { receivedAt: new Date().toISOString(), ...input });

  const result = await deliverInquiry(input);
  if (!result.ok) {
    console.error("[inquiry] delivery failed:", result.error);
    return {
      status: "error",
      message:
        "We couldn't send your inquiry. Please try again in a minute, or email us directly.",
    };
  }

  return {
    status: "ok",
    message:
      "Thanks — we got your inquiry and will be in touch within one business day.",
  };
}

async function deliverInquiry(
  input: InquiryInput,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from =
    process.env.INQUIRY_FROM_EMAIL ??
    "Seaside Garage <onboarding@resend.dev>";

  if (!apiKey || !to) {
    // Not configured yet — submission is in the logs above, surface that as success
    // so the UX still completes for the customer. Configure RESEND_API_KEY and
    // INQUIRY_TO_EMAIL in the environment to start sending email.
    return { ok: true };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: input.email,
      subject: `New inquiry — ${SERVICE_LABELS[input.service] ?? input.service} — ${input.name}`,
      text: formatPlain(input),
      html: formatHtml(input),
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: message };
  }
}

function formatPlain(input: InquiryInput): string {
  const service = SERVICE_LABELS[input.service] ?? input.service;
  return [
    `New inquiry from ${input.name}`,
    ``,
    `Service: ${service}`,
    `Email: ${input.email}`,
    input.phone ? `Phone: ${input.phone}` : null,
    input.vehicle ? `Vehicle: ${input.vehicle}` : null,
    input.preferredDate ? `Preferred date: ${input.preferredDate}` : null,
    ``,
    input.message,
  ]
    .filter(Boolean)
    .join("\n");
}

function formatHtml(input: InquiryInput): string {
  const service = SERVICE_LABELS[input.service] ?? input.service;
  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#5b6470;font-size:13px;vertical-align:top;">${label}</td><td style="padding:6px 0;font-size:14px;color:#0a1f33;">${esc(value)}</td></tr>`;

  const extras = [
    input.phone ? row("Phone", input.phone) : "",
    input.vehicle ? row("Vehicle", input.vehicle) : "",
    input.preferredDate ? row("Preferred date", input.preferredDate) : "",
  ].join("");

  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0a1f33;">
      <div style="font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#b86c3f;">New inquiry</div>
      <h1 style="margin:8px 0 16px;font-size:22px;">${esc(input.name)} — ${esc(service)}</h1>
      <table style="border-collapse:collapse;margin-bottom:20px;">
        ${row("Email", input.email)}
        ${extras}
      </table>
      <div style="border-top:1px solid #e5e7eb;padding-top:16px;font-size:14px;line-height:1.55;white-space:pre-wrap;">${esc(input.message)}</div>
    </div>
  `;
}
