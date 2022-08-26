import React from "react";
import './Logo.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Logo(props) {

  return (
    <Link to="/" className="logo link">
      <img src={logo} alt="logo" className="logo" />
    </Link>
  );
}

export default Logo;