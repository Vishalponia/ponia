import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiChevronDown, FiLock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { PHONE_DISPLAY, whatsappLink } from "../config";
import { ProductThumb } from "../components/ProductVisual";
import CheckoutSteps from "../components/CheckoutSteps";

const CUSTOMER_KEY = "poniag-customer";

const emptyCustomer = {
  name: "",
  phone: "",
  address: "",
  landmark: "",
  city: "",
  pincode: "",
  note: "",
};

const loadCustomer = () => {
  try {
    return { ...emptyCustomer, ...JSON.parse(localStorage.getItem(CUSTOMER_KEY)), note: "" };
  } catch {
    return emptyCustomer;
  }
};

const validate = (c) => {
  const errors = {};
  if (c.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[6-9]\d{9}$/.test(c.phone)) errors.phone = "Enter a valid 10-digit mobile number.";
  if (c.address.trim().length < 8) errors.address = "Please enter your full address.";
  if (c.city.trim().length < 2) errors.city = "Please enter your city.";
  if (!/^\d{6}$/.test(c.pincode)) errors.pincode = "Enter a valid 6-digit pincode.";
  return errors;
};

const buildMessage = (customer, cart, cartTotal) => {
  const lines = [
    "*NEW ORDER - PONIA'G HING*",
    "",
    "*Order*",
    ...cart.map(
      (item, i) =>
        `${i + 1}. ${item.name} (${item.size}) × ${item.quantity} = ₹${item.price * item.quantity}`
    ),
    "",
    `*Total: ₹${cartTotal}*`,
    "",
    "*Deliver to*",
    customer.name.trim(),
    `Phone: ${customer.phone}`,
    customer.address.trim(),
    customer.landmark.trim() ? `Landmark: ${customer.landmark.trim()}` : null,
    `${customer.city.trim()} - ${customer.pincode}`,
    customer.note.trim() ? `\nNote: ${customer.note.trim()}` : null,
    "",
    "Please confirm my order.",
  ];

  return lines.filter((line) => line !== null).join("\n");
};

