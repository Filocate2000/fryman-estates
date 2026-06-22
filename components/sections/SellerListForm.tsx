"use client";
import { useState, useRef, type ReactNode } from "react";
import Link from "next/link";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

// Property characteristics (multi-select) and privacy options are reproduced
// verbatim from the live Wix seller-list form.
const PROPERTY_OPTIONS = [
  "Pool",
  "Guest House / ADU",
  "Canyon or Tree Views",
  "Gated or Private Drive",
  "Large Lot (Over ½ Acre)",
  "Architectural / Historic Significance",
  "Recently Remodeled",
  "Fixer / Opportunity Property",
];

const PRIVACY_OPTIONS = [
  "Yes, I would only consider discreet introductions to qualified buyers",
  "No, I would be open to traditional marketing",
];

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const inputClass =
  "w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-ink-300 focus:border-gold-500 focus:outline-none focus:ring-0 transition-colors";
const labelClass = "eyebrow block mb-2";

export function SellerListForm({ closing }: { closing: ReactNode }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [tcpaConsent, setTcpaConsent] = useState(false);
  const [phone, setPhone] = useState("");
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!tcpaConsent) {
      setStatus("error");
      setError("Please agree to the contact disclosure to submit the form.");
      return;
    }
    if (!turnstileToken) {
      setStatus("error");
      setError("Please wait for the verification challenge to complete.");
      return;
    }

    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: phone || null,
      property_address: formData.get("property_address"),
      property_characteristics: formData.getAll("property_characteristics"),
      estimated_home_size: formData.get("estimated_home_size"),
      bedrooms: formData.get("bedrooms"),
      bathrooms: formData.get("bathrooms"),
      privacy_preference: formData.get("privacy_preference"),
      message: formData.get("message"),
      tcpa_consent: tcpaConsent,
      turnstile_token: turnstileToken,
    };

    try {
      const res = await fetch("/api/seller-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Submission failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTcpaConsent(false);
      setPhone("");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  }

  if (status === "success") {
    return (
      <div className="bg-navy-800 border border-gold-500/30 p-10 text-center">
        <span className="gold-rule mx-auto mb-6" />
        <h3 className="font-display font-light text-2xl text-white mb-3">Thank you.</h3>
        <p className="text-ink-200">
          Your information has been received in confidence. We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* LEFT column — property details */}
        <div className="space-y-8">
      {/* Property address */}
      <div>
        <label htmlFor="property_address" className={labelClass}>
          Property Address
          <span className="text-gold-500 ml-1">*</span>
          <span className="ml-2 normal-case tracking-normal text-ink-300 text-[11px]">
            (kept private)
          </span>
        </label>
        <input
          id="property_address"
          name="property_address"
          type="text"
          required
          className={inputClass}
        />
      </div>

      {/* Property characteristics (multi-select) */}
      <fieldset>
        <legend className={labelClass}>What best describes your property</legend>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-1">
          {PROPERTY_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="property_characteristics"
                value={opt}
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-gold-500"
              />
              <span className="text-sm text-ink-100 leading-snug group-hover:text-white transition-colors">
                {opt}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Size / beds / baths */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="estimated_home_size" className={labelClass}>
            Estimated Home Size
          </label>
          <input
            id="estimated_home_size"
            name="estimated_home_size"
            type="text"
            placeholder="e.g. 3,200 sq ft"
            className={inputClass}
          />
        </div>
        <div />
        <div>
          <label htmlFor="bedrooms" className={labelClass}>
            Number of Bedrooms
          </label>
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            min="0"
            inputMode="numeric"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bathrooms" className={labelClass}>
            Number of Bathrooms
          </label>
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            min="0"
            step="0.5"
            inputMode="numeric"
            className={inputClass}
          />
        </div>
      </div>

      {/* Privacy preference (required, single choice) */}
      <fieldset>
        <legend className={labelClass}>
          Is privacy important in your decision to sell?
          <span className="text-gold-500 ml-1">*</span>
        </legend>
        <div className="space-y-3 mt-1">
          {PRIVACY_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="radio"
                name="privacy_preference"
                value={opt}
                required
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-gold-500"
              />
              <span className="text-sm text-ink-100 leading-snug group-hover:text-white transition-colors">
                {opt}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Free-text note */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Anything else you&rsquo;d like us to know?
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </div>
        </div>

        {/* RIGHT column — contact + submit */}
        <div className="space-y-8">

      {/* Contact details */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="first_name" className={labelClass}>
            First Name<span className="text-gold-500 ml-1">*</span>
          </label>
          <input id="first_name" name="first_name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="last_name" className={labelClass}>
            Last Name
          </label>
          <input id="last_name" name="last_name" type="text" className={inputClass} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email<span className="text-gold-500 ml-1">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="555-555-5555"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>

      {/* TCPA consent (matches the contact form) */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={tcpaConsent}
            onChange={(e) => setTcpaConsent(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-gold-500"
            required
          />
          <span className="text-xs text-ink-200 leading-relaxed">
            I agree to be contacted by Misraje Real Estate Partners via call, email,
            and text for real estate services. To opt out, you can reply &lsquo;stop&rsquo; at
            any time or reply &lsquo;help&rsquo; for assistance. You can also click the
            unsubscribe link in the emails. Message and data rates may apply. Message
            frequency may vary.{" "}
            <Link href="/privacy" className="text-gold-500 underline hover:text-gold-400">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {siteKey ? (
        <div className="pt-2">
          <Turnstile
            ref={turnstileRef}
            siteKey={siteKey}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
            options={{ theme: "light" }}
          />
        </div>
      ) : (
        <p className="text-xs text-amber-400">
          Turnstile site key missing. Form anti-spam is disabled.
        </p>
      )}

      {error && (
        <p className="text-sm text-red-400 border border-red-400/30 bg-red-400/10 px-4 py-3">
          {error}
        </p>
      )}

      {/* Closing copy, directly above the submit button (verbatim, via page prop) */}
      <p className="text-ink-200 leading-relaxed">{closing}</p>

      <button
        type="submit"
        disabled={status === "submitting" || !turnstileToken || !tcpaConsent}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
        </div>
      </div>
    </form>
  );
}
