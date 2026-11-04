import React from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../config";
import { useCart } from "../context/CartContext";

const hiddenOn = ["/cart", "/checkout"];

const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const { toast } = useCart();

  if (hiddenOn.includes(pathname) || toast) return null;

  return (
    <a
      href={whatsappLink("Hi Ponia'g Hing, I have a question about your hing.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-green-900/25 transition hover:scale-105 hover:bg-whatsapp-dark sm:bottom-6 sm:right-6"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
