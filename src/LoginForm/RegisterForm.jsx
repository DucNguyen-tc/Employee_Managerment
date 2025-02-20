import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function RegisterForm({ setIsRegister }) {
  return (
    <div className="w-[420px] bg-transparent text-white rounded-lg p-10">
      <h1 className="text-3xl text-center font-bold">Register</h1>
      <form>
        <div className="relative w-full h-12 mt-8">
          <input
            type="text"
            placeholder="Username"
            className="w-full h-full bg-transparent border-2 border-white/20 rounded-full 
            text-lg text-white px-5 pr-12 outline-none"
          />
          <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
        </div>
        <div className="relative w-full h-12 mt-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-lg text-white px-5 pr-12 outline-none"
          />
          <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
        </div>
        <div className="relative w-full h-12 mt-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-lg text-white px-5 pr-12 outline-none"
          />
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-white text-gray-800 rounded-full mt-6 font-bold shadow-lg hover:opacity-80"
        >
          Register
        </button>
      </form>
      <div className="text-sm text-center mt-6">
        Already have an account?{" "}
        <a
          href="#"
          className="font-semibold hover:underline"
          onClick={() => {
            setIsRegister(false);
          }}
        >
          Login
        </a>
      </div>
    </div>
  );
}
