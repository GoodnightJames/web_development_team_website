"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/contact/actions";

const initialState: InquiryState = { status: "idle" };

const serviceOptions = [
  { group: "Automotive", options: [
    { value: "automotive-alignment", label: "Laser alignment" },
    { value: "automotive-wheel-repair", label: "Wheel repair" },
    { value: "automotive-mount-balance", label: "Mounting and balancing" },
  ]},
  { group: "Detailing", options: [
    { value: "detailing-maintenance", label: "Maintenance detail" },
    { value: "detailing-correction", label: "Paint correction" },
    { value: "detailing-ceramic", label: "Ceramic coating" },
    { value: "detailing-interior", label: "Interior restoration" },
  ]},
];

export function InquiryForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  if (state.status === "ok") {
    return (
      <div className="rounded-2xl bg-white border border-ocean-900/10 p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-copper-600">
          Inquiry received
        </div>
        <h2 className="mt-3 font-display text-2xl">Thanks for reaching out.</h2>
        <p className="mt-3 text-ocean-900/80">{state.message}</p>
      </div>
    );
  }

  const err = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required error={err.name} />
        <Field label="Email" name="email" type="email" required error={err.email} />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Vehicle (year, make, model)" name="vehicle" />
      </div>

      <div>
        <label className="block text-sm text-ocean-900/80 mb-1.5">
          Service <span className="text-copper-600">*</span>
        </label>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-ocean-900/15 bg-white px-3 py-2.5 text-sm focus:border-ocean-700 focus:outline-none focus:ring-2 focus:ring-ocean-700/20"
        >
          <option value="" disabled>Pick a service…</option>
          {serviceOptions.map((g) => (
            <optgroup key={g.group} label={g.group}>
              {g.options.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </optgroup>
          ))}
          <option value="other">Something else</option>
        </select>
        {err.service && <FieldError>{err.service}</FieldError>}
      </div>

      <Field
        label="Preferred date (optional)"
        name="preferredDate"
        type="date"
      />

      <div>
        <label className="block text-sm text-ocean-900/80 mb-1.5">
          Tell us about the job <span className="text-copper-600">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What's the car, what's been done already, what are you trying to fix or improve?"
          className="w-full rounded-lg border border-ocean-900/15 bg-white px-3 py-2.5 text-sm focus:border-ocean-700 focus:outline-none focus:ring-2 focus:ring-ocean-700/20"
        />
        {err.message && <FieldError>{err.message}</FieldError>}
      </div>

      {state.status === "error" && state.message && (
        <p className="text-sm text-copper-700">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center rounded-full bg-ocean-900 text-sand-50 px-6 py-3 text-sm hover:bg-ocean-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-ocean-900/80 mb-1.5" htmlFor={name}>
        {label}
        {required && <span className="text-copper-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-ocean-900/15 bg-white px-3 py-2.5 text-sm focus:border-ocean-700 focus:outline-none focus:ring-2 focus:ring-ocean-700/20"
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-copper-700">{children}</p>;
}
