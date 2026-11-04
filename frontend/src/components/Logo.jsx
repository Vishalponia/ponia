import React from "react";
import { Link } from "react-router-dom";

const sizes = {
  sm: {
    image: "h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14",
    title: "text-lg sm:text-xl lg:text-2xl",
    subtitle: "text-[9px] sm:text-[10px] tracking-[0.3em]",
  },
  lg: {
    image: "h-16 w-16",
    title: "text-3xl",
    subtitle: "text-xs tracking-[0.35em]",
  },
};

const Logo = ({ size = "sm", dark = false, onClick, className = "" }) => {
  const s = sizes[size];

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Ponia'g Hing – Home"
      className={`group inline-flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3 ${className}`}
    >
      <img
        src="/images/poniag-logo-192.png"
        srcSet="/images/poniag-logo-192.png 1x, /images/poniag-logo.png 2x"
        alt=""
        width="56"
        height="56"
        className={`${s.image} shrink-0 rounded-full object-contain shadow-sm ring-1 transition-transform duration-300 group-hover:scale-105 ${
          dark ? "ring-gold/50" : "ring-slate-200"
        }`}
      />

      <span className="flex flex-col leading-none">
        <span
          className={`${s.title} whitespace-nowrap font-extrabold tracking-tight ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          Ponia
          <span className={dark ? "text-gold-light" : "text-blue-700"}>'g</span>
        </span>
        <span
          className={`${s.subtitle} mt-1 font-bold uppercase ${
            dark ? "text-gold-light" : "text-slate-500"
          }`}
        >
          Hathrasi Hing
        </span>
      </span>
    </Link>
  );
};

export default Logo;
