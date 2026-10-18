import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiMessageCircle,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const {
    cart,
    cartTotal,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      return;
    }

    const ownerWhatsAppNumber = "919999999999";

    let orderMessage = `🛒 *NEW ORDER - PONIA'G HING*\n\n`;

    orderMessage += `*CUSTOMER DETAILS*\n`;
    orderMessage += `Name: ${customer.name}\n`;
    orderMessage += `Phone: ${customer.phone}\n`;
    orderMessage += `Address: ${customer.address}\n`;
    orderMessage += `City: ${customer.city}\n`;
    orderMessage += `Pincode: ${customer.pincode}\n\n`;

    orderMessage += `*ORDER DETAILS*\n`;

    cart.forEach((item, index) => {
      orderMessage += `\n${index + 1}. ${item.name}`;
      orderMessage += `\nPack: ${item.size}`;
      orderMessage += `\nQuantity: ${item.quantity}`;
      orderMessage += `\nPrice: ₹${item.price}`;
      orderMessage += `\nSubtotal: ₹${item.price * item.quantity}\n`;
    });

    orderMessage += `\n------------------------\n`;
    orderMessage += `*TOTAL: ₹${cartTotal}*\n`;
    orderMessage += `------------------------\n\n`;

    orderMessage += `Please confirm my order. 🙏`;

    const whatsappURL =
      `https://wa.me/${ownerWhatsAppNumber}?text=` +
      encodeURIComponent(orderMessage);

    window.open(whatsappURL, "_blank");

    clearCart();

    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] bg-[#F8F3E9] flex items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-[#351818]">
            No items to checkout
          </h1>

          <Link
            to="/our-hing"
            className="inline-block mt-6 bg-[#8B1E1E] text-white px-7 py-3 rounded-xl font-semibold"
          >
            Shop Now
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-[#F8F3E9] min-h-screen py-16 lg:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-[#8B1E1E] font-semibold mb-8"
        >
          <FiArrowLeft />
          Back to Cart
        </Link>

        <div className="mb-10">

          <p className="text-[#8B1E1E] uppercase tracking-[0.25em] text-sm font-semibold">
            Checkout
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#351818] mt-3">
            Complete Your Order
          </h1>

          <p className="text-gray-600 mt-3">
            Enter your details and send your order directly to us on WhatsApp.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Customer Form */}
          <div className="lg:col-span-2">

            <form
              onSubmit={handleWhatsAppOrder}
              className="bg-white rounded-3xl p-7 md:p-10"
            >

              <h2 className="text-2xl font-bold text-[#351818]">
                Customer Details
              </h2>

              <div className="grid md:grid-cols-2 gap-5 mt-7">

                {/* Name */}
                <div>

                  <label className="block text-sm font-semibold text-[#351818] mb-2">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#8B1E1E]"
                  />

                </div>

                {/* Phone */}
                <div>

                  <label className="block text-sm font-semibold text-[#351818] mb-2">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10 digit mobile number"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#8B1E1E]"
                  />

                </div>

              </div>

              {/* Address */}
              <div className="mt-5">

                <label className="block text-sm font-semibold text-[#351818] mb-2">
                  Full Address *
                </label>

                <textarea
                  name="address"
                  value={customer.address}
                  onChange={handleChange}
                  placeholder="House number, street, area..."
                  rows="4"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#8B1E1E] resize-none"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-5">

                {/* City */}
                <div>

                  <label className="block text-sm font-semibold text-[#351818] mb-2">
                    City *
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={customer.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#8B1E1E]"
                  />

                </div>

                {/* Pincode */}
                <div>

                  <label className="block text-sm font-semibold text-[#351818] mb-2">
                    Pincode *
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    value={customer.pincode}
                    onChange={handleChange}
                    placeholder="6 digit pincode"
                    required
                    pattern="[0-9]{6}"
                    title="Please enter a valid 6 digit pincode"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#8B1E1E]"
                  />

                </div>

              </div>

              {/* WhatsApp Button */}
              <button
                type="submit"
                className="w-full mt-8 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition"
              >
                <FiMessageCircle className="text-xl" />
                Order on WhatsApp
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Your order details will be sent to Ponia'g Hing on WhatsApp.
              </p>

            </form>

          </div>

          {/* Order Summary */}
          <div>

            <div className="bg-white rounded-3xl p-7 sticky top-28">

              <h2 className="text-2xl font-bold text-[#351818]">
                Your Order
              </h2>

              <div className="mt-6 space-y-5">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-4"
                  >

                    <div className="w-16 h-16 rounded-xl bg-[#F8F3E9] flex items-center justify-center p-2 shrink-0">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                      />

                    </div>

                    <div className="flex-1">

                      <p className="font-semibold text-[#351818]">
                        {item.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {item.size} × {item.quantity}
                      </p>

                    </div>

                    <p className="font-semibold text-[#351818]">
                      ₹{item.price * item.quantity}
                    </p>

                  </div>

                ))}

              </div>

              <div className="border-t border-gray-100 mt-6 pt-6">

                <div className="flex justify-between">

                  <span className="text-gray-600">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-[#8B1E1E]">
                    ₹{cartTotal}
                  </span>

                </div>

              </div>

              <div className="bg-[#F8F3E9] rounded-xl p-4 mt-6 flex gap-3">

                <FiCheckCircle className="text-[#8B1E1E] shrink-0 mt-1" />

                <p className="text-sm text-gray-600">
                  After sending the order, our team will contact you to
                  confirm the order and delivery details.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;