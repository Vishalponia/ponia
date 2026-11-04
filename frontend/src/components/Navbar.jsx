import React, { useState } from "react";
import { FiShoppingBag, FiMenu, FiX, FiGlobe, FiArrowRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";

const navLinks = [
  { en: "Home", hi: "होम", path: "/" },
  { en: "Our Hing", hi: "हमारी हींग", path: "/our-hing" },
  { en: "About Us", hi: "हमारे बारे में", path: "/about-us" },
  { en: "Why Ponia'g", hi: "क्यों Ponia'g", path: "/why-poniag" },
  { en: "Contact", hi: "संपर्क", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const { cartCount } = useCart();

  const closeMenu = () => setIsMenuOpen(false);
  const toggleLanguage = () => setLanguage((prev) => (prev === "EN" ? "HI" : "EN"));
  const t = (link) => (language === "EN" ? link.en : link.hi);

  const navClass = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-sm font-semibold transition-colors
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full
    after:bg-blue-700 after:transition-all after:duration-300
    ${
      isActive
        ? "text-blue-700 after:w-full"
        : "text-slate-700 hover:text-blue-700 after:w-0 hover:after:w-full"
    }`;

  const cartBadge = cartCount > 0 && (
    <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-light px-1 text-[10px] font-extrabold text-navy ring-2 ring-white">
      {cartCount}
    </span>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-[72px] lg:h-20">
          <Logo onClick={closeMenu} />

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={navClass}
              >
                {t(link)}
              </NavLink>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Change language"
              className="flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
            >
              <FiGlobe className="text-lg" />
              {language === "EN" ? "हिंदी" : "English"}
            </button>

            <Link
              to="/cart"
              aria-label={`Shopping cart, ${cartCount} items`}
              className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:border-blue-200 hover:bg-blue-50"
            >
              <FiShoppingBag className="text-xl text-navy transition group-hover:text-blue-700" />
              {cartBadge}
            </Link>

            <Link
              to="/our-hing"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-700/20 transition hover:bg-blue-800"
            >
              {language === "EN" ? "Shop Now" : "अभी खरीदें"}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Link
              to="/cart"
              onClick={closeMenu}
              aria-label={`Shopping cart, ${cartCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-blue-50 sm:h-11 sm:w-11"
            >
              <FiShoppingBag className="text-xl text-navy" />
              {cartBadge}
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-navy transition hover:bg-blue-50 sm:h-11 sm:w-11"
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="border-t border-slate-100 pb-4 pt-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-base font-semibold transition ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                      }`
                    }
                  >
                    {t(link)}
                  </NavLink>
                ))}
              </div>

              <div className="mt-3 flex gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-navy transition hover:bg-blue-50"
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
                  <FiArrowRight />
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
