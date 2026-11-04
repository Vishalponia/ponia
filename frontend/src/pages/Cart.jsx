import React from "react";
import { Link } from "react-router-dom";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowRight,
  FiArrowLeft,
  FiShoppingBag,
  FiTruck,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { ProductThumb } from "../components/ProductVisual";
import CheckoutSteps from "../components/CheckoutSteps";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
    cartCount,
    cartSavings,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-surface px-6 py-16">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
            <FiShoppingBag className="text-3xl text-blue-700" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">
            Your cart is empty
          </h1>

          <p className="mt-3 text-slate-600">
            Add some delicious Ponia'g Hing to get started.
          </p>

          <Link
            to="/our-hing"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800"
          >
            Shop Hing
            <FiArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pb-32 pt-8 sm:pt-12 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <CheckoutSteps current={1} />

        <div className="mb-6 mt-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">
            Your Cart{" "}
            <span className="text-lg font-semibold text-slate-500 sm:text-xl">
              ({cartCount} {cartCount === 1 ? "item" : "items"})
            </span>
          </h1>

          <Link
            to="/our-hing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            <FiArrowLeft />
            Continue shopping
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-4 lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm sm:gap-5 sm:p-5"
              >
                <ProductThumb product={item} className="h-20 w-20 sm:h-24 sm:w-24" />

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="truncate text-base font-bold text-navy sm:text-lg">
                        {item.name}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {item.size} · ₹{item.price} each
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="-mr-1 -mt-1 rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                    >
                      <FiTrash2 />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center overflow-hidden rounded-xl border border-slate-200">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label={`Decrease ${item.name} quantity`}
                        className="flex h-10 w-10 items-center justify-center transition hover:bg-surface"
                      >
                        <FiMinus />
                      </button>

                      <span className="w-9 text-center font-semibold" aria-live="polite">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        aria-label={`Increase ${item.name} quantity`}
                        className="flex h-10 w-10 items-center justify-center transition hover:bg-surface"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <p className="text-lg font-bold text-navy">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-navy">Order Summary</h2>

              <div className="space-y-3 border-b border-slate-100 py-5 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>

                {cartSavings > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>You save</span>
                    <span>₹{cartSavings}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-600">
                  <span>Delivery</span>
                  <span>Confirmed on WhatsApp</span>
                </div>
              </div>

              <div className="flex justify-between py-5 text-xl font-bold text-navy">
                <span>Total</span>
                <span>₹{cartTotal}</span>
              </div>

              <Link
                to="/checkout"
                className="hidden w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800 lg:flex"
              >
                Proceed to Checkout
                <FiArrowRight />
              </Link>

              <div className="mt-5 space-y-3 rounded-xl bg-surface p-4 text-sm text-slate-600">
                <p className="flex items-start gap-2.5">
                  <FaWhatsapp className="mt-0.5 shrink-0 text-lg text-whatsapp" />
                  No online payment needed. You'll confirm the order with us on WhatsApp.
                </p>
                <p className="flex items-start gap-2.5">
                  <FiTruck className="mt-0.5 shrink-0 text-lg text-blue-700" />
                  Delivery charges and timing are shared when we confirm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-4">
          <div>
            <p className="text-xs text-slate-500">Total</p>
            <p className="text-xl font-bold text-navy">₹{cartTotal}</p>
          </div>

          <Link
            to="/checkout"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-700 py-3.5 font-semibold text-white transition hover:bg-blue-800"
          >
            Checkout
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
