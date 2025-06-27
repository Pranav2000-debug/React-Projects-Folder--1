import { useState } from "react";
import { Link } from "react-router-dom";

const regexForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateForm() {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (form.name.trim() === "") {
      newErrors.name = "Please enter your name";
      isValid = false;
    }

    if (form.email.trim() === "") {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else if (!regexForEmail.test(form.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (form.password.trim() === "") {
      newErrors.password = "Please enter a password";
      isValid = false;
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password = "Password must be at least 8 characters with uppercase, lowercase, digit, and special char";
      isValid = false;
    }

    if (form.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Form ready to send to backend:", form);
    // Example:
    // fetch("/api/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form)
    // });
  }

  return (
    <div className="max-w-md mx-auto p-4 shadow rounded bg-white mt-10">
      <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        <input type="submit" value="Sign Up" className="w-full bg-red-500 text-white hover:bg-red-600 py-2 rounded cursor-pointer" />

        <div className="flex justify-between text-sm mt-2">
          <Link className="hover:text-blue-500" to="/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
}
