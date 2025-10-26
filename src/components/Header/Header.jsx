import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openmodel } from "../../store/authslice";
import auth from "../../appwrite/appwrite";
import toast from "react-hot-toast";
import { logout, notupdate } from "../../store/authslice";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); 
  const dispatch = useDispatch();
  const updates = useSelector((state) => state.updation.info);

  const logouthandler = async () => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      await auth.logout();
      dispatch(logout());
      dispatch(notupdate());
      toast.success("Logout successful 👋");
    } catch (err) {
      console.error(err);
      toast.error("Logout failed ❌");
      dispatch(logout());
    } finally {
      setLoading(false); 
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center bg-black px-6 py-4 shadow-md sticky top-0 z-[1000]">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DC7cSktz6E9rKwiXNVX35E9NT8-sMNbKog&s"
          alt="Logo"
          className="h-10 w-auto invert"
        />
      </div>

      {/* Navigation Links */}
      <div
        className={`nav-links flex justify-center items-center gap-6 border-2 border-white rounded-[41px] px-5 py-2 transition-all duration-300 
        max-[500px]:flex-col max-[500px]:absolute max-[500px]:top-[70px] max-[500px]:left-0 max-[500px]:w-full max-[500px]:bg-black 
        max-[500px]:p-5 max-[500px]:rounded-none ${
          isOpen ? "max-[500px]:flex" : "max-[500px]:hidden"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-red-900" : "text-[#ecf0f1]"} text-[16px] font-sans hover:text-[#3498db] transition-colors`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-red-900" : "text-[#ecf0f1]"} text-[16px] font-sans hover:text-[#3498db] transition-colors`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-red-900" : "text-[#ecf0f1]"} text-[16px] font-sans hover:text-[#3498db] transition-colors`
          }
        >
          Contact Us
        </NavLink>
      </div>

      <div className="flex items-center gap-4">
        <div
          onClick={toggleMenu}
          className="hidden max-[500px]:flex flex-col cursor-pointer"
        >
          <span className="w-6 h-[3px] bg-[#ecf0f1] mb-[2px] transition-all"></span>
          <span className="w-6 h-[3px] bg-[#ecf0f1] mb-[2px] transition-all"></span>
          <span className="w-6 h-[3px] bg-[#ecf0f1] transition-all"></span>
        </div>

        <div className="cart flex items-center gap-3 relative">
          <img
            src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
            alt="Cart"
            className="h-[30px] w-auto invert hover:opacity-80 transition-opacity"
          />

          {updates ? (
            <button
              onClick={logouthandler}
              className="relative px-6 py-3 font-bold text-white bg-red-600 rounded-full overflow-hidden transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl hover:scale-105 group flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <span className="absolute inset-0 w-full h-full bg-red-400 opacity-30 blur-2xl animate-pulse rounded-full"></span>
                  <span className="relative z-10">Logout</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={() => dispatch(openmodel("signup"))}
              className="relative px-6 py-3 font-bold text-white bg-green-600 rounded-full overflow-hidden transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl hover:scale-105 group flex items-center justify-center"
            >
              <span className="absolute inset-0 w-full h-full bg-green-400 opacity-30 blur-2xl animate-pulse rounded-full"></span>
              <span className="relative z-10">Login</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
