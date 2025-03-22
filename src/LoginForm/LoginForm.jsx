import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { setFormValue, resetForm } from "../ReduxToolkit/formSlice";
import RegisterForm from "./RegisterForm";
import ForgotPassword from "./ForgotPassword";

const initFormValue = {
  Username: "",
  password: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1; //trả true khi value rỗng hoặc có 1 khoảng trắng
};

export default function LoginForm() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [isRegister, setIsRegister] = useState(false);
  const [formError, setFormError] = useState({});
  const [isForgot, setIsForgot] = useState(false);

  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.Username)) {
      error["Username"] = "Username is required";
    }
    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }

    setFormError(error);
    return Object.keys(error).length === 0; //Trả về true nếu không có lỗi
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleFocus = (event) => {
    const { name } = event.target;
    // Khi focus vào input, xóa lỗi tương ứng trong formError
    setFormError((prevError) => ({
      ...prevError,
      [name]: "", // Xoá lỗi cho trường đã được focus
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("form value", formValue);
    } else {
      console.log("form invalid");
    }
    console.log("form value", formValue);
  };

  return isForgot ? (
    <ForgotPassword setIsForgot={setIsForgot} />
  ) : isRegister ? (
    <RegisterForm setIsRegister={setIsRegister} />
  ) : (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div
      className="w-[420px] bg-white text-blue-900 rounded-4xl p-10 
    backdrop-blur-[20px] border-2 border-white/0 
    shadow-[0_0_10px_rgba(0,0,0,0.2)]"
    >
      <form onSubmit={handleSubmit}>
        <h1 className="text-6xl text-center font-bold">Login</h1>
        <div className="relative w-full h-12 mt-8">
          <input
            type="text"
            name="Username"
            id="Username"
            value={formValue.Username}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Username"
            className={`w-full h-full bg-transparent border-b-2 text-lg text-black px-5 pr-12 rounded-2xl outline-none 
              ${formError.Username ? "border-red-500" : "border-black/20"}
            `}
          />
          {formError.Username && (
            <div className="absolute right-0 top-full mt-1 text-sm flex items-center text-red-600">
              <CgDanger className="text-lg mr-1" />
              {formError.Username}
            </div>
          )}
          <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
        </div>
        <div className="relative w-full h-12 mt-8">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formValue.password}
            onChange={handleChange}
            onFocus={handleFocus}
            className={`w-full h-full bg-transparent border-b-2 text-lg text-black px-5 pr-12 rounded-2xl outline-none 
              ${formError.password ? "border-red-500" : "border-black/20"}
            `}
          />
          {formError.password && (
            <div className="absolute right-0 top-full mt-1 mr-1.5 text-sm flex items-center text-red-600">
              <CgDanger className="text-lg mr-1" />
              {formError.password}
            </div>
          )}
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
        </div>
        <div className="flex justify-between text-sm mt-8">
          <a href="#" className="hover:underline" onClick={() => setIsForgot(true)}>
            Forgot password ?
          </a>
        </div>
        <button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-teal-500 to-blue-900 text-white 
          rounded-full mt-8 font-bold shadow-lg hover:opacity-80"
        >
          Login
        </button>
        <div className="text-sm text-center mt-6">
          <p>
            Don't have an account?{" "}
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
    </div>  
  );
}
