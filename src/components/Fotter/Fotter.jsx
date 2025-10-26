import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white w-full mt-10">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap justify-between mb-6">
        {/* Section 1: About */}
        <div className="flex-1 min-w-[200px] m-3">
          <div className="w-[120px] h-[60px] flex items-center justify-center mb-4">
            <img
              className="h-[50px] filter invert"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DC7cSktz6E9rKwiXNVX35E9NT8-sMNbKog&s"
              alt="Nike Logo"
            />
          </div>
          <h3 className="text-lg font-semibold uppercase tracking-wide mb-2">
            Just Do It
          </h3>
          <p className="text-sm max-w-xs leading-relaxed">
            Experience the future of athletic innovation with Nike's Immense
            Project.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="flex-1 min-w-[200px] m-3">
          <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
            Quick Links
          </h3>
          <ul>
            {["Home", "Products", "About", "Contact"].map((item) => (
              <li key={item} className="mb-2">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Support */}
        <div className="flex-1 min-w-[200px] m-3">
          <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
            Support
          </h3>
          <ul>
            {[
              "Privacy Policy",
              "Terms of Use",
              "Shipping Info",
              "Returns",
            ].map((item) => (
              <li key={item} className="mb-2">
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm hover:text-gray-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Follow Us */}
        <div className="flex-1 min-w-[200px] m-3">
          <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <a href="#" title="Twitter/X" className="hover:text-gray-400">
              &#xf099;
            </a>
            <a href="#" title="Instagram" className="hover:text-gray-400">
              &#xf16d;
            </a>
            <a href="#" title="TikTok" className="hover:text-gray-400">
              &#xf27d;
            </a>
            <a href="#" title="Facebook" className="hover:text-gray-400">
              &#xf09a;
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 text-center text-xs py-5">
        <p>&copy; 2025 Nike Immense Project. All rights reserved.</p>
        <p className="font-semibold mt-1">
          Developed by{" "}
          <Link to="/developers" className="hover:text-gray-400">
            Fasee Developer
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
