import React from "react";
import { Link } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] bg-[#F8F3E9] flex items-center justify-center px-6">

        <div className="text-center">

          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
            <FiShoppingBag className="text-3xl text-[#8B1E1E]" />
          </div>

          <h1 className="text-4xl font-bold text-[#351818] mt-6">
            Your cart is empty
          </h1>

          <p className="text-gray-600 mt-3">
            Add some delicious Ponia'g Hing to your cart.
          </p>

          <Link
            to="/our-hing"
            className="inline-flex items-center gap-2 mt-7 bg-[#8B1E1E] text-white px-7 py-3.5 rounded-xl font-semibold"
          >
            Shop Hing
            <FiArrowRight />
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-[#F8F3E9] min-h-screen py-16 lg:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">

          <p className="text-[#8B1E1E] uppercase tracking-[0.25em] text-sm font-semibold">
            Your Cart
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#351818] mt-3">
            Your Ponia'g Hing
          </h1>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 md:p-7 flex flex-col sm:flex-row gap-6"
              >

                {/* Image */}
                <div className="w-full sm:w-36 h-36 bg-[#F8F3E9] rounded-2xl flex items-center justify-center p-4 shrink-0">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />

                </div>

                {/* Details */}
                <div className="flex-1">

                  <div className="flex justify-between gap-4">

                    <div>

                      <h2 className="text-xl font-bold text-[#351818]">
                        {item.name}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        {item.size}
                      </p>

                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-600 transition"
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                  <p className="text-xl font-bold text-[#8B1E1E] mt-4">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center justify-between mt-5">

                    {/* Quantity */}
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-[#F8F3E9]"
                      >
                        <FiMinus />
                      </button>

                      <span className="w-10 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-[#F8F3E9]"
                      >
                        <FiPlus />
                      </button>

                    </div>

                    <p className="font-bold text-[#351818]">
                      ₹{item.price * item.quantity}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Summary */}
          <div>

            <div className="bg-white rounded-3xl p-7 sticky top-28">

              <h2 className="text-2xl font-bold text-[#351818]">
                Order Summary
              </h2>

              <div className="border-b border-gray-100 py-5 space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="text-green-600">
                    To be confirmed
                  </span>
                </div>

              </div>

              <div className="flex justify-between text-xl font-bold text-[#351818] py-5">
                <span>Total</span>
                <span>₹{cartTotal}</span>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-[#8B1E1E] hover:bg-[#6F1717] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                Proceed to Checkout
                <FiArrowRight />
              </Link>

              <Link
                to="/our-hing"
                className="block text-center text-[#8B1E1E] font-semibold mt-5"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;