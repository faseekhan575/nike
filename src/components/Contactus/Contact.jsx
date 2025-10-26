import React from "react";



function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Logo Section */}
      <div className="mb-10 text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="Nike Logo"
          className="h-16 mx-auto mb-4 invert"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Contact <span className="text-[#e50914]">Nike</span>
        </h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
          We’re here to help you with any questions about Nike products, orders,
          or membership. Reach out to our team — we’ll make sure you get the
          support you deserve.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl text-center mb-16">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-[#e50914]">Customer Support</h2>
          <p className="text-gray-400 text-sm">
            For questions about your order, returns, or product details.
          </p>
          <p className="mt-2 text-gray-200 font-medium">support@nike.com</p>
          <p className="text-gray-200 font-medium">+1 (800) 806-6453</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-[#e50914]">Corporate Office</h2>
          <p className="text-gray-400 text-sm">
            Nike World Headquarters <br /> One Bowerman Drive, Beaverton, OR 97005, USA
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-[#e50914]">Follow Us</h2>
          <div className="flex justify-center gap-6 mt-3">
            <a href="#" className="hover:text-[#3498db] transition">
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#1da1f2] transition">
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#3b5998] transition">
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-[#ff0000] transition">
              <i className="fa-brands fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-[#111] w-full max-w-3xl rounded-2xl p-8 shadow-lg border border-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#e50914]">
          Send Us a Message
        </h2>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#e50914]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#e50914]"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-[#e50914]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#e50914] py-3 rounded-lg font-semibold hover:bg-[#ff1a1a] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Note */}
      <p className="text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} Nike, Inc. All Rights Reserved.
      </p>
    </div>
  );
}

export default Contact;
