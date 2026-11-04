import React from "react";
import { FiCheck } from "react-icons/fi";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import PageHero from "../components/PageHero";

const OurHing = () => {
  return (
    <div className="min-h-screen bg-surface">
      <PageHero
        eyebrow="Our Collection · हमारी रेंज"
        title="Pure Hing."
        highlight="Powerful Aroma."
        hindi="हर चुटकी में असली स्वाद।"
        text="Carefully selected Hathrasi hing that brings rich aroma and authentic Indian flavour to every dish."
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:mb-10">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Choose your pack</h2>
            <p className="text-slate-600">
              Add to cart, enter your address and send the order on WhatsApp.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {["Premium Quality", "Rich Aroma", "Carefully Selected", "Authentic Taste"].map((item) => (
            <div key={item} className="flex items-center gap-3 md:justify-center">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <FiCheck />
              </div>
              <span className="text-sm font-semibold text-navy sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurHing;