const inputClass = (error) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-base text-navy outline-none transition placeholder:text-slate-400 focus:ring-4 ${
    error
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-slate-200 focus:border-blue-600 focus:ring-blue-100"
  }`;

const Field = ({ label, name, error, optional, className = "", children }) => (
  <div className={className}>
    <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-navy">
      {label}
      {optional && <span className="ml-1 font-normal text-slate-400">(optional)</span>}
    </label>
    {children}
    {error && (
      <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
        {error}
      </p>
    )}
  </div>
);

const Checkout = () => {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(loadCustomer);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "phone") value = value.replace(/\D/g, "").slice(-10);
    if (name === "pincode") value = value.replace(/\D/g, "").slice(0, 6);

    const next = { ...customer, [name]: value };
    setCustomer(next);
    if (submitted) setErrors(validate(next));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const nextErrors = validate(customer);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }

    const { note: _note, ...saved } = customer;
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(saved));

    const url = whatsappLink(buildMessage(customer, cart, cartTotal));
    const opened = window.open(url, "_blank");

    clearCart();
    navigate("/order-success", { state: { whatsappURL: url } });

    if (!opened) window.location.href = url;
  };

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-surface px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy sm:text-4xl">No items to checkout</h1>
          <Link
            to="/our-hing"
            className="mt-6 inline-block rounded-xl bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    value: customer[name],
    onChange: handleChange,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: inputClass(errors[name]),
  });

  const orderItems = (
    <div className="space-y-4">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <ProductThumb product={item} className="h-14 w-14" />
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-navy">{item.name}</p>
            <p className="text-sm text-slate-500">
              {item.size} × {item.quantity}
            </p>
          </div>
          <p className="font-semibold text-navy">₹{item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-surface pb-32 pt-8 sm:pt-12 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <CheckoutSteps current={2} />

        <Link
          to="/cart"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          <FiArrowLeft />
          Back to cart
        </Link>

        <h1 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Delivery details</h1>
        <p className="mt-2 text-slate-600">
          Fill in your address, then send the order to us on WhatsApp. No online payment needed.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm lg:hidden">
          <button
            type="button"
            onClick={() => setSummaryOpen((open) => !open)}
            aria-expanded={summaryOpen}
            className="flex w-full items-center justify-between px-5 py-4 text-left"
          >
            <span className="font-semibold text-navy">
              Your order · {cartCount} {cartCount === 1 ? "item" : "items"}
            </span>
            <span className="flex items-center gap-2 font-bold text-navy">
              ₹{cartTotal}
              <FiChevronDown
                className={`text-slate-500 transition-transform ${summaryOpen ? "rotate-180" : ""}`}
              />
            </span>
          </button>
          {summaryOpen && <div className="border-t border-slate-100 px-5 py-4">{orderItems}</div>}
        </div>

        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-3 lg:gap-8">
          <form
            id="checkout-form"
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl bg-white p-5 shadow-sm sm:p-8 lg:col-span-2"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" error={errors.name}>
                <input type="text" autoComplete="name" placeholder="e.g. Anjali Sharma" {...fieldProps("name")} />
              </Field>

              <Field label="Mobile number" name="phone" error={errors.phone}>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="10-digit number"
                    {...fieldProps("phone")}
                    className={`${inputClass(errors.phone)} pl-14`}
                  />
                </div>
              </Field>

              <Field label="House no., street, area" name="address" error={errors.address} className="sm:col-span-2">
                <textarea
                  rows="3"
                  autoComplete="street-address"
                  placeholder="House / flat no., street, area"
                  {...fieldProps("address")}
                  className={`${inputClass(errors.address)} resize-none`}
                />
              </Field>

              <Field label="Landmark" name="landmark" optional className="sm:col-span-2">
                <input type="text" placeholder="Near temple, school, etc." {...fieldProps("landmark")} />
              </Field>

              <Field label="City" name="city" error={errors.city}>
                <input type="text" autoComplete="address-level2" placeholder="Your city" {...fieldProps("city")} />
              </Field>

              <Field label="Pincode" name="pincode" error={errors.pincode}>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="6-digit pincode"
                  {...fieldProps("pincode")}
                />
              </Field>

              <Field label="Note for us" name="note" optional className="sm:col-span-2">
                <input type="text" placeholder="Any special request" {...fieldProps("note")} />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-8 hidden w-full items-center justify-center gap-3 rounded-xl bg-whatsapp py-4 text-lg font-bold text-white shadow-md shadow-green-700/20 transition hover:bg-whatsapp-dark lg:flex"
            >
              <FaWhatsapp className="text-2xl" />
              Send Order on WhatsApp
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
              <FiLock className="shrink-0" />
              Your order goes to Ponia'g Hing on WhatsApp ({PHONE_DISPLAY}).
            </p>
          </form>

          <aside className="hidden lg:block">
            <div className="rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-navy">Your order</h2>
              <div className="mt-5">{orderItems}</div>

              <div className="mt-6 flex justify-between border-t border-slate-100 pt-5">
                <span className="text-slate-600">Total</span>
                <span className="text-2xl font-bold text-navy">₹{cartTotal}</span>
              </div>

              <ol className="mt-6 space-y-3 rounded-xl bg-surface p-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-[11px] font-bold text-white">1</span>
                  WhatsApp opens with your order ready.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-[11px] font-bold text-white">2</span>
                  Tap send in WhatsApp.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-[11px] font-bold text-white">3</span>
                  We confirm delivery and payment with you.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-4">
          <div>
            <p className="text-xs text-slate-500">Total</p>
            <p className="text-xl font-bold text-navy">₹{cartTotal}</p>
          </div>
          <button
            type="submit"
            form="checkout-form"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp py-3.5 font-bold text-white transition hover:bg-whatsapp-dark"
          >
            <FaWhatsapp className="text-xl" />
            Send on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
