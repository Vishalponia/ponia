
import React from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiStar,
  FiShield,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../images/ponia logo.png";

const BrandStory = () => {
  const features = [
    "Carefully selected hing",
    "Distinctive aroma and flavour",
    "Quality-focused preparation",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-50 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: BRAND VISUAL */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">

            {/* MAIN VISUAL */}
            <div className="relative min-h-[430px] overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 p-6 sm:min-h-[540px] sm:rounded-[40px] sm:p-10">

              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-blue-200/80" />
              <div className="absolute -right-5 -top-5 h-44 w-44 rounded-full border border-blue-200/70" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/60 blur-2xl" />

              {/* Brand logo */}
              <div className="relative z-10 flex h-full min-h-[380px] flex-col items-center justify-center sm:min-h-[450px]">

                <div className="flex h-48 w-48 items-center justify-center rounded-[32px] border border-white bg-white/90 p-5 shadow-2xl shadow-blue-900/10 transition duration-500 hover:-translate-y-2 hover:shadow-blue-900/15 sm:h-64 sm:w-64 sm:rounded-[40px] sm:p-7">
                  <img
                    src={logo}
                    alt="Ponia'g Hing brand logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="mt-7 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
                    Our Philosophy
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                    Good food begins
                    <br />
                    with good ingredients.
                  </h3>

                  <p className="mt-3 text-sm font-medium text-slate-500">
                    स्वाद • खुशबू • भरोसा
                  </p>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute left-8 top-12 h-3 w-3 rounded-full bg-blue-500" />
              <div className="absolute bottom-20 right-8 h-2.5 w-2.5 rounded-full bg-sky-500" />
            </div>

            {/* FLOATING QUALITY CARD */}
            <div className="absolute -bottom-7 right-3 z-20 w-[230px] rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-1 sm:right-7 sm:w-[260px] sm:p-6">

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FiShield size={23} />
                </div>

                <div>
                  <p className="text-2xl font-extrabold tracking-tight text-slate-950">
                    Quality
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    At the heart of our brand
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-blue-600">
                <FiStar size={15} fill="currentColor" />
                <p className="text-xs font-semibold text-slate-600">
                  Made with care
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: BRAND STORY */}
          <div className="pt-4 lg:pt-0">

            {/* EYEBROW */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-800 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              The Ponia'g Story
            </span>

            {/* HEADING */}
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A little tradition,
              <br />
              <span className="text-blue-700">
                in every pinch.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ponia'g Hing is built around a simple belief — even the
              smallest ingredients can make a meaningful difference to
              everyday cooking.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-500 sm:text-base">
              हमारी कोशिश है कि हर घर तक ऐसी हींग पहुँचे जो खाने की
              खुशबू, स्वाद और अनुभव को बेहतर बनाए। हम अपने हर पैक में
              गुणवत्ता और भरोसे को प्राथमिकता देते हैं।
            </p>

            {/* FEATURE LIST */}
            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <FiCheck size={17} strokeWidth={2.5} />
                  </div>

                  <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-800 sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/about-us"
              className="group mt-9 inline-flex items-center gap-4 rounded-xl bg-blue-700 py-3 pl-6 pr-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl sm:text-base"
            >
              Discover Our Story

              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 transition-colors group-hover:bg-white/25">
                <FiArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </Link>

            {/* BRAND VALUES */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200 pt-7 sm:gap-6">

              <div>
                <p className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                  Pure
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Quality Focus
                </p>
              </div>

              <div className="border-l border-slate-200 pl-4 sm:pl-6">
                <p className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                  Rich
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Distinct Aroma
                </p>
              </div>

              <div className="border-l border-slate-200 pl-4 sm:pl-6">
                <p className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                  Desi
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Familiar Flavour
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
