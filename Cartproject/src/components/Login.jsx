import { useState } from "react";
import { Link } from "react-router-dom";

const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateForm() {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (form.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!passwordRegex.test(form.password.trim())) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    // ready to send to backend
    console.log("Login form submitted", form);
  }

  return (
    <div className="max-w-md mx-auto p-4 shadow rounded bg-white mt-10">
      <h2 className="text-2xl font-bold text-purple-800 mb-12 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <input
          type="submit"
          value="Log In"
          className="w-full bg-red-500 text-white py-2 rounded cursor-pointer hover:bg-red-600"
        />

        <div className="flex justify-between text-sm mt-2">
          <Link className="hover:text-blue-500" to="#">Forgot password</Link>
          <Link className="hover:text-blue-500" to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}
