import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CartToast from "./components/CartToast";
import WhatsAppButton from "./components/WhatsAppButton";

import Hero from "./components/Hero";
import Products from "./components/Products";
import BrandStory from "./components/BrandStory";
import Testimonials from "./components/Testimonials";

import OurHing from "./pages/OurHing";
import AboutUs from "./pages/AboutUs";
import WhyPoniag from "./pages/WhyPoniag";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

import { CartProvider } from "./context/CartContext";

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <BrandStory />
      <Testimonials />
    </>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-surface px-6 text-center">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 rounded-xl bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
      >
        Back to Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-hing" element={<OurHing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/why-poniag" element={<WhyPoniag />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <CartToast />
        <WhatsAppButton />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
