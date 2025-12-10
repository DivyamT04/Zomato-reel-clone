import React from "react";
import "../../styles/auth-shared.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      "http://localhost:3000/api/auth/user/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    console.log(response.data);

    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="logo">U</div>
          <div>
            <div className="title">Welcome back</div>
            <div className="subtitle">Sign in to continue</div>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input className="input" name="email" placeholder="Email" />
          <input
            className="input"
            name="password"
            placeholder="Password"
            type="password"
          />

          <div className="row">
            <button className="btn" type="submit">
              Sign in
            </button>
          </div>

          <div className="switch">
            <label className="small">Remember me</label>
            <a href="#" className="small">
              Forgot password?
            </a>
          </div>

          <div className="helper">
            Don't have an account? <a href="/user/register">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
