import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageHero from "../components/PageHero";
import { EMAIL, PHONE_DISPLAY, PHONE_LINK, whatsappLink } from "../config";

const inputClass =
  "w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Ponia'g Hing, I'm ${formData.name.trim()}.\n\n${formData.message.trim()}`;
    window.open(whatsappLink(text), "_blank");
    setFormData({ name: "", message: "" });
  };

  const contacts = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: PHONE_DISPLAY,
      href: whatsappLink(),
      iconClass: "bg-whatsapp",
    },
    { icon: FiPhone, label: "Call us", value: PHONE_DISPLAY, href: PHONE_LINK, iconClass: "bg-blue-700" },
    { icon: FiMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, iconClass: "bg-blue-700" },
    { icon: FiMapPin, label: "Location", value: "India", iconClass: "bg-blue-700" },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <PageHero
        eyebrow="Contact · संपर्क"
        title="Let's talk."
        highlight="We'd love to hear from you."
        hindi="बात कीजिए, हमें खुशी होगी।"
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-navy">Have a question?</h2>
            <p className="mt-3 leading-7 text-slate-600">
              The fastest way to reach us is WhatsApp.
            </p>

            <div className="mt-8 space-y-3">
              {contacts.map(({ icon: Icon, label, value, href, iconClass }) => {
                const content = (
                  <>
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg text-white ${iconClass}`}>
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy">{label}</span>
                      <span className="block break-all text-slate-600">{value}</span>
                    </span>
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { icon: FiInstagram, label: "Instagram", href: "https://www.instagram.com/" },
                { icon: FiFacebook, label: "Facebook", href: "https://www.facebook.com/" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition hover:bg-blue-700"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
              <h3 className="text-2xl font-bold text-navy">Send us a message</h3>
              <p className="mt-1 text-slate-500">Your message will open in WhatsApp, ready to send.</p>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-navy">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-navy">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="5"
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-4 font-bold text-white transition hover:bg-whatsapp-dark"
              >
                <FaWhatsapp className="text-xl" />
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
