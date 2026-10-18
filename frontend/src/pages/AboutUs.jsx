import React from "react";
import {
  FiHeart,
  FiAward,
  FiUsers,
  FiCheck,
} from "react-icons/fi";

const AboutUs = () => {
  return (
    <div className="bg-[#F8F3E9] min-h-screen">

      {/* Hero */}
      <section className="bg-[#351818] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">

          <p className="text-[#E9C46A] uppercase tracking-[0.3em] text-sm font-semibold">
            About Ponia'g · हमारे बारे में
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-5 max-w-4xl leading-tight">
            Bringing tradition
            <span className="text-[#E9C46A]"> to every kitchen.</span>
          </h1>

          <p className="text-2xl font-semibold mt-6">
            स्वाद वही, भरोसा नया।
          </p>

          <p className="max-w-2xl text-white/70 text-lg leading-8 mt-7">
            Ponia'g Hing is built around a simple belief — great food starts
            with great ingredients.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="rounded-[2rem] overflow-hidden h-[500px]">
              <img
                src="/images/hing-story.jpg"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-[#8B1E1E] uppercase tracking-[0.25em] text-sm font-semibold">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#351818] mt-4 leading-tight">
                More than a spice.
                <span className="block text-[#8B1E1E]">
                  It's a feeling.
                </span>
              </h2>

              <p className="text-gray-600 leading-8 mt-7">
                From traditional Indian kitchens to modern homes, hing has
                always had a special place in our food culture.
              </p>

              <p className="text-gray-600 leading-8 mt-4">
                Ponia'g Hing was created with the idea of making this everyday
                ingredient better — with a focus on quality, aroma, purity
                and a taste that feels authentic.
              </p>

              <p className="text-gray-600 leading-8 mt-4">
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
                    <div className="w-7 h-7 rounded-full bg-[#8B1E1E] text-white flex items-center justify-center">
                      <FiCheck size={15} />
                    </div>

                    <span className="font-medium text-[#351818]">
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
      <section className="py-20 lg:py-28 bg-[#F8F3E9]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-[#8B1E1E] uppercase tracking-[0.25em] text-sm font-semibold">
              What We Believe
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#351818] mt-3">
              Built on simple values.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            <div className="bg-white p-9 rounded-3xl">
              <FiHeart className="text-[#8B1E1E] text-4xl" />

              <h3 className="text-2xl font-bold text-[#351818] mt-6">
                Made With Care
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Every decision starts with the experience we want to give
                our customers.
              </p>
            </div>

            <div className="bg-white p-9 rounded-3xl">
              <FiAward className="text-[#8B1E1E] text-4xl" />

              <h3 className="text-2xl font-bold text-[#351818] mt-6">
                Quality First
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                We believe premium quality should be a standard, not a
                luxury.
              </p>
            </div>

            <div className="bg-white p-9 rounded-3xl">
              <FiUsers className="text-[#8B1E1E] text-4xl" />

              <h3 className="text-2xl font-bold text-[#351818] mt-6">
                Customer First
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                Our goal is to build a brand people can trust in their
                everyday kitchen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#8B1E1E] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-[#E9C46A] uppercase tracking-[0.25em] text-sm font-semibold">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Make every meal a little more special.
          </h2>

          <p className="text-xl text-white/75 mt-6">
            हर खाने में थोड़ा और स्वाद, हर घर में थोड़ा और भरोसा।
          </p>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;