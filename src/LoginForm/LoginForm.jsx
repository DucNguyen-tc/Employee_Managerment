import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
// import { setFormValue, resetForm } from "../ReduxToolkit/formSlice";
import RegisterForm from "./RegisterForm";
import ForgotPassword from "./ForgotPassword";
import { useNavigate } from "react-router-dom";
import { setUserRole } from "../ReduxToolkit/authSlice";

const initFormValue = {
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

export default function LoginForm() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [isRegister, setIsRegister] = useState(false);
  const [formError, setFormError] = useState({});
  const [isForgot, setIsForgot] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    const error = {};

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("../public/dataLogin.json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formValue.email,
            password: formValue.password,
          }),
        });

        const data = await response.json();
        const user = data.find(
          (user) =>
            user.email === formValue.email &&
            user.password === formValue.password
        );

        console.log(user);
        if (user) {
          dispatch(setUserRole(user.id_role));
          localStorage.setItem("userRole", user.id_role);
          navigate("/dashboard");
          console.log("Login successful", data);
        } else {
          console.log("Invalid credentials");
          alert("Invalid email or password");
        }
      } catch (error) {
        console.error("Error during login", error);
        alert("Something went wrong. Please try again later.");
      }
    } else {
      console.log("form invalid");
    }
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
              name="email"
              id="email"
              value={formValue.email}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Email"
              className={`w-full h-full bg-transparent border-b-2 text-lg text-black px-5 pr-12 rounded-2xl outline-none 
              ${formError.email ? "border-red-500" : "border-black/20"}
            `}
            />
            {formError.email && (
              <div className="absolute right-0 top-full mt-1 text-sm flex items-center text-red-600">
                <CgDanger className="text-lg mr-1" />
                {formError.email}
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
            <a
              href="#"
              className="hover:underline"
              onClick={() => setIsForgot(true)}
            >
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
