import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#F8F3E9] min-h-screen">

      {/* Hero */}
      <section className="bg-[#351818] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-28">

          <p className="text-[#E9C46A] uppercase tracking-[0.3em] text-sm font-semibold">
            Contact · संपर्क
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-5 max-w-4xl leading-tight">
            Let's talk.
            <span className="block text-[#E9C46A]">
              We'd love to hear from you.
            </span>
          </h1>

          <p className="text-2xl font-semibold mt-6">
            बात कीजिए, हमें खुशी होगी।
          </p>

        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Info */}
            <div className="lg:col-span-2">

              <p className="text-[#8B1E1E] uppercase tracking-[0.25em] text-sm font-semibold">
                Get In Touch
              </p>

              <h2 className="text-4xl font-bold text-[#351818] mt-4">
                Have a question?
              </h2>

              <p className="text-gray-600 leading-8 mt-5">
                Whether you want to know more about our products, have a
                business enquiry or simply want to say hello, feel free to
                reach out.
              </p>

              <div className="mt-10 space-y-7">

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8B1E1E] text-white flex items-center justify-center shrink-0">
                    <FiMail />
                  </div>

                  <div>
                    <p className="font-semibold text-[#351818]">
                      Email
                    </p>

                    <p className="text-gray-600 mt-1">
                      hello@poniaghing.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8B1E1E] text-white flex items-center justify-center shrink-0">
                    <FiPhone />
                  </div>

                  <div>
                    <p className="font-semibold text-[#351818]">
                      Phone
                    </p>

                    <p className="text-gray-600 mt-1">
                      +91 99999 99999
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8B1E1E] text-white flex items-center justify-center shrink-0">
                    <FiMapPin />
                  </div>

                  <div>
                    <p className="font-semibold text-[#351818]">
                      Location
                    </p>

                    <p className="text-gray-600 mt-1">
                      India
                    </p>
                  </div>
                </div>

              </div>

              <div className="flex gap-3 mt-10">

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-[#351818] text-white flex items-center justify-center hover:bg-[#8B1E1E] transition"
                >
                  <FiInstagram />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-[#351818] text-white flex items-center justify-center hover:bg-[#8B1E1E] transition"
                >
                  <FiFacebook />
                </a>

              </div>

            </div>

            {/* Form */}
            <div className="lg:col-span-3">

              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-7 md:p-10 shadow-sm"
              >

                <h3 className="text-2xl font-bold text-[#351818]">
                  Send us a message
                </h3>

                <p className="text-gray-500 mt-2">
                  Fill in the details and we'll get back to you.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mt-8">

                  <div>
                    <label className="block text-sm font-semibold text-[#351818] mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#8B1E1E] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#351818] mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#8B1E1E] transition"
                    />
                  </div>

                </div>

                <div className="mt-5">

                  <label className="block text-sm font-semibold text-[#351818] mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#8B1E1E] transition"
                  />

                </div>

                <div className="mt-5">

                  <label className="block text-sm font-semibold text-[#351818] mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="6"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#8B1E1E] transition resize-none"
                  />

                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-[#8B1E1E] hover:bg-[#6F1717] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                >
                  Send Message
                  <FiSend />
                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-[#8B1E1E] font-semibold uppercase tracking-[0.2em] text-sm">
            Ponia'g Hing
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#351818] mt-4">
            Good food starts with good ingredients.
          </h2>

          <p className="text-gray-500 mt-4">
            अच्छा खाना, अच्छे ingredients से शुरू होता है।
          </p>

        </div>
      </section>

    </div>
  );
};

export default Contact;