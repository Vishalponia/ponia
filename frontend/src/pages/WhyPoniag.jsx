import React from "react";
import {
  FiShield,
  FiAward,
  FiStar,
  FiHeart,
  FiCheck,
} from "react-icons/fi";

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
    <div className="bg-[#F8F3E9] min-h-screen">

      {/* Hero */}
      <section className="bg-[#351818] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">

          <p className="text-[#E9C46A] uppercase tracking-[0.3em] text-sm font-semibold">
            Why Ponia'g · क्यों Ponia'g
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-5 max-w-4xl leading-tight">
            Small pinch.
            <span className="block text-[#E9C46A]">
              Big difference.
            </span>
          </h1>

          <p className="text-2xl font-semibold mt-6">
            छोटी सी चुटकी, बड़ा स्वाद।
          </p>

          <p className="max-w-2xl text-white/70 text-lg leading-8 mt-7">
            Because when it comes to hing, quality isn't just something you
            taste — it's something you experience.
          </p>

        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-[#8B1E1E] uppercase tracking-[0.25em] text-sm font-semibold">
              The Ponia'g Promise
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#351818] mt-3">
              Why choose Ponia'g?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-7">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group p-8 md:p-10 rounded-3xl bg-[#F8F3E9] hover:bg-[#351818] transition duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-[#8B1E1E] text-white flex items-center justify-center">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#351818] group-hover:text-white mt-7 transition">
                    {reason.title}
                  </h3>

                  <p className="text-[#8B1E1E] group-hover:text-[#E9C46A] font-semibold mt-2 transition">
                    {reason.hindi}
                  </p>

                  <p className="text-gray-600 group-hover:text-white/70 leading-7 mt-4 transition">
                    {reason.text}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Quality process */}
      <section className="py-20 lg:py-28 bg-[#F8F3E9]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <p className="text-[#8B1E1E] uppercase tracking-[0.25em] text-sm font-semibold">
                Our Approach
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#351818] mt-4 leading-tight">
                Quality isn't a feature.
                <span className="block text-[#8B1E1E]">
                  It's our foundation.
                </span>
              </h2>

              <p className="text-gray-600 leading-8 mt-6">
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
                    <div className="w-9 h-9 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center shrink-0">
                      <FiCheck />
                    </div>

                    <p className="font-semibold text-[#351818]">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            <div className="bg-[#351818] rounded-[2rem] p-10 md:p-14 text-white">

              <p className="text-[#E9C46A] uppercase tracking-[0.25em] text-sm font-semibold">
                Ponia'g Philosophy
              </p>

              <blockquote className="text-3xl md:text-4xl font-bold leading-tight mt-7">
                "Good food doesn't need more.
                <span className="text-[#E9C46A]">
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
      <section className="bg-[#8B1E1E] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Taste the Ponia'g difference.
          </h2>

          <p className="text-lg text-white/75 mt-5">
            खुद फर्क महसूस कीजिए।
          </p>

        </div>
      </section>

    </div>
  );
};

export default WhyPoniag;