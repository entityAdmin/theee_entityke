"use client";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const setField = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const user_id = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!service_id || !template_id || !user_id) {
        setMessage("Email not configured. Please contact us directly.");
        setLoading(false);
        return;
      }

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        business_type: form.business,
        message: `Requesting discovery call for ${form.business}`
      };

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_id, template_id, user_id, template_params: templateParams })
      });

      if (!res.ok) throw new Error("Email service error");

      setMessage("Thanks — request received. We will email to confirm shortly.");
      setForm({ name: "", email: "", phone: "", business: "" });
    } catch (err) {
      console.error(err);
      setMessage("Failed to send. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <div className="flex items-center gap-3">
        <FaCalendarAlt className="text-purple-300 w-5 h-5" />
        <div className="text-white/90 font-medium">Choose a time & tell us about your business</div>
      </div>

      <input
        name="name"
        value={form.name}
        onChange={(e) => setField("name", e.target.value)}
        placeholder="Full name"
        required
        className="px-3 py-2 rounded-lg bg-black/20 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-400"
      />

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={(e) => setField("email", e.target.value)}
        placeholder="Email address"
        required
        className="px-3 py-2 rounded-lg bg-black/20 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-400"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={(e) => setField("phone", e.target.value)}
        placeholder="Phone number"
        className="px-3 py-2 rounded-lg bg-black/20 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-400"
      />

      <select
        name="business"
        value={form.business}
        onChange={(e) => setField("business", e.target.value)}
        required
        className="px-3 py-2 rounded-lg bg-black/20 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="">Business type (select)</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Retail">Retail</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>

      <div className="flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform"
        >
          {loading ? "Sending..." : "Request Call"}
        </button>
        <div className="text-sm text-white/70">We respect your privacy — no spam.</div>
      </div>

      {message && <div className="text-sm text-white/80 mt-1">{message}</div>}
    </form>
  );
}
