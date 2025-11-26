import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PartnerRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value;
    const ownerName = e.target.ownerName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phoneNumber = e.target.phoneNumber.value;
    const address = e.target.address.value;

    const response = await axios.post(
      "http://localhost:3000/api/auth/food-partner/register",
      {
        name: businessName,
        ownerName: ownerName,
        email: email,
        password: password,
        phone: phoneNumber,
        address: address,
      },
      { withCredentials: true }
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
            <div className="title">Partner sign up</div>
            <div className="subtitle">
              Register your restaurant or cloud kitchen
            </div>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input className="input" placeholder="Business name" />
          <input className="input" placeholder="Owner name" />
          <input className="input" placeholder="Email" type="email" />
          <input className="input" placeholder="Password" type="password" />
          <input className="input" placeholder="Phone number" type="tel" />

          <input className="input" placeholder="Address" />

          <button className="btn" type="submit">
            Create account
          </button>

          <div className="helper">
            We'll review your application and get back to you.
          </div>

          <div className="helper small">
            Already a partner? <Link to="/food-partner/login">Sign in</Link> ·
            <span style={{ marginLeft: 8 }} />
            <Link to="/user/register">Register as User</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerRegister;
