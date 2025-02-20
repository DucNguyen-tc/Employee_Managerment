import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import RegisterForm from "./RegisterForm";

const initFormValue = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [isRegister, setIsRegister] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  return isRegister ? (
    <RegisterForm setIsRegister={setIsRegister} />
  ) : (
    <div className="w-[420px] bg-transparent text-white rounded-lg p-10">
      <form action="">
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <div className="relative w-full h-12 mt-8">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full h-full bg-transparent border-2 border-white/20 
          rounded-full text-lg text-white px-5 pr-12 outline-none"
          />
          <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
        </div>
        <div className="relative w-full h-12 mt-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full h-full bg-transparent border-2 border-white/20 
          rounded-full text-lg text-white px-5 pr-12 outline-none"
          />
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
        </div>
        <div className="flex justify-between text-sm mt-4 font-bold">
          <label className="flex items-center">
            <input type="checkbox" className="mr2" />
            Remember me
          </label>
          <a href="#" className="hover:underline">
            Forgot password ?
          </a>
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-white text-gray-800 
        rounded-full mt-6 font-bold shadow-lg hover:opacity-80"
        >
          Login
        </button>
        <div className="text-sm text-center mt-6">
          <p>
            Don't have an account ?{" "}
            <a
              href="#"
              className="font-semibold hover:underline"
              onClick={() => setIsRegister(true)}
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
