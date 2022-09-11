import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Profile({onUpdateUser, onLogOut, isLoading, isSuccess, profileMessage}) {

  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const {values, handleChange, errors, isValid, setValues, setIsValid} = useFormWithValidation();

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  function disabledButton(e) {
    e.preventDefault();
    setIsFormDisabled(false);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser(values);
  } 

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  useEffect(() => {
    if(isLoading) {
      setIsFormDisabled(true);
    }
  }, [isLoading]);

  useEffect(() => {
    setIsFormDisabled(isSuccess);
  },[isSuccess, onUpdateUser]);

  useEffect(() => {
    if(values.name === currentUser.name && values.email === currentUser.email){
      setIsValid(false)
    }
  }, [values]);

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Hey, {currentUser.name}!</h2>
        <form className="profile__form"
        onSubmit={handleSubmit}
        noValidate>
          <fieldset className='profile__fieldset'>
            <label className="profile__field">Name
              <input
                disabled={isFormDisabled}
                type="text"
                value={values.name || ''}
                onChange={handleChange}
                pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                placeholder="Name"
                name="name"
                className="profile__input"
                minLength="2"
                maxLength="200"
                required />
              </label>
              <span className='profile__error'>{errors.name}</span>
              <label className="profile__field">Email
              <input
                disabled={isFormDisabled}
                type="email"
                value={values.email || ''}
                onChange={handleChange}
                pattern="^\S+@\S+\.\S+$"
                placeholder="Email"
                name="email"
                className="profile__input"
                required />
            </label>
            <span className='profile__error'>{errors.email}</span>
          </fieldset>
          <div className="profile__buttons">
          <span className={`profile__message 
          ${isSuccess ? 'profile__message_type_success' : 'profile__message_type_error'}`}>
          {profileMessage}</span>
          
          {isFormDisabled ?
            <button className="profile__edit-button button" onClick={disabledButton}>Edit</button> :
            <button type="submit" disabled={!isValid} className={`profile__edit-button button
            ${isValid ? '': 'profile__edit-button_disabled'}`}>Save</button>}
            <Link className="profile__logout-link link" onClick={onLogOut} to="/signin">Log out</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;