import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';


function Profile({onUpdateUser, onLogOut}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  // Обработчик изменения инпута обновляет стейт
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      email
    });
  } 

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form"
        onSubmit={handleSubmit}>
          <fieldset className='profile__fieldset'>
            <label className="profile__field">Имя
              <input
                type="text"
                value={name || ''} 
                onChange={handleNameChange}
                id="name-input"
                placeholder="Имя"
                name="name"
                className="profile__input profile__input_type_name"
                minLength="2"
                maxLength="200"
                required />
              </label>
              <label className="profile__field">Email
              <input
                type="email"
                value={email || ''} 
                onChange={handleEmailChange}
                placeholder="Email"
                id="email-input"
                name="email"
                className="profile__input profile__input_type_email"
                required />
            </label>
          </fieldset>
          <div className="profile__buttons">
            <button className="profile__edit-button button" type="submit">Редактировать</button>
            <Link className="profile__logout-link link" onClick={onLogOut} to="/signin">Выйти из аккаунта</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;