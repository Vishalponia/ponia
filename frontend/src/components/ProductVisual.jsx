import React from "react";

const packStyles = {
  premium: {
    pack: "from-slate-950 via-slate-800 to-blue-950",
    light: false,
  },
  family: {
    pack: "from-blue-700 via-blue-800 to-slate-950",
    light: false,
  },
  classic: {
    pack: "from-white via-slate-50 to-blue-100",
    light: true,
  },
};

const HingResin = ({ id }) => (
  <svg viewBox="0 0 120 80" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id={`hingGold-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF1A8" />
        <stop offset="45%" stopColor="#DDAA38" />
        <stop offset="100%" stopColor="#9A5D14" />
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="65" rx="42" ry="7" fill="#0F172A" opacity=".18" />
    <path
      d="M21 54 Q25 38 39 40 L45 27 Q55 18 65 31 L75 28 Q88 32 87 47 L98 53 L91 62 L31 63 Z"
      fill={`url(#hingGold-${id})`}
      stroke="#FDE68A"
      strokeWidth="1.5"
    />
    <path
      d="M43 40 Q51 31 61 40 M65 49 Q73 40 82 47"
      stroke="#FFF5C0"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity=".9"
    />
    <circle cx="29" cy="35" r="2.5" fill="#FDE68A" />
    <circle cx="93" cy="39" r="2" fill="#FDE68A" />
    <circle cx="40" cy="25" r="1.8" fill="#DDAA38" />
    <circle cx="78" cy="22" r="2.5" fill="#EABF58" />
  </svg>
);

export const ProductThumb = ({ product, className = "h-16 w-16" }) => {
  const style = packStyles[product.type] ?? packStyles.classic;

  return (
    <div
      className={`${className} flex shrink-0 items-center justify-center rounded-xl bg-surface p-1.5`}
      aria-hidden="true"
    >
      <div
        className={`flex h-full w-[70%] flex-col items-center justify-center rounded-md border border-white/70 bg-gradient-to-br shadow-md ${style.pack}`}
      >
        <span
          className={`text-[8px] font-black leading-none ${
            style.light ? "text-navy" : "text-white"
          }`}
        >
          P'g
        </span>
        <div className="mt-0.5 h-[40%] w-[80%]">
          <HingResin id={`thumb-${product.id}`} />
        </div>
        <span
          className={`text-[7px] font-bold leading-none ${
            style.light ? "text-blue-800" : "text-blue-100"
          }`}
        >
          {product.size}
        </span>
      </div>
    </div>
  );
};

const ProductVisual = ({ product }) => {
  const style = packStyles[product.type] ?? packStyles.classic;
  const light = style.light;

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-52 w-52 rounded-full border border-blue-200/80 sm:h-60 sm:w-60" />
      <div className="absolute h-40 w-40 rounded-full bg-blue-100/70 blur-xl sm:h-48 sm:w-48" />

      <div
        className={`relative z-20 flex h-[248px] w-[148px] flex-col items-center overflow-hidden rounded-[20px] border border-white/80 bg-gradient-to-br shadow-2xl shadow-blue-950/20 transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1 sm:h-[264px] sm:w-[162px] ${style.pack}`}
      >
        <div className="pointer-events-none absolute inset-y-0 left-3 w-5 bg-white/10 blur-md" />

        <img
          src="/images/poniag-logo-192.png"
          alt=""
          className="mt-4 h-10 w-10 rounded-full ring-2 ring-white/40"
        />

        <p
          className={`mt-2 text-lg font-black tracking-tight ${
            light ? "text-navy" : "text-white"
          }`}
        >
          Ponia<span className={light ? "text-blue-700" : "text-gold-light"}>'g</span>
        </p>

        <div className={`my-2 h-px w-14 ${light ? "bg-blue-300" : "bg-gold/70"}`} />

        <div className="relative h-[56px] w-[88px] sm:h-[64px] sm:w-[100px]">
          <HingResin id={`pack-${product.id}`} />
        </div>

        <p
          className={`mt-1 text-base font-extrabold ${
            light ? "text-blue-800" : "text-white"
          }`}
        >
          {product.name.replace(" Hing", "")}
        </p>

        <p
          className={`mt-0.5 text-[10px] font-medium ${
            light ? "text-slate-600" : "text-blue-100"
          }`}
        >
          हींग • Asafoetida
        </p>

        <div
          className={`absolute bottom-0 flex w-full items-center justify-center py-1.5 text-[11px] font-bold ${
            light ? "bg-blue-700 text-white" : "bg-white/10 text-white"
          }`}
        >
          NET WT. {product.size}
        </div>
      </div>
    </div>
  );
};

export default ProductVisual;
