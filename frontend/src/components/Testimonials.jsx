import React, { useState } from "react";
import {
  FiStar,
  FiArrowLeft,
  FiArrowRight,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

const Testimonials = () => {
  const reviews = [
    {
      name: "Anjali Sharma",
      location: "New Delhi",
      review:
        "The aroma is amazing! Just a small pinch makes dal and sabzi taste so much better. A wonderful addition to my kitchen.",
      initials: "AS",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Rahul Verma",
      location: "Lucknow",
      review:
        "Finally found a hing with that authentic desi aroma. Ponia'g Hing has become a regular in my kitchen.",
      initials: "RV",
      color: "bg-amber-100 text-amber-700",
    },
    {
      name: "Neha Gupta",
      location: "Jaipur",
      review:
        "Loved the quality and packaging. The flavour is rich, authentic, and you only need a little to make your food delicious.",
      initials: "NG",
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      name: "Amit Agarwal",
      location: "Moradabad",
      review:
        "The traditional aroma reminds me of home-cooked food. A little hing makes a noticeable difference in everyday recipes.",
      initials: "AA",
      color: "bg-sky-100 text-sky-700",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/70 py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <FiMessageSquare className="text-blue-700" size={15} />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
              Customer Testimonials
            </span>
          </div>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            A little hing.
            <br />
            <span className="text-blue-700">
              A lot of love.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            हर रसोई का स्वाद खास बनाने की हमारी कोशिश।
            जानिए Ponia'g Hing के बारे में हमारे ग्राहकों के अनुभव।
          </p>

          {/* Rating summary */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-sm sm:gap-6 sm:px-7">
            <div className="text-left">
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                4.9<span className="text-lg text-slate-400">/5</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Customer rating
              </p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <div className="flex gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={17}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="mt-1.5 text-xs text-slate-500">
                Made for everyday kitchens
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, index) => (
            <article
              key={review.name}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(30,64,175,0.10)] sm:p-8 ${
                index === 1 ? "lg:-translate-y-3" : ""
              }`}
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-50/80 transition-colors group-hover:bg-blue-100/70" />

              <div className="relative flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                      key={star}
                      size={15}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <span className="text-4xl font-serif leading-none text-blue-100">
                  “
                </span>
              </div>

              <p className="relative mt-5 flex-1 text-[15px] leading-7 text-slate-600">
                “{review.review}”
              </p>

              <div className="mt-7 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-bold ${review.color}`}
                  >
                    {review.initials}
                  </div>

                  <div className="min-w-0">
                    <p className="font-bold text-slate-900">
                      {review.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {review.location}
                    </p>
                  </div>

                  <div className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <FiCheckCircle size={17} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Featured review slider */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-xl shadow-slate-900/10 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-amber-400">
                <FiMessageSquare size={16} />
                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  From our customers
                </span>
              </div>

              <p
                key={activeIndex}
                className="mt-5 font-serif text-xl leading-relaxed text-white sm:text-2xl lg:text-3xl"
              >
                “{reviews[activeIndex].review}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 font-bold text-amber-300 ring-1 ring-white/15">
                  {reviews[activeIndex].initials}
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {reviews[activeIndex].name}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-400">
                    {reviews[activeIndex].location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <span className="mr-2 text-sm tabular-nums text-slate-400">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(reviews.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={prevReview}
                aria-label="Previous review"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <FiArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={nextReview}
                aria-label="Next review"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <FiArrowRight size={19} />
              </button>
            </div>
          </div>

          <div className="mt-7 flex gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show review by ${review.name}`}
                aria-pressed={activeIndex === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-10 bg-amber-400"
                    : "w-4 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom trust message */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <span className="h-px w-10 bg-blue-200" />
          <p className="text-sm font-medium text-slate-500">
            Bringing authentic flavour to your everyday meals.
          </p>
          <span className="h-px w-10 bg-blue-200" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;