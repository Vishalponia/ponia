import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import { EMAIL, PHONE_DISPLAY, PHONE_LINK, whatsappLink } from "../config";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* Contact CTA */}
      <div className="bg-surface px-5 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-sky-50 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-gold/30" />
            <div className="pointer-events-none absolute -right-5 -top-10 h-48 w-48 rounded-full border border-gold/20" />

            <div className="relative grid items-center gap-9 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold-dark">
                    Talk To Us
                  </span>
                  <span className="h-px w-12 bg-gold" />
                </div>

                <h2 className="mt-5 max-w-2xl font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
                  Questions or bulk orders?
                  <span className="block text-gold-dark">
                    We're one message away.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Message us on WhatsApp for orders, bulk enquiries or anything about our hing.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLink("Hi Ponia'g Hing, I'd like to know more about your hing.")}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-sm font-bold text-white transition hover:bg-whatsapp-dark"
                  >
                    <FaWhatsapp className="text-lg" />
                    Chat on WhatsApp
                  </a>
                  <Link
                    to="/our-hing"
                    className="flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-bold text-white transition hover:bg-navy-light"
                  >
                    Shop Hing <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Decorative text instead of icons */}
              <div className="relative hidden min-h-[210px] items-center justify-center lg:flex">
                <div className="absolute right-5 top-3 h-44 w-44 rounded-full border border-gold/30" />
                <div className="absolute right-10 top-8 h-36 w-36 rounded-full border border-gold/40" />

                <div className="relative max-w-xs text-center">
                  <p className="font-serif text-3xl italic leading-snug text-navy">
                    Good Food,
                    <span className="block text-gold-dark">
                      Better Living
                    </span>
                  </p>
                  <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
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
              <Logo size="lg" dark />

              <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/65">
                Premium hing made to bring authentic aroma and flavour to
                everyday Indian cooking.
              </p>

              <div className="mt-6 h-1 w-14 rounded-full bg-gold" />

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-gold/60 px-4 py-2 text-xs font-medium text-gold-light transition duration-300 hover:-translate-y-1 hover:bg-gold hover:text-navy"
                  >
                    {social.label}
                  </a>
                ))}
              </div>

              <p className="mt-7 font-serif text-xl italic text-gold-light">
                Pure Hing. Pure Trust.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-serif text-xl font-bold text-white">Shop</h4>
              <div className="mb-6 mt-3 h-1 w-10 rounded-full bg-gold" />

              <ul className="space-y-5">
                {shopLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="flex items-center justify-between gap-2 text-sm text-blue-100/65 transition hover:text-white"
                    >
                      {item.label}
                      <span className="text-gold" aria-hidden="true">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-serif text-xl font-bold text-white">Company</h4>
              <div className="mb-6 mt-3 h-1 w-10 rounded-full bg-gold" />

              <ul className="space-y-5">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="flex items-center justify-between gap-2 text-sm text-blue-100/65 transition hover:text-white"
                    >
                      {item.label}
                      <span className="text-gold" aria-hidden="true">›</span>
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
              <div className="mb-6 mt-3 h-1 w-10 rounded-full bg-gold" />

              <div className="space-y-5 text-sm text-blue-100/70">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <FaWhatsapp className="text-base text-whatsapp" />
                  {PHONE_DISPLAY}
                </a>

                <a href={PHONE_LINK} className="block transition hover:text-white">
                  Call: {PHONE_DISPLAY}
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="block break-all transition hover:text-white"
                >
                  {EMAIL}
                </a>

                <p>India</p>
              </div>

              <div className="mt-7 grid grid-cols-3 border-t border-white/10 pt-6">
                <div className="px-1 text-center">
                  <p className="font-serif text-lg text-gold-light">01</p>
                  <span className="mt-2 block text-[11px] leading-4 text-blue-100/70">
                    Quality
                  </span>
                </div>

                <div className="border-x border-white/10 px-1 text-center">
                  <p className="font-serif text-lg text-gold-light">02</p>
                  <span className="mt-2 block text-[11px] leading-4 text-blue-100/70">
                    Authentic
                  </span>
                </div>

                <div className="px-1 text-center">
                  <p className="font-serif text-lg text-gold-light">03</p>
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
            <span>Made with care in India</span>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-[#B78627] via-[#F4D78B] to-[#B78627]" />
      </div>
    </footer>
  );
};

export default Footer;