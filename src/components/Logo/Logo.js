import React from "react";
import './Logo.css';
import logo from '../../images/logo.svg';

function Logo(props) {

  return (
    <div className="logo">
      <img src={logo} alt="лого" className="logo" />
    </div>
  );
}

export default Logo;