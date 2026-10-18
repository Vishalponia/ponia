import React from "react";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";

const OrderSuccess = () => {
  return (
    <div className="min-h-[75vh] bg-[#F8F3E9] flex items-center justify-center px-6">

      <div className="max-w-xl text-center">

        <div className="w-24 h-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">

          <FiCheckCircle className="text-5xl" />

        </div>

        <p className="text-[#8B1E1E] uppercase tracking-[0.25em] text-sm font-semibold mt-8">
          Order Sent
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#351818] mt-3">
          Thank You!
        </h1>

        <p className="text-gray-600 text-lg leading-8 mt-5">
          Your order details have been prepared for WhatsApp.
          Please make sure the WhatsApp message was sent successfully.
        </p>

        <p className="text-[#351818] font-semibold mt-5">
          Our team will contact you to confirm your order.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

          <Link
            to="/our-hing"
            className="bg-[#8B1E1E] text-white px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <FiShoppingBag />
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="border border-[#8B1E1E] text-[#8B1E1E] px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            Back to Home
            <FiArrowRight />
          </Link>

        </div>

      </div>

    </div>
  );
};

export default OrderSuccess;