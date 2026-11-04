import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiCheckCircle, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const CartToast = () => {
  const { toast, dismissToast, cartCount, cartTotal } = useCart();
  const { pathname } = useLocation();

  if (!toast || pathname === "/cart" || pathname === "/checkout") return null;

  return (
    <div
      key={toast.key}
      role="status"
      className="fixed inset-x-3 bottom-4 z-[60] mx-auto max-w-md animate-toast-in sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <div className="flex items-center gap-3 rounded-2xl bg-navy p-3 pl-4 text-white shadow-2xl shadow-navy/30">
        <FiCheckCircle className="shrink-0 text-xl text-green-400" />

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold">
            {toast.product.name} ({toast.product.size}) added
          </p>
          <p className="text-xs text-blue-100/80">
            {cartCount} {cartCount === 1 ? "item" : "items"} · ₹{cartTotal}
          </p>
        </div>

        <Link
          to="/cart"
          onClick={dismissToast}
          className="shrink-0 rounded-xl bg-gold-light px-4 py-2.5 text-sm font-bold text-navy transition hover:bg-gold"
        >
          View Cart
        </Link>

        <button
          type="button"
          onClick={dismissToast}
          aria-label="Dismiss"
          className="shrink-0 rounded-lg p-1.5 text-blue-100/70 transition hover:bg-white/10 hover:text-white"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default CartToast;
