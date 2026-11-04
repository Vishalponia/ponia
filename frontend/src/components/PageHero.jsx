import React from "react";

const PageHero = ({ eyebrow, title, highlight, hindi, text }) => (
  <section className="relative overflow-hidden bg-navy text-white">
    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light sm:text-sm">
        {eyebrow}
      </p>

      <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        {title}
        {highlight && <span className="block text-gold-light">{highlight}</span>}
      </h1>

      {hindi && <p className="mt-4 text-xl font-semibold sm:text-2xl">{hindi}</p>}

      {text && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100/75 sm:text-lg sm:leading-8">
          {text}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
