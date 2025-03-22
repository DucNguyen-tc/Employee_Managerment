import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";

export default function ForgotPassword({ setIsForgot }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  

  const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setSuccessMessage("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!isEmailValid(email)) {
      setEmailError("Invalid email format");
      return;
    }

    // Gửi yêu cầu đến server
    try {
      const response = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("A reset code has been sent to your email.");
      } else {
        setEmailError(data.message || "Something went wrong");
      }
    } catch (error) {
      setEmailError("Failed to connect to server");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div className="w-[420px] bg-white text-blue-900 rounded-4xl p-10 shadow-lg">
      <h1 className="text-5xl text-center font-bold">Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="relative w-full h-12 mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}           
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full h-full bg-transparent border-b-2 text-lg text-black px-5 pr-12 rounded-2xl outline-none 
              ${emailError ? "border-red-500" : "border-black/20"}
            `}
          />
          {emailError && (
            <div className="absolute right-0 top-full mt-1 text-sm flex items-center text-red-600">
              <CgDanger className="text-lg mr-1" />
              {emailError}
            </div>
          )}
          <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg" />
        </div>

        {successMessage && (
          <p className="text-green-600 text-sm mt-4">{successMessage}</p>
        )}

        <button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-teal-500 to-blue-900 text-white rounded-full mt-10 font-bold shadow-lg hover:opacity-80"
        >
          Send Reset Code
        </button>
        <div className="text-sm text-center mt-6">
          <p>
            Remember your password? {" "}
            <a
              href="#"
              className="font-semibold hover:underline"
              onClick={() => setIsForgot(false)}
            >
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
}
