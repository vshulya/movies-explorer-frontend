import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';
import { Link } from "react-router-dom";
import useFormWithValidation from "../../hooks/useFormWithValidation";

const Login = ({handleLogin, loginError}) => {

  const {values, handleChange, errors, isValid, setValues, setIsValid} = useFormWithValidation();

  // const [inputs, setInputs] = React.useState({
  //   email: '',
  //   password: ''
  // })

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values)
  } 

  return (

    <AuthForm
      title="Рады видеть!"
      onSubmit={handleSubmit}>

      <fieldset className='auth__fieldset'>
        <label className="auth__field">
          <p className='auth__input-name'>Email</p>
          <input
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            className="auth__input"
            required />
            <span className='auth__validation-error'>{errors.email}</span>
        </label>
        <label className="auth__field">
          <p className='auth__input-name'>Пароль</p>
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
        Войти</button>
        <p className="auth__hint">Ещё не зарегистрированы?{" "}
          <Link className="auth__link link" to="/signup">Регистрация</Link>
        </p>
      </div>
    </AuthForm>
  )
}

export default Login;