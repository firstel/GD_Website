"use client";

import { useState } from "react";
import Link from "next/link";
import { validateForm, FormData, ValidationErrors } from "@/lib/validation";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    interest: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    // Validate form
    const { isValid, errors: validationErrors } = validateForm(form);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    if (!form.consent) return;

    setFormState("submitting");

    try {
      const res = await fetch("https://formspree.io/f/mojkybba", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          company: form.company,
          interest: form.interest,
          message: form.message,
        }),
      });
      if (res.ok) setFormState("success");
      else setFormState("error");
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#00B341]/10 flex items-center justify-center text-3xl mb-4">
          ✅
        </div>
        <h2 className="text-xl font-black text-gray-900 mb-2">Message sent!</h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          Scott will follow up within 2 business days. In the meantime, feel
          free to browse the full catalog.
        </p>
        <Link
          href="/#projects"
          className="mt-6 inline-block bg-[#00B341] text-white font-black text-sm px-6 py-3 rounded-full hover:bg-[#009935] transition-colors"
        >
          Browse the catalog
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-lg font-black text-gray-900 mb-1">
        Start a licensing conversation
      </h2>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        Fill out the form and Scott will follow up within 2 business days.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Jane"
            className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341] ${
              errors.firstName ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Smith"
            className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341] ${
              errors.lastName ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
          Work email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@yourcompany.com"
          className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341] ${
            errors.email ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Games Inc."
          className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341] ${
            errors.company ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.company && (
          <p className="text-red-500 text-xs mt-1">{errors.company}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
          I&apos;m interested in
        </label>
        <select
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className={`w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341] appearance-none bg-white ${
            errors.interest ? "border-red-400" : "border-gray-200"
          }`}
        >
          <option value="">Select one...</option>
          <option value="specific-title">Licensing a specific title</option>
          <option value="full-catalog">Exploring the full catalog</option>
          <option value="mobile">A mobile publishing deal</option>
          <option value="retail">A retail / distribution partnership</option>
          <option value="other">Something else</option>
        </select>
        {errors.interest && (
          <p className="text-red-500 text-xs mt-1">{errors.interest}</p>
        )}
      </div>

      <div className="mb-5">
        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
          Message{" "}
          <span className="normal-case font-normal tracking-normal">
            (optional)
          </span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us a bit about your platform or what you're looking for..."
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B341]/30 focus:border-[#00B341] resize-none"
        />
      </div>

      <div className="flex items-start gap-3 mb-5">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
          className="mt-0.5 accent-[#00B341]! cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="text-gray-500 text-xs leading-relaxed cursor-pointer"
        >
          I&apos;m happy to be contacted about licensing opportunities from
          Gamers Digital.
        </label>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!form.consent || formState === "submitting"}
        className="w-full bg-[#00B341] text-white font-black text-sm py-3 rounded-lg hover:bg-[#009935] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? "Sending..." : "Send inquiry"}
      </button>

      {formState === "error" && (
        <p className="text-red-500 text-xs text-center mt-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <p className="text-gray-400 text-xs text-center mt-3 leading-relaxed">
        No spam, no pressure. Just a conversation about what might work.
      </p>
    </>
  );
}
