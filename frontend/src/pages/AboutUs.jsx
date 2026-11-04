import React from "react";
import {
  FiHeart,
  FiAward,
  FiUsers,
  FiCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const AboutUs = () => {
  return (
    <div className="bg-surface min-h-screen">

      <PageHero
        eyebrow="About Ponia'g · हमारे बारे में"
        title="Bringing tradition"
        highlight="to every kitchen."
        hindi="स्वाद वही, भरोसा नया।"
        text="Ponia'g Hing is built around a simple belief — great food starts with great ingredients."
      />

      {/* Story */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="flex h-[300px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 sm:h-[420px]">
              <img
                src="/images/poniag-logo.png"
                alt="Ponia'g Hathrasi Hing logo"
                className="h-48 w-48 rounded-full shadow-2xl shadow-blue-900/15 sm:h-72 sm:w-72"
              />
            </div>

            <div>
              <p className="text-blue-700 uppercase tracking-[0.25em] text-sm font-semibold">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 leading-tight">
                More than a spice.
                <span className="block text-blue-700">
                  It's a feeling.
                </span>
              </h2>

              <p className="text-slate-600 leading-8 mt-7">
                From traditional Indian kitchens to modern homes, hing has
                always had a special place in our food culture.
              </p>

              <p className="text-slate-600 leading-8 mt-4">
                Ponia'g Hing was created with the idea of making this everyday
                ingredient better — with a focus on quality, aroma, purity
                and a taste that feels authentic.
              </p>

              <p className="text-slate-600 leading-8 mt-4">
                We believe that even the smallest ingredient can make the
                biggest difference.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Quality comes first",
                  "Authenticity in every pack",
                  "Made for everyday Indian cooking",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-700 text-white flex items-center justify-center">
                      <FiCheck size={15} />
                    </div>

                    <span className="font-medium text-navy">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-blue-700 uppercase tracking-[0.25em] text-sm font-semibold">
              What We Believe
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">
              Built on simple values.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            <div className="bg-white p-9 rounded-3xl">
              <FiHeart className="text-blue-700 text-4xl" />

              <h3 className="text-2xl font-bold text-navy mt-6">
                Made With Care
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                Every decision starts with the experience we want to give
                our customers.
              </p>
            </div>

            <div className="bg-white p-9 rounded-3xl">
              <FiAward className="text-blue-700 text-4xl" />

              <h3 className="text-2xl font-bold text-navy mt-6">
                Quality First
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                We believe premium quality should be a standard, not a
                luxury.
              </p>
            </div>

            <div className="bg-white p-9 rounded-3xl">
              <FiUsers className="text-blue-700 text-4xl" />

              <h3 className="text-2xl font-bold text-navy mt-6">
                Customer First
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                Our goal is to build a brand people can trust in their
                everyday kitchen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-gold-light uppercase tracking-[0.25em] text-sm font-semibold">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Make every meal a little more special.
          </h2>

          <p className="text-xl text-white/75 mt-6">
            हर खाने में थोड़ा और स्वाद, हर घर में थोड़ा और भरोसा।
          </p>

          <Link
            to="/our-hing"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 transition hover:bg-blue-50"
          >
            Shop Ponia'g Hing
          </Link>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;