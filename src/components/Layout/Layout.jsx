import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Fotter/Fotter";

import Login from "../Logins/Login";
import Signup from "../Logins/Signup";
import { useDispatch, useSelector } from "react-redux";
import { closemodel } from "../../store/authslice";
import Startanimation from "./Startanimation";

function Layout() {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const [status, info] = useSelector((state) => [
    state.modal.status,
    state.modal.info,
  ]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closemodel()); // correctly closes modal
      }
    }

    if (status) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [status, dispatch]);

  return (
    <>
      {/* Modal Overlay */}
      {status && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-fadeIn">
          <div ref={modalRef}>
            {info === "signup" ? <Signup /> : <Login />}
          </div>
        </div>
      )}

      <Header />

      <main className="min-h-screen bg-black text-white">
        <Outlet />
      </main>

      <Footer />
      <Startanimation/>
    </>
  );
}

export default Layout;
