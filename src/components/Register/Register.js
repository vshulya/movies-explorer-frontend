import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';
import { Link } from "react-router-dom";

const Register = (props) => {
  return (
    <AuthForm
      title="Добро пожаловать!"
    >
      <fieldset className='auth__fieldset'>
        <label className="auth__field">
          <p className='auth__input-name'>Имя</p>
          <input
            type="name"
            defaultValue={'Валентина'}
            //onChange={handleChange}
            id="name-input"
            name="name"
            className="auth__input auth__input_type_name"
            required />
            <span className='auth__error'></span>
        </label>
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
            //name="password"
            className="auth__input auth__input_type_password"
            minLength="2"
            maxLength="200"
            required />
            <span className='auth__error'>Что-то пошло не так</span>
        </label>
      </fieldset>
      <div className="auth__button-wrapper">
        <button type="submit" className="auth__button auth__button_reg button">Зарегистрироваться</button>
        <p className="auth__hint">Уже зарегистрированы?{" "}
        <Link className="auth__link link" to="/signin">Войти</Link>
        </p>
      </div>
    </AuthForm>
  )
}

export default Register;