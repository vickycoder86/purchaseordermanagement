import React, { useState } from "react";
import "../Auth/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleForgotPassword = () => {
    alert("Redirecting to password reset page...");
  };
  const handleLogin = () => {
    if (name === "admin" && password === "admin") {
      navigate("/Home");
    } else {
      alert("Name & Password is incorrect");
    }
  };

  return (
    <div className="login-container">
      <div className="background-text">Purchase Order Management System</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="forgot-password">
          <a href="#" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
