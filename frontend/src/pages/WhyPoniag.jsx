import React from "react";
import {
  FiShield,
  FiAward,
  FiStar,
  FiHeart,
  FiCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const WhyPoniag = () => {
  const reasons = [
    {
      icon: FiAward,
      title: "Premium Quality",
      hindi: "प्रीमियम गुणवत्ता",
      text: "We focus on delivering a premium hing experience with quality at the heart of everything we do.",
    },
    {
      icon: FiStar,
      title: "Rich Aroma",
      hindi: "बेहतरीन खुशबू",
      text: "A good hing should make you notice its aroma even before the first bite.",
    },
    {
      icon: FiShield,
      title: "Purity You Can Trust",
      hindi: "शुद्धता का भरोसा",
      text: "We believe customers deserve an ingredient they can confidently bring into their kitchen.",
    },
    {
      icon: FiHeart,
      title: "Made With Care",
      hindi: "प्यार से तैयार",
      text: "From selection to packaging, every step is approached with attention and care.",
    },
  ];

  return (
    <div className="bg-surface min-h-screen">

      <PageHero
        eyebrow="Why Ponia'g · क्यों Ponia'g"
        title="Small pinch."
        highlight="Big difference."
        hindi="छोटी सी चुटकी, बड़ा स्वाद।"
        text="Because when it comes to hing, quality isn't just something you taste — it's something you experience."
      />

      {/* Reasons */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-blue-700 uppercase tracking-[0.25em] text-sm font-semibold">
              The Ponia'g Promise
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">
              Why choose Ponia'g?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-7">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group p-8 md:p-10 rounded-3xl bg-surface hover:bg-navy transition duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-bold text-navy group-hover:text-white mt-7 transition">
                    {reason.title}
                  </h3>

                  <p className="text-blue-700 group-hover:text-gold-light font-semibold mt-2 transition">
                    {reason.hindi}
                  </p>

                  <p className="text-slate-600 group-hover:text-white/70 leading-7 mt-4 transition">
                    {reason.text}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Quality process */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <p className="text-blue-700 uppercase tracking-[0.25em] text-sm font-semibold">
                Our Approach
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-4 leading-tight">
                Quality isn't a feature.
                <span className="block text-blue-700">
                  It's our foundation.
                </span>
              </h2>

              <p className="text-slate-600 leading-8 mt-6">
                We want Ponia'g to become a name that feels natural in every
                Indian kitchen — a brand people choose because they trust it.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Careful ingredient selection",
                  "Focus on aroma and authentic taste",
                  "Thoughtful packaging",
                  "Customer-focused quality",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center shrink-0">
                      <FiCheck />
                    </div>

                    <p className="font-semibold text-navy">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            <div className="bg-navy rounded-[2rem] p-10 md:p-14 text-white">

              <p className="text-gold-light uppercase tracking-[0.25em] text-sm font-semibold">
                Ponia'g Philosophy
              </p>

              <blockquote className="text-3xl md:text-4xl font-bold leading-tight mt-7">
                "Good food doesn't need more.
                <span className="text-gold-light">
                  {" "}It needs better.
                </span>"
              </blockquote>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/60">
                  Ponia'g Hing
                </p>

                <p className="font-semibold mt-1">
                  हर चुटकी में भरोसा।
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-700 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Taste the Ponia'g difference.
          </h2>

          <p className="text-lg text-white/75 mt-5">
            खुद फर्क महसूस कीजिए।
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

export default WhyPoniag;