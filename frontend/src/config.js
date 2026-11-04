export const WHATSAPP_NUMBER = "918650030847";
export const PHONE_DISPLAY = "+91 86500 30847";
export const PHONE_LINK = "tel:+918650030847";
export const EMAIL = "hello@poniaghing.com";

export const whatsappLink = (message = "") =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
