import React, { useState, useEffect } from "react"; 
import { useDispatch } from "react-redux";
import { openmodel } from "../../store/authslice";

function Startanimation() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5500); 
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const openlogin = () => {
    setShow(false); // close popup
    dispatch(openmodel("login")); 
  };

  const opensignup = () => {
    setShow(false); // close popup
    dispatch(openmodel("signup")); 
  };

  if (!show) return null;

  return (
    <>
      {/* BACKGROUND OVERLAY */}
      <div
        className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-lg backdrop-saturate-150 transition-all duration-700 animate-fadeIn"
        onClick={handleClose}
      />

      {/* MAIN CARD */}
      <div className="fixed z-[1000] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white/80 backdrop-blur-2xl border border-white/30 shadow-[0_0_80px_rgba(0,0,0,0.2)] rounded-3xl p-8 animate-rise opacity-0 text-center">
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-black via-gray-700 to-black opacity-10 blur-2xl"></div>

        {/* Nike Logo */}
        <div className="flex justify-center mb-5 relative">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="h-10 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] animate-logoPulse"
          />
        </div>

        {/* Smiley */}
        <div className="text-5xl mb-2 animate-wiggle">😊</div>

        {/* Headings */}
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
          Unlock Your 5% Off
        </h2>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          Log in or sign up now and step into the exclusive zone.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="relative overflow-hidden px-6 py-2 rounded-full bg-black text-white font-bold tracking-wide group transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={openlogin}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-700 via-white to-gray-700 opacity-0 group-hover:opacity-20 blur-xl transition-all"></span>
            Login
          </button>

          <button
            className="relative overflow-hidden px-6 py-2 rounded-full border-2 border-black text-black font-bold tracking-wide group transition-all duration-300 hover:scale-105 shadow-md"
            onClick={opensignup}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-black via-gray-700 to-black opacity-0 group-hover:opacity-20 blur-xl transition-all"></span>
            Sign Up
          </button>
        </div>

        {/* Subtle floating particles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-black/20 to-transparent rounded-full blur-3xl animate-floatSlow delay-300"></div>
      </div>

      {/* 🔥 Animations 🔥 */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1.2s ease forwards; }

        @keyframes rise {
          0% { transform: translate(-50%, -60%) scale(0.9); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        .animate-rise { animation: rise 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }

        @keyframes logoPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        .animate-logoPulse { animation: logoPulse 2.5s infinite ease-in-out; }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        .animate-wiggle { animation: wiggle 1.5s ease-in-out infinite; }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-floatSlow { animation: floatSlow 6s ease-in-out infinite; }
      `}</style>
    </>
  );
}

export default Startanimation;
