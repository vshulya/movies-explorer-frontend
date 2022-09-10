import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hooks/useFormWithValidation";

const Login = ({handleLogin, loginError}) => {

  const {values, handleChange, errors, isValid} = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values)
  } 

  return (
    <AuthForm
      title="Welcome back!"
      onSubmit={handleSubmit}>
      <fieldset className='auth__fieldset'>
        <label className="auth__field">
          <p className='auth__input-name'>Email</p>
          <input
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            pattern="^\S+@\S+\.\S+$"
            name="email"
            className="auth__input"
            required />
            <span className='auth__validation-error'>{errors.email}</span>
        </label>
        <label className="auth__field">
          <p className='auth__input-name'>Password</p>
          <input
            type="password"
            value={values.password || ''}
            onChange={handleChange}
            name="password"
            className="auth__input"
            minLength="2"
            maxLength="200"
            required />
            <span className='auth__validation-error'>{errors.password}</span>
        </label>
      </fieldset>
      <div className="auth__button-wrapper">
        <span className="auth__error">{loginError}</span>
        <button type="submit" 
        className={`auth__button button 
        ${isValid ? '': 'auth__button_disabled'}`} 
        disabled={!isValid}>
        Sign in</button>
        <p className="auth__hint">Don't have an account?{" "}
          <Link className="auth__link link" to="/signup">Sign up</Link>
        </p>
      </div>
    </AuthForm>
  )
}

export default Login;