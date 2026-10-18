
import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiPlay,
  FiCheck,
  FiStar,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-950">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 -top-32 h-[450px] w-[450px] rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-sky-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        <div className="grid min-h-[calc(100vh-100px)] items-center gap-12 py-14 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:py-16">

          {/* LEFT CONTENT */}
          <div className="relative z-10 mx-auto w-full max-w-2xl lg:mx-0">

            {/* PREMIUM BADGE */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2.5 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 sm:text-sm">
                Discover Ponia'g Hing
              </span>
            </div>

            {/* MAIN HEADING */}
            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-6xl xl:text-7xl">
              Small Pinch.
              <br />

              <span className="relative inline-block text-blue-700">
                Big Flavour.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 320 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8C75 2 190 2 317 7"
                    stroke="#93C5FD"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* HINDI HEADING */}
            <h2 className="mt-7 text-xl font-bold leading-relaxed text-slate-800 sm:text-2xl">
              हर खाने में स्वाद और खुशबू का एहसास।
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Bring your everyday cooking to life with Ponia'g Hing.
              Discover the distinctive aroma and authentic flavour that
              makes every meal feel special.
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-500 sm:text-base">
              Ponia'g Hing के साथ अपने हर व्यंजन को बनाएं और भी खास।
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                to="/our-hing"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl sm:text-base"
              >
                Shop Our Hing

                <FiArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about-us"
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:text-base"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-100">
                  <FiPlay size={15} fill="currentColor" />
                </span>

                Our Story
              </Link>

            </div>

            {/* TRUST POINTS */}
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-100 pt-7 sm:grid-cols-3 sm:gap-3">

              {[
                "Authentic Flavour",
                "Quality Focused",
                "Made with Care",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-semibold text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <FiCheck size={14} strokeWidth={3} />
                  </span>

                  {item}
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT PRODUCT SHOWCASE */}
          <div className="relative mx-auto flex w-full max-w-xl items-center justify-center py-8 lg:justify-end lg:py-0">

            {/* SOFT BLUE HALO */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-blue-100/80 blur-2xl sm:h-[410px] sm:w-[410px] lg:h-[470px] lg:w-[470px]" />

            {/* OUTER CIRCLE */}
            <div className="absolute h-[300px] w-[300px] rounded-full border border-blue-200/80 sm:h-[410px] sm:w-[410px] lg:h-[470px] lg:w-[470px]" />

            {/* INNER CIRCLE */}
            <div className="absolute h-[245px] w-[245px] rounded-full border border-dashed border-blue-200 sm:h-[340px] sm:w-[340px] lg:h-[390px] lg:w-[390px]" />

            {/* PRODUCT STAGE */}
            <div className="relative z-10 flex aspect-[4/5] w-[280px] items-center justify-center sm:w-[350px] lg:w-[400px]">

              {/* Replace this placeholder with your real product image */}
              <div className="relative flex h-[90%] w-[78%] flex-col items-center justify-center overflow-hidden rounded-[32px] border border-white bg-gradient-to-br from-white via-blue-50 to-blue-100 p-5 shadow-2xl shadow-blue-900/10 transition duration-500 hover:-translate-y-2 sm:rounded-[40px] sm:p-8">

                {/* LIGHT EFFECT */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/90 blur-2xl" />

                {/* BRAND EMBLEM */}
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 shadow-lg shadow-blue-700/20 sm:h-20 sm:w-20">
                  <span className="text-3xl font-extrabold text-white sm:text-4xl">
                    P
                  </span>
                </div>

                <p className="relative text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Ponia<span className="text-blue-700">'g</span>
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.4em] text-slate-500 sm:text-sm">
                  Premium Hing
                </p>

                <div className="my-6 h-1 w-16 rounded-full bg-blue-600" />

                {/* FLAVOUR SYMBOL */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-blue-200 bg-white/80 shadow-inner sm:h-28 sm:w-28">
                  <svg
                    viewBox="0 0 100 100"
                    className="h-16 w-16 text-blue-700 sm:h-20 sm:w-20"
                    fill="none"
                    aria-label="Decorative botanical illustration"
                  >
                    <path
                      d="M50 83V29M50 57C29 57 20 42 20 29C39 29 50 40 50 57ZM50 45C50 25 62 15 80 15C80 35 68 45 50 45ZM50 70C65 70 77 61 81 48C63 48 52 57 50 70Z"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M37 83H63"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="mt-6 text-center text-lg font-bold text-slate-900 sm:text-xl">
                  Pure. Rich. Aromatic.
                </p>

                <p className="mt-2 text-center text-xs leading-6 text-slate-500 sm:text-sm">
                  A little pinch, a lot of flavour.
                </p>

              </div>
            </div>

            {/* FLOATING QUALITY CARD */}
            <div className="absolute right-0 top-6 z-20 rounded-2xl border border-white bg-white/95 p-4 shadow-xl shadow-slate-900/10 backdrop-blur sm:right-1 sm:top-10 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FiStar size={21} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Made for your kitchen
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-slate-900 sm:text-base">
                    Everyday Flavour
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING HINDI CARD */}
            <div className="absolute bottom-5 left-0 z-20 rounded-2xl bg-blue-700 px-5 py-4 text-white shadow-xl shadow-blue-900/20 sm:bottom-10 sm:left-0 sm:px-6">
              <p className="text-xs font-medium text-blue-100">
                स्वाद जो याद रहे
              </p>

              <p className="mt-1 text-base font-extrabold sm:text-lg">
                खुशबू हर रसोई की
              </p>
            </div>

            {/* DECORATIVE DOTS */}
            <div className="absolute right-12 top-1/4 h-3 w-3 rounded-full bg-blue-500/60" />
            <div className="absolute bottom-1/4 right-2 h-2 w-2 rounded-full bg-sky-400" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
