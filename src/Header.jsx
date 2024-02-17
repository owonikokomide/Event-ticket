import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// Example with BrowserRouter
import { BrowserRouter as Router } from 'react-router-dom';

function Header() {
  return (
    <Router>
      <div className="container">
        <div className="logo">
          <h1 className="event">Logo</h1>
        </div>
        <div className="sign">
          <div className="sign-up">
            <Link to="/signin" className="links">
              Sign in
            </Link>
          </div>
          <div className="sign-up">
            <Link to="/signup" className="links">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}


export default Header;
