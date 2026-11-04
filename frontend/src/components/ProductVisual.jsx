




import React from "react";

const productImages = {
  premium: "/images/hing.jpg",
  family: "/images/hing1.jpg",
  classic: "/images/hing2.jpg",
};

const getProductImage = (product) => {
  return product.image || productImages[product.type] || "/images/product-placeholder.png";
};

// Small Product Thumbnail (Cart)
export const ProductThumb = ({
  product,
  className = "h-16 w-16",
}) => {
  const image = getProductImage(product);

  return (
    <div
      className={`${className} flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface p-1.5`}
      aria-hidden="true"
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-contain"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/images/product-placeholder.png";
        }}
      />
    </div>
  );
};

// Main Product Image
const ProductVisual = ({ product }) => {
  const image = getProductImage(product);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

      {/* Circular Background */}
      <div className="absolute h-52 w-52 rounded-full border border-blue-200/80 sm:h-60 sm:w-60" />

      <div className="absolute h-40 w-40 rounded-full bg-blue-100/70 blur-xl sm:h-48 sm:w-48" />

      {/* Actual Product Image */}
      <img
        src={image}
        alt={product.name}
        loading="lazy"
        className="relative z-20 h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/images/product-placeholder.png";
        }}
      />
    </div>
  );
};

export default ProductVisual;
