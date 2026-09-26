"use client";

import { FormEvent, useState } from "react";

const EMAIL = "info@koshatechnohub.com";
const LIMIT = 180;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "—"}`, "", message].join("\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent("Free consultation")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h2>Book a free consultation</h2>
      <label>
        Full name
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
      </label>
      <label>
        Email address
        <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
      </label>
      <label>
        Phone number
        <input name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
      </label>
      <label>
        Message
        <textarea
          name="message"
          value={message}
          maxLength={LIMIT}
          rows={4}
          required
          onChange={(e) => setMessage(e.target.value.slice(0, LIMIT))}
        />
        <span>{message.length} / {LIMIT}</span>
      </label>
      <button type="submit">Send message</button>
    </form>
  );
}
