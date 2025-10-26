import React, { useState } from "react";
import auth from "../../appwrite/appwrite";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { openmodel, login, closemodel } from "../../store/authslice";
import toast from "react-hot-toast";
import { update } from "../../store/authslice";

function Login() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (data) => {
    setError("");
    try {
      const logins = await auth.login({ email: data.email, password: data.password });
      if (logins) {
        const userdata = await auth.currentuser();
        if (userdata) {
          toast.success("Login successful");
          setTimeout(() => {
            dispatch(closemodel());
          }, 2000);
          dispatch(login({ userdata }));
          dispatch(closemodel())
          dispatch(update())
        } else {
          toast.error("Login failed ❌ try to logout first");
          throw new Error("Login failed");
          
        }
      }
    } catch (error) {
      toast.error("Login failed ❌ try to logout first");
      setError("Login failed ❌ ");
      console.log(error);
    }
  };

  return (
    <div className="relative w-[90%] max-w-md p-8 rounded-3xl shadow-2xl bg-black/80 backdrop-blur-xl text-white animate-slideUp overflow-hidden">
    
      <span className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></span>
      <span className="absolute -bottom-12 -right-12 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></span>
      <span className="absolute top-1/3 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow pointer-events-none"></span>

      <h2 className="text-3xl font-extrabold text-center mb-6 uppercase tracking-widest text-white">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-5 relative z-10">
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

     
        <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition-all rounded-lg font-bold tracking-wide text-white">
          Login
        </button>

      
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      
        <p className="text-sm text-center text-gray-300 mt-4">
          Don’t have an account?{" "}

          <button
            type="button"
            onClick={() => dispatch(openmodel("signup"))}
            className="underline hover:text-white transition-all"
          >
            Signup
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
