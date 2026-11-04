import React from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section id="products" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-sky-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
              <FiStar />
              Our Collection
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Find Your <span className="text-blue-700">Perfect Hing.</span>
            </h2>

            <p className="mt-3 text-base text-slate-600">
              आपकी रसोई के लिए सही हींग चुनें। Pick a pack and add it to your cart.
            </p>
          </div>

          <Link
            to="/our-hing"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-bold text-navy transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            View All Products
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-navy px-6 py-8 text-center sm:px-10 sm:py-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
            How ordering works
          </p>

          <div className="mx-auto mt-6 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
            {[
              ["1", "Add to cart", "Choose your packs and quantity."],
              ["2", "Enter address", "Takes less than a minute."],
              ["3", "Send on WhatsApp", "We confirm delivery & payment."],
            ].map(([step, title, text]) => (
              <div key={step} className="flex gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-light font-bold text-navy">
                  {step}
                </span>
                <div>
                  <p className="font-bold text-white">{title}</p>
                  <p className="mt-0.5 text-sm text-blue-100/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
