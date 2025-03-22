import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";

const initFormValue = {
  //Khởi tạo giá trị ban đầu cho form
  Username: "",
  email: "",
  password: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1; //trả true khi value rỗng hoặc có 1 khoảng trắng
};

const isEmailValid = (email) => {
  //hàm kiểm tra định dạng email có hợp lệ không
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export default function RegisterForm({ setIsRegister }) {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});

  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.Username)) {
      error["Username"] = "Username is required";
    }
    if (isEmptyValue(formValue.email)) {
      error["email"] = "Your email is required";
    } else {
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Your email is invalid"; //Email ko hợp lệ
      }
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

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div
      className="w-[420px] bg-white text-blue-900 rounded-4xl p-10 
    backdrop-blur-[20px] border-2 border-white/0 
    shadow-[0_0_10px_rgba(0,0,0,0.2)]"
    >
      <h1 className="text-6xl text-center font-bold">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="relative w-full h-12 mt-8">
          <input
            id="Username"
            name="Username"
            type="text"
            placeholder="Username"
            value={formValue.Username}
            onChange={handleChange}
            onFocus={handleFocus}
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
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formValue.email}
            onChange={handleChange}
            onFocus={handleFocus}
            className={`w-full h-full bg-transparent border-b-2 text-lg text-black px-5 pr-12 rounded-2xl outline-none 
      ${formError.email ? "border-red-500" : "border-black/20"}
    `}
          />
          <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />

          {formError.email && (
            <div className="absolute right-0 top-full mt-1 text-sm flex items-center text-red-600">
              <CgDanger className="text-lg mr-1" />
              {formError.email}
            </div>
          )}
        </div>
        <div className="relative w-full h-12 mt-8">
          <input
            id="password"
            name="password"
            type="password"
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
        <button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-teal-500 to-blue-900 text-white 
          rounded-full mt-8 font-bold shadow-lg hover:opacity-80"
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
    </div>
  );
}
