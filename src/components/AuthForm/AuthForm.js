import React from 'react';
import Logo from '../Logo/Logo';
import './AuthForm.css';

const AuthForm = ({ title, children, buttonValue, formName }) => {
  return (
    <section className="auth">
      <div className="auth__container">
        <Logo />
        <h2 className="auth__title">{title}</h2>
        <form className="auth__form">
          {children}
        </form>
      </div>
    </section>
  )
};

export default AuthForm;