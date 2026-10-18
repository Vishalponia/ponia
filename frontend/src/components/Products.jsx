
import React from "react";
import {
  FiArrowRight,
  FiShoppingBag,
  FiStar,
  FiCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Premium Hing",
    hindiName: "प्रीमियम हींग",
    size: "25g",
    price: 499,
    oldPrice: 599,
    tag: "Bestseller",
    description:
      "Rich aroma and authentic flavour for your everyday cooking.",
    image: "/images/hing-25g.png",
    type: "premium",
  },
  {
    id: 2,
    name: "Classic Hing",
    hindiName: "क्लासिक हींग",
    size: "10g",
    price: 249,
    oldPrice: 299,
    tag: "Popular Choice",
    description:
      "A distinctive aroma and flavour in every little pinch.",
    image: "/images/hing-10g.png",
    type: "classic",
  },
  {
    id: 3,
    name: "Family Pack Hing",
    hindiName: "फैमिली पैक हींग",
    size: "15g",
    price: 399,
    oldPrice: 499,
    tag: "Great Pick",
    description:
      "Bring the signature taste of hing to your family kitchen.",
    image: "/images/hing-100g.png",
    type: "family",
  },
];

const HingIllustration = ({ type }) => {
  const isPremium = type === "premium";
  const isFamily = type === "family";

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Decorative background */}
      <div className="absolute h-56 w-56 rounded-full border border-blue-200/80 sm:h-64 sm:w-64" />
      <div className="absolute h-44 w-44 rounded-full bg-blue-100/70 blur-xl sm:h-52 sm:w-52" />

      {/* Hing powder bowl */}
      <div className="absolute bottom-[14%] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
        <div className="relative flex h-12 w-24 items-center justify-center overflow-hidden rounded-[50%] border-4 border-white bg-gradient-to-b from-stone-100 to-stone-300 shadow-lg sm:h-14 sm:w-28">
          <div className="absolute inset-x-2 top-1 h-8 rounded-[50%] bg-gradient-to-br from-amber-200 via-amber-500 to-yellow-800" />
          <div className="absolute left-7 top-3 h-2 w-9 rounded-full bg-yellow-200/80 blur-[2px]" />
        </div>
        <div className="h-3 w-20 rounded-b-full bg-slate-300/70 blur-sm" />
      </div>

      {/* Temporary illustrative Hing pack */}
      <div
        className={`relative z-20 flex h-[245px] w-[158px] flex-col items-center overflow-hidden rounded-[22px] border border-white/80 bg-gradient-to-br shadow-2xl shadow-blue-950/20 transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1 sm:h-[275px] sm:w-[178px] ${
          isPremium
            ? "from-slate-950 via-slate-800 to-blue-950"
            : isFamily
            ? "from-blue-700 via-blue-800 to-slate-950"
            : "from-white via-slate-50 to-blue-100"
        }`}
      >
        {/* Package shine */}
        <div className="pointer-events-none absolute inset-y-0 left-3 w-5 bg-white/10 blur-md" />

        <div
          className={`mt-5 flex h-10 w-10 items-center justify-center rounded-full border ${
            isClassic
              ? "border-blue-200 bg-white text-blue-800"
              : "border-white/30 bg-white/10 text-white"
          }`}
        >
          <span className="text-xl font-black">P</span>
        </div>

        <p
          className={`mt-3 text-xl font-black tracking-tight ${
            type === "classic" ? "text-slate-950" : "text-white"
          }`}
        >
          Ponia<span className="text-sky-400">'g</span>
        </p>

        <p
          className={`mt-1 text-[9px] font-bold uppercase tracking-[0.3em] ${
            type === "classic" ? "text-slate-500" : "text-blue-200"
          }`}
        >
          Premium Spices
        </p>

        <div
          className={`my-3 h-px w-16 ${
            type === "classic" ? "bg-blue-300" : "bg-sky-300/70"
          }`}
        />

        {/* Asafoetida / Hing powder illustration */}
        <div className="relative flex h-[66px] w-[100px] items-center justify-center sm:h-[76px] sm:w-[112px]">
          <svg
            viewBox="0 0 120 80"
            className="h-full w-full"
            aria-label="Illustration of golden hing resin and powder"
          >
            <defs>
              <linearGradient id={`hingGold-${type}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF1A8" />
                <stop offset="45%" stopColor="#DDAA38" />
                <stop offset="100%" stopColor="#9A5D14" />
              </linearGradient>
            </defs>

            <ellipse cx="60" cy="65" rx="42" ry="7" fill="#0F172A" opacity=".18" />

            <path
              d="M21 54 Q25 38 39 40 L45 27 Q55 18 65 31 L75 28 Q88 32 87 47 L98 53 L91 62 L31 63 Z"
              fill={`url(#hingGold-${type})`}
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
        </div>

        <p
          className={`mt-1 text-lg font-extrabold ${
            type === "classic" ? "text-blue-800" : "text-white"
          }`}
        >
          {isFamily ? "Family Pack" : isPremium ? "Premium Hing" : "Classic Hing"}
        </p>

        <p
          className={`mt-1 text-[10px] font-medium ${
            type === "classic" ? "text-slate-600" : "text-blue-100"
          }`}
        >
          हींग • Asafoetida
        </p>

        <div
          className={`absolute bottom-0 flex w-full items-center justify-center py-2 text-xs font-bold ${
            type === "classic"
              ? "bg-blue-700 text-white"
              : "bg-white/10 text-white"
          }`}
        >
          NET WT. {isPremium ? "25g" : isFamily ? "15g" : "10g"}
        </div>
      </div>

      {/* Floating powder detail */}
      <div className="absolute right-[8%] top-[19%] h-3 w-3 rounded-full bg-amber-400 shadow-sm" />
      <div className="absolute left-[12%] top-[36%] h-2 w-2 rounded-full bg-blue-400" />
    </div>
  );
};

