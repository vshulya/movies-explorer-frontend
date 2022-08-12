import React from 'react';
import Logo from '../Logo/Logo';
import './AuthForm.css';
import Preloader from '../Preloader/Preloader';

const AuthForm = ({ title, children, onSubmit, isLoading}) => {

  return (
    <section className="auth">
      {isLoading &&<Preloader/>}
      <div className="auth__container">
        <Logo />
        <h2 className="auth__title">{title}</h2>
        <form className="auth__form"
          onSubmit={onSubmit}
          noValidate>
          {children}
        </form>
      </div>
    </section>
  )
};

export default AuthForm;