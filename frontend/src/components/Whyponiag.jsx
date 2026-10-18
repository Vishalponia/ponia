
import React from "react";
import {
  FiAward,
  FiShield,
  FiHeart,
  FiStar,
} from "react-icons/fi";

const WhyPoniag = () => {
  const features = [
    {
      icon: <FiAward />,
      title: "Premium Quality",
      hindi: "प्रीमियम गुणवत्ता",
      description:
        "Only carefully selected hing goes into every Ponia'g pack.",
    },
    {
      icon: <FiStar />,
      title: "Rich Aroma",
      hindi: "बेहतरीन खुशबू",
      description:
        "A powerful, authentic aroma that brings your food to life.",
    },
    {
      icon: <FiShield />,
      title: "Pure & Trusted",
      hindi: "शुद्ध और भरोसेमंद",
      description:
        "Made with quality and care, because your family deserves the best.",
    },
    {
      icon: <FiHeart />,
      title: "Made with Care",
      hindi: "प्यार से तैयार",
      description:
        "Every pack represents our commitment to taste, quality and tradition.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-[#8B1E1E]">
            Why Ponia'g?
          </span>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#351818]">
            Small Pinch.
            <br />
            <span className="text-[#8B1E1E]">
              Big Difference.
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-8">
            A little hing can transform an ordinary dish into something
            unforgettable.
          </p>

          <p className="mt-2 text-gray-500">
            थोड़ी सी हींग, खाने के स्वाद में बड़ा बदलाव।
          </p>

        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-14">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-7 rounded-3xl bg-[#FAF7F0] border border-[#EEE5D5] hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Number */}
              <span className="absolute top-5 right-6 text-xs font-bold text-gray-300">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#8B1E1E]/10 flex items-center justify-center text-[#8B1E1E] text-2xl group-hover:bg-[#8B1E1E] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-[#351818]">
                {feature.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-[#8B1E1E]">
                {feature.hindi}
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-16 lg:mt-20 relative overflow-hidden rounded-[2rem] bg-[#351818] px-7 py-10 sm:px-12 lg:px-16">

          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full border border-white/10" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="text-center md:text-left">
              <p className="text-sm tracking-[0.2em] uppercase text-[#D9A441]">
                The Ponia'g Promise
              </p>

              <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
                Taste you can trust.
              </h3>

              <p className="mt-2 text-white/60">
                स्वाद ऐसा, जिस पर आप भरोसा कर सकें।
              </p>
            </div>

            <button className="shrink-0 px-7 py-3.5 rounded-full bg-white text-[#8B1E1E] font-bold hover:bg-[#F8F3E9] transition">
              Discover Our Hing →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyPoniag;

