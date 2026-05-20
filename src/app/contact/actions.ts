"use server";

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

const SERVICES = new Set([
  "automotive-alignment",
  "automotive-wheel-repair",
  "automotive-mount-balance",
  "detailing-maintenance",
  "detailing-correction",
  "detailing-ceramic",
  "detailing-interior",
  "other",
]);

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
  if (!input.service || !SERVICES.has(input.service))
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

  // TODO: wire up email delivery (Resend / SendGrid) or a CRM webhook.
  // For now, log so we can verify locally and have a hook to replace.
  console.log("[inquiry]", {
    receivedAt: new Date().toISOString(),
    ...input,
  });

  return {
    status: "ok",
    message:
      "Thanks — we got your inquiry and will be in touch within one business day.",
  };
}
