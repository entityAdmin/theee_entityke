"use client";

import React, { useRef, useState } from "react";
import type { EmailJSResponseStatus } from "@emailjs/browser";
import { FaCalendarAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_qk9qmv6";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_tapzogh";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "aKvvj5-jhk8txeQul";

  // initialize once (idempotent)
  if (publicKey && typeof window !== "undefined" && typeof emailjs.init === "function") {
    try {
      // Safe to call repeatedly - EmailJS ignores duplicate inits
      emailjs.init(publicKey);
    } catch (initErr) {
      // nonfatal: continue, sendForm will accept publicKey as 4th arg if needed
      console.warn("EmailJS init failed:", initErr);
    }
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (!formRef.current) {
      setMessage("Form unavailable. Reload the page and try again.");
      setLoading(false);
      return;
    }

    // Minimal front-end validation
    const nameEl = formRef.current.querySelector('input[name="from_name"]') as HTMLInputElement | null;
    const emailEl = formRef.current.querySelector('input[name="from_email"]') as HTMLInputElement | null;
    if (!nameEl?.value?.trim() || !emailEl?.value?.trim()) {
      setMessage("Please provide your full name and email.");
      setLoading(false);
      return;
    }

    // Add runtime fields
    const dateField = formRef.current.querySelector('input[name="date"]') as HTMLInputElement | null;
    if (dateField) dateField.value = new Date().toLocaleString();

    const replyField = formRef.current.querySelector('input[name="reply_to"]') as HTMLInputElement | null;
    if (replyField) replyField.value = emailEl?.value || "";

      try {
      // Use sendForm. Since we called init(publicKey) above, we can omit the 4th arg.
      // But to be safe if init failed, pass publicKey as 4th param.
      const sendPromise = typeof emailjs.sendForm === 'function'
        ? emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        : Promise.reject(new Error("EmailJS client not available"));

      const res = (await sendPromise) as EmailJSResponseStatus;
      // Log response for debugging
      console.log("EmailJS send result (booking):", res);

      // Some providers return a status; require 200 for success
      const debug = !!process.env.NEXT_PUBLIC_EMAILJS_DEBUG;
      const status = res?.status;
      const text = res?.text;

      if (typeof status !== 'number' || status !== 200) {
        console.error('EmailJS reported non-200 response (booking):', res);
        const details = text || JSON.stringify(res);
        setMessage(`Failed to send. (${details})`);
        if (debug) {
            console.debug('EmailJS raw response (booking):', res);
          }
      } else {
        setMessage("Thanks — request received. We will email to confirm shortly.");
        formRef.current.reset();
      }
    } catch (err) {
      // Log server-side as well (recommended)
      console.error("EmailJS error (booking):", err);
      setMessage("Failed to send. Please try again or email us directly at info@theeentityke.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="grid gap-3"
      aria-busy={loading}
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <FaCalendarAlt className="text-purple-300 w-5 h-5" />
        <div className="text-white/90 font-medium">Choose a time & tell us about your business</div>
      </div>

      <input
        name="from_name"
        placeholder="Full name"
        required
        className="px-3 py-2 rounded-lg bg-black/20 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-400"
        aria-label="Full name"
      />

      <input
        name="from_email"
        type="email"
        placeholder="Email address"
        required
        className="px-3 py-2 rounded-lg bg-black/20 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-400"
        aria-label="Email address"
      />

      <input
        name="phone"
        placeholder="Phone number"
        className="px-3 py-2 rounded-lg bg-black/20 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-400"
        aria-label="Phone number"
      />

      <select
        name="business_type"
        required
        className="px-3 py-2 rounded-lg bg-black/20 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-400"
        aria-label="Business type"
      >
        <option value="">Business type (select)</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Retail">Retail</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>

      <input type="hidden" name="reply_to" value="" />
      <input type="hidden" name="date" value="" />

      <div className="flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform disabled:opacity-60"
          aria-disabled={loading}
        >
          {loading ? "Sending..." : "Request Call"}
        </button>
        <div className="text-sm text-white/70">We respect your privacy — no spam.</div>
      </div>

      {message && <div className="text-sm text-white/80 mt-1">{message}</div>}
    </form>
  );
}
