import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from "../../hooks/useFormWithValidation";
import './Register.css';
import { Link } from "react-router-dom";

const Register = ({handleRegister, isLoading, registrationError}) => {

  const {values, handleChange, errors, isValid} = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values);
  }

  return (
    <AuthForm
      title="Добро пожаловать!"
      formName='register'
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <fieldset className='auth__fieldset'>
        <label className="auth__field">
          <p className='auth__input-name'>Имя</p>
          <input
            type="text"
            value={values.name || ''}
            onChange={handleChange}
            pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
            name="name"
            minLength="2"
            maxLength="18"
            className="auth__input"
            required />
            <span className='auth__validation-error'>{errors.name}</span>
        </label>
        <label className="auth__field">
          <p className='auth__input-name'>Email</p>
          <input
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            className="auth__input"
            pattern="^\S+@\S+\.\S+$"
            required />
            <span className='auth__validation-error'>{errors.email}</span>
        </label>
        <label className="auth__field">
          <p className='auth__input-name'>Password</p>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={values.password || ''}
            className="auth__input"
            minLength="2"
            maxLength="200"
            required />
            <span className='auth__validation-error'>{errors.password}</span>
        </label>
      </fieldset>
      <div className="auth__button-wrapper">
        <span className="auth__error">{registrationError}</span>
        <button type="submit" 
        className={`auth__button button 
        ${isValid ? '': 'auth__button_disabled'}`} 
        disabled={!isValid} >
        Sign up</button>
        <p className="auth__hint">Have an account?{" "}
        <Link className="auth__link link" to="/signin">Sign in</Link>
        </p>
      </div>
    </AuthForm>
  )
}

export default Register;
