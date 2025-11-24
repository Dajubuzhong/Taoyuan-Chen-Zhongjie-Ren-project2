import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Login to continue your Sudoku journey</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="remember-forgot">
              <label className="remember-me">
                <input type="checkbox" id="remember" />
                <span>Remember me</span>
              </label>
              <span className="forgot-password">Forgot Password?</span>
            </div>

            <button type="submit" className="login-button">Login</button>

            <div className="form-footer">
              Don't have an account? <Link to="/register">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;