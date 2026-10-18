import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "Thank you for your interest! Newsletter subscription needs to be connected to a backend."
    );
  };

  const shopLinks = [
    { label: "Our Hing", to: "/our-hing" },
    { label: "Premium Hing", to: "/our-hing" },
    { label: "Family Pack", to: "/our-hing" },
  ];

  const companyLinks = [
    { label: "About Us", to: "/about-us" },
    { label: "Why Ponia'g", to: "/why-poniag" },
    { label: "Contact Us", to: "/contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0D2340] text-white">
      {/* Newsletter Section */}
      <div className="bg-[#FAF8F1] px-5 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E9E0C8] bg-gradient-to-r from-[#F5F0E1] via-[#FCFAF4] to-[#F2EBD8] px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D7B66A]/30" />
            <div className="pointer-events-none absolute -right-5 -top-10 h-48 w-48 rounded-full border border-[#D7B66A]/20" />

            <div className="relative grid items-center gap-9 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#B78627]">
                    Stay Connected
                  </span>
                  <span className="h-px w-12 bg-[#D7B66A]" />
                </div>

                <h2 className="mt-5 max-w-2xl font-serif text-3xl font-bold leading-tight text-[#102A4C] sm:text-4xl lg:text-5xl">
                  A little more flavour,
                  <span className="block text-[#B78627]">
                    straight to your inbox.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Get updates, recipes and offers from Ponia'g.
                </p>

                <form
                  onSubmit={handleSubscribe}
                  className="mt-7 flex max-w-xl flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setMessage("");
                    }}
                    placeholder="Your email address"
                    aria-label="Your email address"
                    required
                    className="min-w-0 flex-1 rounded-full border border-slate-300 bg-white px-5 py-4 text-sm text-slate-800 outline-none transition focus:border-[#173A64] focus:ring-2 focus:ring-blue-100"
                  />

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-3 rounded-full bg-[#102A4C] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#1D4775] focus:outline-none focus:ring-2 focus:ring-[#D7B66A] focus:ring-offset-2"
                  >
                    Subscribe <span aria-hidden="true">→</span>
                  </button>
                </form>

                {message && (
                  <p aria-live="polite" className="mt-3 text-xs leading-5 text-slate-600">
                    {message}
                  </p>
                )}
              </div>

              {/* Decorative text instead of icons */}
              <div className="relative hidden min-h-[210px] items-center justify-center lg:flex">
                <div className="absolute right-5 top-3 h-44 w-44 rounded-full border border-[#D7B66A]/30" />
                <div className="absolute right-10 top-8 h-36 w-36 rounded-full border border-[#D7B66A]/40" />

                <div className="relative max-w-xs text-center">
                  <p className="font-serif text-3xl italic leading-snug text-[#102A4C]">
                    Good Food,
                    <span className="block text-[#B78627]">
                      Better Living
                    </span>
                  </p>
                  <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#D7B66A]" />
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                    The authentic taste of India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full border border-white/[0.04]" />
        <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full border border-white/[0.04]" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.15fr] lg:gap-10">
            {/* Brand */}
            <div>
              <Link
                to="/"
                aria-label="Ponia'g Hing home"
                className="group inline-flex items-center gap-3"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#D7B66A] text-[#F4D78B] transition duration-300 group-hover:bg-white/5">
                  <span className="font-serif text-4xl font-bold">P</span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl font-bold tracking-tight text-white">
                    Ponia'g
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-px w-5 bg-[#D7B66A]" />
                    <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#F4D78B]">
                      Hing
                    </span>
                    <span className="h-px w-5 bg-[#D7B66A]" />
                  </div>
                </div>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/65">
                Premium hing made to bring authentic aroma and flavour to
                everyday Indian cooking.
              </p>

              <div className="mt-6 h-1 w-14 rounded-full bg-[#D7B66A]" />

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#D7B66A]/60 px-4 py-2 text-xs font-medium text-[#F4D78B] transition duration-300 hover:-translate-y-1 hover:bg-[#D7B66A] hover:text-[#0D2340]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>

              <p className="mt-7 font-serif text-xl italic text-[#F4D78B]">
                Pure Hing. Pure Trust.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-serif text-xl font-bold text-white">Shop</h4>
              <div className="mb-6 mt-3 h-1 w-10 rounded-full bg-[#D7B66A]" />

              <ul className="space-y-5">
                {shopLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="flex items-center justify-between gap-2 text-sm text-blue-100/65 transition hover:text-white"
                    >
                      {item.label}
                      <span className="text-[#D7B66A]" aria-hidden="true">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-serif text-xl font-bold text-white">Company</h4>
              <div className="mb-6 mt-3 h-1 w-10 rounded-full bg-[#D7B66A]" />

              <ul className="space-y-5">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="flex items-center justify-between gap-2 text-sm text-blue-100/65 transition hover:text-white"
                    >
                      {item.label}
                      <span className="text-[#D7B66A]" aria-hidden="true">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-xl font-bold text-white">
                Get In Touch
              </h4>
              <div className="mb-6 mt-3 h-1 w-10 rounded-full bg-[#D7B66A]" />

              <div className="space-y-5 text-sm text-blue-100/70">
                <a
                  href="mailto:hello@poniaghing.com"
                  className="block break-all transition hover:text-white"
                >
                  hello@poniaghing.com
                </a>

                <a
                  href="tel:+919999999999"
                  className="block transition hover:text-white"
                >
                  +91 99999 99999
                </a>

                <p>India</p>
              </div>

              <div className="mt-7 grid grid-cols-3 border-t border-white/10 pt-6">
                <div className="px-1 text-center">
                  <p className="font-serif text-lg text-[#F4D78B]">01</p>
                  <span className="mt-2 block text-[11px] leading-4 text-blue-100/70">
                    Quality
                  </span>
                </div>

                <div className="border-x border-white/10 px-1 text-center">
                  <p className="font-serif text-lg text-[#F4D78B]">02</p>
                  <span className="mt-2 block text-[11px] leading-4 text-blue-100/70">
                    Authentic
                  </span>
                </div>

                <div className="px-1 text-center">
                  <p className="font-serif text-lg text-[#F4D78B]">03</p>
                  <span className="mt-2 block text-[11px] leading-4 text-blue-100/70">
                    Made with care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#091A30]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-center text-xs leading-6 text-blue-100/50 sm:text-sm md:text-left">
            © {new Date().getFullYear()} Ponia'g Hing. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-blue-100/55 sm:text-sm">
            <Link
              to="/privacy-policy"
              className="transition hover:text-[#F4D78B]"
            >
              Privacy Policy
            </Link>

            <span className="hidden h-4 w-px bg-white/15 sm:block" />

            <Link
              to="/terms-and-conditions"
              className="transition hover:text-[#F4D78B]"
            >
              Terms &amp; Conditions
            </Link>

            <span className="hidden h-4 w-px bg-white/15 sm:block" />

            <span>Made with care in India</span>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-[#B78627] via-[#F4D78B] to-[#B78627]" />
      </div>
    </footer>
  );
};

export default Footer;