const isClassic = false;

const Products = () => {
  const cart = useCart();
  const addToCart = cart?.addToCart;

  const handleAddToCart = (product) => {
    if (!addToCart) {
      console.error(
        "addToCart is not available in CartContext. Connect this button to your existing cart action."
      );
      return;
    }

    addToCart({
      ...product,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-sky-50 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADING */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-800 sm:text-sm">
              <FiStar />
              Our Collection
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find Your
              <br className="sm:hidden" />{" "}
              <span className="text-blue-700">Perfect Hing.</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              आपकी रसोई के लिए सही हींग चुनें।
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Explore the Ponia'g collection and find the right pack for
              your everyday cooking.
            </p>
          </div>

          <Link
            to="/our-hing"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            View All Products
            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10"
            >
              {/* PRODUCT IMAGE AREA */}
              <div className="relative h-[330px] overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/70 to-sky-100/80 sm:h-[350px]">
                <span className="absolute left-5 top-5 z-30 rounded-full bg-blue-700 px-3.5 py-2 text-[11px] font-bold tracking-wide text-white shadow-md shadow-blue-900/15">
                  {product.tag}
                </span>

                {/* Use the temporary hing illustration until real product photos are ready */}
                <HingIllustration type={product.type} />

                <div className="absolute bottom-4 right-4 z-30 rounded-lg border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
                  {product.size} pack
                </div>
              </div>

              {/* PRODUCT INFORMATION */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} size={13} fill="currentColor" />
                  ))}
                  <span className="ml-1 text-xs font-semibold text-slate-500">
                    Product highlight
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-blue-700">
                  {product.hindiName}
                </p>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                {/* PRICE */}
                <div className="mt-5 flex items-end justify-between gap-3 border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Pack Size
                    </p>
                    <p className="mt-1 font-bold text-slate-800">
                      {product.size}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-2xl font-extrabold text-slate-950">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-slate-400 line-through">
                        ₹{product.oldPrice}
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-semibold text-blue-700">
                      You save ₹{product.oldPrice - product.price}
                    </p>
                  </div>
                </div>

                {/* ADD TO CART */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-3.5 font-bold text-white shadow-md shadow-blue-700/15 transition duration-300 hover:bg-blue-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  <FiShoppingBag size={18} />
                  Add to Cart
                  <FiArrowRight className="ml-auto transition-transform group-hover:translate-x-1" />
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                  <FiCheck className="text-blue-600" />
                  Explore authentic hing for your kitchen
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-slate-950 px-6 py-8 text-center sm:px-10 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
            Ponia'g Hing
          </p>

          <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            A Little Pinch. A Lasting Impression.
          </h3>

          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            हर चुटकी में स्वाद, हर पैक में भरोसा।
          </p>

          <Link
            to="/our-hing"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-800 transition hover:bg-blue-50"
          >
            Explore Collection
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
