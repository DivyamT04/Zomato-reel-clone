import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth-shared.css";

const AuthLanding = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="logo">Z</div>
          <div>
            <div className="title">Welcome</div>
            <div className="subtitle">Choose how you'd like to continue</div>
          </div>
        </div>

        <div className="form">
          <Link
            to="/user/register"
            className="btn"
            style={{
              textAlign: "center",
              textDecoration: "none",
              display: "block",
            }}
          >
            Register as User
          </Link>
          <Link
            to="/food-partner/register"
            className="btn secondary"
            style={{
              textAlign: "center",
              textDecoration: "none",
              display: "block",
            }}
          >
            Register as Food Partner
          </Link>

          <div className="helper">
            Already have an account? <Link to="/user/login">User login</Link> ·{" "}
            <Link to="/food-partner/login">Partner login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLanding;
