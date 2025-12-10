import React, { use } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth-shared.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      "http://localhost:3000/api/auth/user/register",
      {
        fullName,
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    console.log(response.data);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="logo">U</div>
          <div>
            <div className="title">Create your account</div>
            <div className="subtitle">
              Sign up as a user to explore restaurants
            </div>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input className="input" name="fullName" placeholder="Full name" />
          <input
            className="input"
            name="email"
            placeholder="Email"
            type="email"
          />
          <input
            className="input"
            name="password"
            placeholder="Password"
            type="password"
          />

          <button className="btn" type="submit">
            Create account
          </button>

          <div className="helper">
            By continuing, you agree to our Terms and Privacy Policy.
          </div>

          <div className="helper small">
            Already a user? <Link to="/user/login">Sign in</Link> ·
            <span style={{ marginLeft: 8 }} />
            <Link to="/food-partner/register">Register as Food Partner</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
