import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  // Handle signup input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle login input changes
  const handleLoginChange = (e) => {
    const { id, value } = e.target;
    setLoginData({ ...loginData, [id]: value });
  };

  // Signup form submit → POST /signIn
  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    try {
      const { confirmPassword, ...dataToSend } = formData;
      const response = await axios.post("https://full-stack-stock-trading-platform-of8o.onrender.com/signIn", dataToSend);

      if (response.status === 200) {
        alert("Signup successful! Please login.");
        setShowLogin(true); // Switch to login form
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Signup failed!");
      } else {
        setError("Error connecting to server!");
      }
    }
  };

  // Login form submit → POST /signUp
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://full-stack-stock-trading-platform-of8o.onrender.com/signUp", loginData, { withCredentials: true });

      
        
        alert(response.data.message||"Login successful!");

        // Save token (optional, if you want session persistence)
        

        // Redirect to port 3000
        window.location.href = "https://full-stack-stock-trading-platform-1-ec1s.onrender.com/";
      
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Login failed!");
      } else {
        setError("Error connecting to server!");
      }
    }
  };

  return (<>
  <Navbar/>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            {!showLogin ? (
              <>
                <h3 className="text-center mb-4">Signup</h3>
                <form onSubmit={handleSignup}>
                  {/* Full Name */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>

                  {/* Error message */}
                  {error && <p className="text-danger">{error}</p>}

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                  <button type="submit" className="btn btn-success w-100 mt-3" onClick={(e)=>{
                    setShowLogin(true);
                  }}>
                    Sign In
                  </button>
                </form>
              </>
            ) : (
              <>
                <h3 className="text-center mb-4">Login</h3>
                <form onSubmit={handleLogin}>
                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  {/* Error message */}
                  {error && <p className="text-danger">{error}</p>}

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-success w-100">
                    Login
                  </button>
                  <button type="submit" className="btn btn-primary w-100 mt-3" onClick={(e)=>{
                    setShowLogin(false);
                  }}>
                    Sign Up
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
