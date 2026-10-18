import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

function App() {
  return (
    <BrowserRouter>

      <CartProvider>

        <Navbar />

        <main>

          <Routes>

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Pages */}
            <Route
              path="/our-hing"
              element={<OurHing />}
            />

            <Route
              path="/about-us"
              element={<AboutUs />}
            />

            <Route
              path="/why-poniag"
              element={<WhyPoniag />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* Cart */}
            <Route
              path="/cart"
              element={<Cart />}
            />

            {/* Checkout */}
            <Route
              path="/checkout"
              element={<Checkout />}
            />

            {/* Success */}
            <Route
              path="/order-success"
              element={<OrderSuccess />}
            />

          </Routes>

        </main>

        <Footer />

      </CartProvider>

    </BrowserRouter>
  );
}

export default App;