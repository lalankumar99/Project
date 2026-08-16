import React, { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter Email/ID and Password.");
      return;
    }

    setLoading(true);

    // Demo login
    setTimeout(() => {
      setLoading(false);

      console.log("Login Data:", {
        role,
        ...formData,
      });

      alert(`${role.toUpperCase()} login successful!`);
    }, 1000);
  };

  return (
    <div className="login-page">

      {/* Background */}
      <div className="login-background"></div>

      {/* Login Card */}
      <div className="login-card">

        {/* Logo */}
        <div className="login-logo">
          <div className="logo-icon">PH</div>

          <div>
            <h1>POLYTECHNIC HUB</h1>
            <p>Learn • Practice • Succeed</p>
          </div>
        </div>

        {/* Heading */}
        <div className="login-heading">
          <h2>Welcome Back 👋</h2>
          <p>Login to continue your learning journey</p>
        </div>

        {/* Role Selection */}
        <div className="role-selector">

          <button
            type="button"
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            <span>🎓</span>
            <small>Student</small>
          </button>

          <button
            type="button"
            className={role === "teacher" ? "active" : ""}
            onClick={() => setRole("teacher")}
          >
            <span>👨‍🏫</span>
            <small>Teacher</small>
          </button>

          <button
            type="button"
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            <span>🛡️</span>
            <small>Admin</small>
          </button>

        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>

          {/* Email / ID */}
          <div className="input-group">

            <label htmlFor="email">
              {role === "student"
                ? "Student ID / Email"
                : role === "teacher"
                ? "Teacher ID / Email"
                : "Admin ID / Email"}
            </label>

            <div className="input-wrapper">
              <span className="input-icon">👤</span>

              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your ID or Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="username"
              />
            </div>

          </div>

          {/* Password */}
          <div className="input-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="input-wrapper">

              <span className="input-icon">🔒</span>

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label="Toggle password visibility"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>

          </div>

          {/* Remember + Forgot */}
          <div className="login-options">

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="forgot-password"
              onClick={() =>
                alert("Password recovery feature coming soon.")
              }
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Signing In...
              </>
            ) : (
              <>
                Login as{" "}
                {role.charAt(0).toUpperCase() +
                  role.slice(1)}
                <span>→</span>
              </>
            )}
          </button>

        </form>

        {/* Student Registration */}
        {role === "student" && (
          <div className="register-section">

            <span>New student?</span>

            <button
              type="button"
              onClick={() =>
                alert("Registration page coming soon.")
              }
            >
              Create an Account
            </button>

          </div>
        )}

        {/* Security Notice */}
        <div className="security-notice">
          🔐 Your login information is protected.
        </div>

        {/* Back */}
        <button
          type="button"
          className="back-home"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
};

export default Login;