import React from "react";
import "../../styles/auth-shared.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodPartnerLogin = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      "http://localhost:3000/api/auth/food-partner/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    console.log(response.data);

    navigate("/create-food");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="logo">P</div>
          <div>
            <div className="title">Partner sign in</div>
            <div className="subtitle">Access your partner dashboard</div>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input className="input" placeholder="Email or phone" />
          <input className="input" placeholder="Password" type="password" />

          <div className="row">
            <button className="btn" type="submit">
              Sign in
            </button>
            <button className="btn secondary" type="button">
              Help
            </button>
          </div>

          <div className="helper">
            Need an account? <a href="/food-partner/register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
