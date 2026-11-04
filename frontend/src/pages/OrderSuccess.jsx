import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiCheckCircle, FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_DISPLAY, whatsappLink } from "../config";
import CheckoutSteps from "../components/CheckoutSteps";

const OrderSuccess = () => {
  const { state } = useLocation();
  const resendURL = state?.whatsappURL ?? whatsappLink("Hi, I just placed an order on the Ponia'g Hing website.");

  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-surface px-4 py-12 sm:px-6">
      <div className="w-full max-w-xl text-center">
        <div className="flex justify-center">
          <CheckoutSteps current={4} />
        </div>

        <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <FiCheckCircle className="text-4xl" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">Almost done!</h1>

        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          WhatsApp has opened with your order. <strong className="text-navy">Tap send</strong> in
          WhatsApp so we receive it, and we'll confirm delivery with you.
        </p>

        <div className="mt-6 rounded-2xl bg-white p-5 text-left shadow-sm">
          <p className="font-semibold text-navy">WhatsApp didn't open?</p>
          <p className="mt-1 text-sm text-slate-600">
            Tap below to open it again, or message us at {PHONE_DISPLAY}.
          </p>
          <a
            href={resendURL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-3.5 font-bold text-white transition hover:bg-whatsapp-dark"
          >
            <FaWhatsapp className="text-xl" />
            Open WhatsApp again
          </a>
        </div>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/our-hing"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-800"
          >
            <FiShoppingBag />
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-xl border border-blue-700 px-7 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
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
