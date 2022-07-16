import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <AuthForm
      title="Рады видеть!"
    >
      <fieldset className='auth__fieldset'>
        <label className="auth__field">
          <p className='auth__input-name'>Email</p>
          <input
            type="email"
            defaultValue={'test@test.com'}
            //onChange={handleChange}
            id="email-input"
            name="email"
            className="auth__input auth__input_type_email"
            required />
            <span className='auth__error'></span>
        </label>
        <label className="auth__field">
          <p className='auth__input-name'>Пароль</p>
          <input
            type="password"
            defaultValue={''}
            //onChange={handleChange}
            id="password-input"
            name="password"
            className="auth__input auth__input_type_password"
            minLength="2"
            maxLength="200"
            required />
        </label>
      </fieldset>
      <button type="submit" className="auth__button">Войти</button>
      <p className="auth__hint">Ещё не зарегистрированы?{" "}
        <Link className="auth__link" to="/signup">Регистрация</Link>
      </p>
    </AuthForm>
  )
}

export default Login;