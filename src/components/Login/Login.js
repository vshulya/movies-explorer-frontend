import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';
import { Link } from "react-router-dom";

const Login = ({handleLogin}) => {

  const [inputs, setInputs] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return;
    }
    handleLogin(inputs.email, inputs.password)
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
            value={inputs.password || ''}
            onChange={handleChange}
            id="password-input"
            name="password"
            className="auth__input auth__input_type_password"
            minLength="2"
            maxLength="200"
            required />
        </label>
      </fieldset>
      <div className="auth__button-wrapper">
        <button type="submit" className="auth__button button">Войти</button>
        <p className="auth__hint">Ещё не зарегистрированы?{" "}
          <Link className="auth__link link" to="/signup">Регистрация</Link>
        </p>
      </div>
    </AuthForm>
  )
}

export default Login;