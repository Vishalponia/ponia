import React, { useState } from "react";
import {
  FiShoppingBag,
  FiMenu,
  FiX,
  FiGlobe,
  FiChevronDown,
} from "react-icons/fi";

import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const { cartCount } = useCart();

  const navLinks = [
    { en: "Home", hi: "होम", path: "/" },
    { en: "Our Hing", hi: "हमारी हींग", path: "/our-hing" },
    { en: "About Us", hi: "हमारे बारे में", path: "/about-us" },
    { en: "Why Ponia'g", hi: "क्यों Ponia'g", path: "/why-poniag" },
    { en: "Contact", hi: "संपर्क", path: "/contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "HI" : "EN"));
  };

  const navClass = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-300
    after:absolute after:bottom-0 after:left-0 after:h-[2px]
    after:bg-blue-600 after:transition-all after:duration-300
    ${
      isActive
        ? "text-blue-700 after:w-full"
        : "text-slate-700 hover:text-blue-700 after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm shadow-slate-200/30">
      <nav className="mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-8">
        {/* MAIN NAVBAR */}
        <div className="flex min-h-[112px] items-center justify-between gap-3 sm:min-h-[132px] lg:min-h-[145px]">

          {/* LEFT: LARGE LOGO + BRAND */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Ponia'g Home"
            className="group flex min-w-0 shrink-0 items-center gap-2 sm:gap-3 lg:gap-4"
          >
            {/* LARGE BRAND LOGO */}
            <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center sm:h-[108px] sm:w-[108px] lg:h-[125px] lg:w-[125px]">
              <img
                src="/images/poniaglogo (2).png"
                alt="Ponia'g Hing Logo"
                className="block h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* BRAND NAME */}
            <div className="flex flex-col justify-center">
              <h1 className="whitespace-nowrap text-xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-2xl lg:text-4xl">
                Ponia<span className="text-blue-700">'g</span>
              </h1>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 sm:text-xs sm:tracking-[0.3em] lg:text-sm">
                Hing
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={navClass}
              >
                {language === "EN" ? link.en : link.hi}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden shrink-0 items-center gap-2 xl:gap-3 lg:flex">
            {/* LANGUAGE */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Change language"
              className="flex items-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
            >
              <FiGlobe className="text-lg" />
              <span>{language}</span>
              <FiChevronDown className="text-xs" />
            </button>

            {/* CART */}
            <Link
              to="/cart"
              aria-label={`Shopping cart, ${cartCount} items`}
              className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:border-blue-200 hover:bg-blue-50"
            >
              <FiShoppingBag className="text-xl text-slate-800 transition group-hover:text-blue-700" />

              {cartCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-700 px-1 text-[10px] font-bold text-white ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* SHOP BUTTON */}
            <Link
              to="/our-hing"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-blue-700 px-3 py-3 text-sm font-bold text-white shadow-md shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg xl:px-5"
            >
              {language === "EN" ? "Shop Now" : "अभी खरीदें"}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="ml-auto flex shrink-0 items-center gap-2 lg:hidden">
            <Link
              to="/cart"
              onClick={closeMenu}
              aria-label={`Shopping cart, ${cartCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-blue-50 sm:h-11 sm:w-11"
            >
              <FiShoppingBag className="text-xl text-slate-800" />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-700 px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition hover:bg-blue-50 hover:text-blue-700 sm:h-11 sm:w-11"
            >
              {isMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="border-t border-slate-100 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                      }`
                    }
                  >
                    {language === "EN" ? link.en : link.hi}
                  </NavLink>
                ))}
              </div>

              {/* MOBILE LANGUAGE + SHOP */}
              <div className="mt-4 flex gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-800 transition hover:bg-blue-50"
                >
                  <FiGlobe className="text-blue-700" />
                  {language === "EN" ? "हिंदी" : "English"}
                </button>

                <Link
                  to="/our-hing"
                  onClick={closeMenu}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                >
                  {language === "EN" ? "Shop Now" : "अभी खरीदें"}
                  →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;