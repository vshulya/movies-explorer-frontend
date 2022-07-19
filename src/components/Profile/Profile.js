import React from "react";
import Navigation from "../Navigation/Navigation";
import './Profile.css';


function Profile(props) {
  return (
    <section className="profile">
      <Navigation/>
      <div className="profile__container">
        <h2 className="profile__title">Привет, Валентина!</h2>
        <form className="profile__form">
          <fieldset className='profile__fieldset'>
            <label className="profile__field">Имя
              <input
                type="name"
                defaultValue={'Валентина'}
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
                defaultValue={'test@test.com'}
                placeholder="Email"
                id="email-input"
                name="email"
                className="profile__input profile__input_type_email"
                required />
            </label>
          </fieldset>
          <div className="profile__buttons">
            <button className="profile__edit-button button">Редактировать</button>
            <button className="profile__logout-button button">Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;