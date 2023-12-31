import React from "react";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";

export default function Profile(props) {
  const [edited, setEdited] = React.useState(false);

  return (

    <div className="profile">

      { edited && <Form className="form_edit-profile" formTitle="Bonjour Nicolas!" buttonTitle="Сохранить"
                        errorText="При обновлении профиля произошла ошибка." name="login">
        <FormField fieldTitle="Имя">
          <input placeholder="Name"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="name"
                 className="form__field"
                 id="form__field-name"
                 required/>
        </FormField>
        <FormField fieldTitle="E-mail">
          <input placeholder="E-mail"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="email"
                 className="form__field"
                 id="form__field-email"
                 required/>
        </FormField>
      </Form> }

      { !edited &&
      <div className="profile__wrapper">
        <h1 className="profile__title">Привет, Василий!</h1>
        <div className="profile__field-wrapper">
          <span className="profile__field-title">Имя</span>
          <span className="profile__field-subtitle">Вася</span>
        </div>
        <div className="profile__field-wrapper">
          <span className="profile__field-title">Емэйл</span>
          <span className="profile__field-subtitle">Вася-собака-я-ру</span>
        </div>
        <div className="profile__button-wrapper">
          <a className="profile__link-register" onClick={ () => setEdited(true) }>Редактировать</a>
          <a className="profile__link-out" onClick={ props.onSignOut }>Выйти из аккаунта</a>
        </div>
      </div>
      }
    </div>
  );
}