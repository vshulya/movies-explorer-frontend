import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';
import { Link } from "react-router-dom";

const Register = ({handleRegister}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    name: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let { email, password, name } = inputs;
    handleRegister(email, password, name)
      .catch((err) => {
        setInputs(prev => ({
          ...prev,
          message: err
        }))
      });
  }
  return (
    <AuthForm
      title="Добро пожаловать!"
      formName='register'
      onSubmit={handleSubmit}
    >
      <fieldset className='auth__fieldset'>
        <label className="auth__field">
          <p className='auth__input-name'>Имя</p>
          <input
            value={inputs.name || ''}
            type="text"
            onChange={handleChange}
            id="name-input"
            name="name"
            minLength="2"
            maxLength="18"
            className="auth__input auth__input_type_name"
            required />
            <span className='auth__error'></span>
        </label>
        <label className="auth__field">
          <p className='auth__input-name'>Email</p>
          <input
            type="email"
            value={inputs.email || ''}
            onChange={handleChange}
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
            onChange={handleChange}
            id="password-input"
            name="password"
            value={inputs.password || ''}
            className="auth__input auth__input_type_password"
            minLength="2"
            maxLength="200"
            required />
            {/* <span className='auth__error'>Что-то пошло не так</span> */}
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