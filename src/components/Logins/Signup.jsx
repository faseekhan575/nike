import React, { useState, useEffect, useRef } from "react";
import auth from "../../appwrite/appwrite";
import { useDispatch } from "react-redux";
import { closemodel, openmodel, login, logout } from "../../store/authslice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { update } from "../../store/authslice";

function Signup() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const boxRef = useRef(null); // For outside click detection

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        dispatch(closemodel());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  const create = async (data) => {
    setError("");
    try {
      await auth.logout().catch(() => {});

      const newUser = await auth.register({
        fullname: data.name,
        email: data.email,
        password: data.password,
      });

      toast.success("Signup successful 🎉");

      const session = await auth.login({
        email: data.email,
        password: data.password,
      });

      const userdata = await auth.currentuser();

      if (userdata) {
        dispatch(login({ userdata }));
        toast.success("Login successful 🚀");
          dispatch(update())
        setTimeout(() => dispatch(closemodel()), 2000);
      } else {
        throw new Error("Signup failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setError(error.message || "Signup failed");
      toast.error("Signup failed ❌");
    }
  };

  const logouthandler = () => {
    auth
      .logout()
      .then(() => {
        dispatch(logout());

        toast.success("Logout successful 👋");
      })
      .catch((err) => {
        toast.error("Logout failed ❌");
        console.error("Logout error:", err);
        dispatch(logout());
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      {/* Signup Box */}
      <div
        ref={boxRef}
        className="relative w-full max-w-md p-8 rounded-3xl shadow-2xl bg-black/80 backdrop-blur-xl border border-white/10 overflow-hidden"
      >
        {/* Glow Effects */}
        <span className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl animate-pulse-slow"></span>
        <span className="absolute -bottom-12 -right-12 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></span>
        <span className="absolute top-1/3 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow"></span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 uppercase tracking-widest text-white drop-shadow-[0_0_5px_#9333ea]">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(create)} className="flex flex-col gap-5 relative z-10">
          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Enter a valid email address",
              },
            })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition-all rounded-lg font-bold tracking-wide text-white shadow-[0_0_10px_#9333ea] hover:shadow-[0_0_20px_#9333ea] duration-300"
          >
            Signup
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Login Redirect */}
          <p className="text-sm text-center text-gray-300 mt-4">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => dispatch(openmodel("login"))}
              className="underline hover:text-white transition-all"
            >
              Login
            </button>
          </p>
        </form>

        {/* Logout Button */}
        <div className="flex justify-center mt-8 relative z-10">
          <button
            onClick={logouthandler}
            className="px-6 py-2 bg-red-600/80 hover:bg-red-700 rounded-lg font-semibold tracking-wide text-white shadow-[0_0_10px_#ef4444] hover:shadow-[0_0_20px_#ef4444] backdrop-blur-md border border-red-400/20 transition-all duration-300 hover:scale-[1.05]"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
