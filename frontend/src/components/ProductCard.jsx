import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiStar, FiMinus, FiPlus, FiArrowRight } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import ProductVisual from "./ProductVisual";

const ProductCard = ({ product }) => {
  const { addToCart, increaseQuantity, decreaseQuantity, getQuantity } = useCart();
  const quantity = getQuantity(product.id);
  const savings = product.oldPrice - product.price;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10">
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/70 to-sky-100/80 sm:h-[300px]">
        <span className="absolute left-4 top-4 z-30 rounded-full bg-blue-700 px-3 py-1.5 text-[11px] font-bold tracking-wide text-white shadow-md">
          {product.tag}
        </span>

        {savings > 0 && (
          <span className="absolute right-4 top-4 z-30 rounded-full bg-gold-light px-3 py-1.5 text-[11px] font-bold text-navy shadow-md">
            Save ₹{savings}
          </span>
        )}

        <ProductVisual product={product} />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
              {product.name}
            </h3>
            <p className="mt-0.5 text-sm font-semibold text-blue-700">
              {product.hindiName}
            </p>
          </div>

          <span className="shrink-0 rounded-lg bg-surface px-2.5 py-1 text-sm font-bold text-navy">
            {product.size}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {[1, 2, 3, 4, 5].map((star) => (
            <FiStar key={star} size={13} fill="currentColor" />
          ))}
          <span className="ml-1 text-xs font-semibold text-slate-500">4.9</span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {product.description}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-navy">₹{product.price}</span>
          <span className="text-sm text-slate-400 line-through">₹{product.oldPrice}</span>
        </div>

        {quantity === 0 ? (
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-3.5 font-bold text-white shadow-md shadow-blue-700/15 transition hover:bg-blue-800 active:scale-[0.98]"
          >
            <FiShoppingBag size={18} />
            Add to Cart
          </button>
        ) : (
          <div className="mt-4 flex gap-2">
            <div className="flex items-center overflow-hidden rounded-xl border border-blue-200 bg-blue-50">
              <button
                type="button"
                onClick={() => decreaseQuantity(product.id)}
                aria-label={`Decrease ${product.name} quantity`}
                className="flex h-12 w-11 items-center justify-center text-blue-800 transition hover:bg-blue-100"
              >
                <FiMinus />
              </button>
              <span className="w-8 text-center font-bold text-navy" aria-live="polite">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => increaseQuantity(product.id)}
                aria-label={`Increase ${product.name} quantity`}
                className="flex h-12 w-11 items-center justify-center text-blue-800 transition hover:bg-blue-100"
              >
                <FiPlus />
              </button>
            </div>

            <Link
              to="/cart"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy font-bold text-white transition hover:bg-navy-light"
            >
              View Cart
              <FiArrowRight />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
