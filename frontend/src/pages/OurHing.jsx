import React from "react";
import {
  FiShoppingBag,
  FiStar,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Premium Hing",
    hindi: "प्रीमियम हींग",
    size: "25g",
    price: 149,
    oldPrice: 179,
    tag: "Bestseller",
    image: "/images/hing-25g.png",
  },
  {
    id: 2,
    name: "Classic Hing",
    hindi: "क्लासिक हींग",
    size: "50g",
    price: 249,
    oldPrice: 299,
    tag: "Popular",
    image: "/images/hing-50g.png",
  },
  {
    id: 3,
    name: "Family Pack Hing",
    hindi: "फैमिली पैक हींग",
    size: "100g",
    price: 449,
    oldPrice: 499,
    tag: "Value Pack",
    image: "/images/hing-100g.png",
  },
];

const OurHing = () => {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#F8F3E9] min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#351818] text-white">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#D9A441]/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

          <p className="text-[#E9C46A] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            Our Collection · हमारी रेंज
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Pure Hing.
            <span className="block text-[#E9C46A]">
              Powerful Aroma.
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold mt-5">
            हर चुटकी में असली स्वाद।
          </p>

          <p className="mt-7 text-lg text-white/70 max-w-2xl leading-8">
            Discover Ponia'g Hing — carefully selected premium-quality hing
            made to bring rich aroma and authentic Indian flavour to every dish.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="py-20 lg:py-28 bg-[#F8F3E9]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-[#8B1E1E] uppercase tracking-[0.25em] text-sm font-semibold">
              Shop Ponia'g
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#351818] mt-3">
              Find Your Perfect Hing.
            </h2>

            <p className="text-gray-600 mt-5">
              Choose the pack that fits your kitchen.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
              >

                {/* Image */}
                <div className="relative bg-[#FFFDF8] h-80 flex items-center justify-center p-8">

                  <span className="absolute top-5 left-5 bg-[#8B1E1E] text-white text-xs font-semibold px-4 py-2 rounded-full">
                    {product.tag}
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-[75%] object-contain group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* Details */}
                <div className="p-7">

                  <div className="flex items-center gap-1 text-[#D9A441] text-sm">

                    <FiStar fill="currentColor" />
                    <FiStar fill="currentColor" />
                    <FiStar fill="currentColor" />
                    <FiStar fill="currentColor" />
                    <FiStar fill="currentColor" />

                    <span className="text-gray-500 ml-1">
                      4.9
                    </span>

                  </div>

                  <h3 className="text-2xl font-bold text-[#351818] mt-4">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {product.hindi}
                  </p>

                  <p className="text-sm text-gray-500 mt-3">
                    Pack Size: {product.size}
                  </p>

                  <div className="flex items-center gap-3 mt-5">

                    <span className="text-2xl font-bold text-[#8B1E1E]">
                      ₹{product.price}
                    </span>

                    <span className="text-gray-400 line-through">
                      ₹{product.oldPrice}
                    </span>

                  </div>

                  {/* Add To Cart */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-6 bg-[#8B1E1E] hover:bg-[#6F1717] text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                  >
                    <FiShoppingBag />
                    Add to Cart
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Promise */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Premium Quality",
              "Rich Aroma",
              "Carefully Selected",
              "Authentic Taste",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 justify-center"
              >

                <div className="w-9 h-9 rounded-full bg-[#F8F3E9] text-[#8B1E1E] flex items-center justify-center">
                  <FiCheck />
                </div>

                <span className="font-semibold text-[#351818]">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default OurHing;