import React, { useState } from "react";
// import "./RegisterAcount.css";

const initFormValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};
const isEmailValid = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
export default function RegisterAcount() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});

  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.firstName)) {
      error["firstName"] = "First Name is required";
    }
    if (isEmptyValue(formValue.lastName)) {
      error["lastName"] = "Last Name is required";
    }
    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
    } else {
      if (!isEmailValid(formValue.email)) {
        error["email"] = "Email is invalid";
      }
    }
    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }
    if (isEmptyValue(formValue.confirmPassword)) {
      error["confirmPassword"] = "Confirm Password is required";
    } else if (formValue.confirmPassword !== formValue.password) {
      error["confirmPassword"] = "Confirm Password not match";
    }

    setFormError(error);
    return Object.keys(error).length === 0;
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
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
    <div className="h-screen flex justify-center items-center">
      <div className="w-[520px] p-12 shadow-lg bg-white">
        <h1 className="title">Register account</h1>

        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="first-name" className="w-full block">
              First Name
            </label> */}
            <input
              id="first-name"
              className="h-10 block w-full px-3 py-1.5"
              type="text"
              name="firstName"
              value={formValue.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            {formError.firstName && (
              <div className="text-red-500 mt-2">{formError.firstName}</div>
            )}
          </div>
          <div className="mb-4">
            {/* <label htmlFor="last-name" className="form-label">
              Last Name
            </label> */}
            <input
              id="last-name"
              className="h-10 block w-full px-3 py-1.5"
              type="text"
              name="lastName"
              value={formValue.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            {formError.lastName && (
              <div className="text-red-500 mt-2">{formError.lastName}</div>
            )}
          </div>
          <div className="mb-4">
            {/* <label htmlFor="email" className="form-label">
              Email
            </label> */}
            <input
              id="email"
              className="h-10 block w-full px-3 py-1.5"
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {formError.email && (
              <div className="text-red-500 mt-2">{formError.email}</div>
            )}
          </div>
          <div className="mb-4">
            {/* <label htmlFor="password" className="form-label">
              Password
            </label> */}
            <input
              id="password"
              className="h-10 block w-full px-3 py-1.5"
              type="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {formError.password && (
              <div className="text-red-500 mt-2">{formError.password}</div>
            )}
          </div>
          <div className="mb-4">
            {/* <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label> */}
            <input
              id="confirm-password"
              className="h-10 block w-full px-3 py-1.5"
              type="password"
              name="confirmPassword"
              value={formValue.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            {formError.confirmPassword && (
              <div className="text-red-500 mt-2">{formError.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className="h-10 w-[120px] cursor-pointer">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
