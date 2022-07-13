import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';
// import { Link } from "react-router-dom";

const Register = (props) => {
  return (
    <AuthForm
      title="Добро пожаловать!"
    >
      <fieldset className='register__fieldset'>
        <label className="register__field">
          <p className='register__input-name'>Имя</p>
          <input
            type="name"
            defaultValue={'Валентина'}
            //onChange={handleChange}
            id="name-input"
            name="name"
            className="register__input register__input_type_name"
            required />
            <span className='register__error'></span>
        </label>
        <label className="register__field">
          <p className='register__input-name'>Email</p>
          <input
            type="email"
            defaultValue={'test@test.com'}
            //onChange={handleChange}
            id="email-input"
            name="email"
            className="register__input register__input_type_email"
            required />
            <span className='register__error'></span>
        </label>
        <label className="register__field">
          <p className='register__input-name'>Пароль</p>
          <input
            type="password"
            defaultValue={''}
            //onChange={handleChange}
            id="password-input"
            //name="password"
            className="register__input register__input_type_password"
            minLength="2"
            maxLength="200"
            required />
            <span className='register__error'>Что-то пошло не так</span>
        </label>
      </fieldset>
      <button type="submit" className="register__button">Зарегистрироваться</button>
      <p className="register__hint">Уже зарегистрированы?{" "}
        <a href='#' className="register__link">Войти</a> {/* TODO add to="/signin" */}
      </p>
    </AuthForm>
  )
}

export default Register;