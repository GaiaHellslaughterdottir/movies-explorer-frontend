import React from "react";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";

export default function Profile(props) {
  const [edited, setEdited] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditProfile({
      name,
      email,
    });
  }

  React.useEffect(() => {
    if (props.userInfo.name !== undefined) {
      setName(props.userInfo.name);
    }
    if (props.userInfo.email !== undefined) {
      setEmail(props.userInfo.email);
    }
  }, [props.userInfo]);

  return (

    <div className="profile">

      { edited && <Form className="form_edit-profile"
                        onSubmit={handleSubmit}
                        formTitle="Bonjour Nicolas!"
                        buttonTitle="Сохранить"
                        errorText="При обновлении профиля произошла ошибка." name="login">
        <FormField fieldTitle="Имя">
          <input value={name}
                 onChange={e => setName(e.target.value)}
                 placeholder="Name"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="name"
                 className="form__field"
                 id="form__field-name"
                 required/>
        </FormField>
        <FormField fieldTitle="E-mail">
          <input value={email}
                 onChange={e => setEmail(e.target.value)}
                 placeholder="E-mail"
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
          <span className="profile__field-subtitle">{props.userInfo.name}</span>
        </div>
        <div className="profile__field-wrapper">
          <span className="profile__field-title">Емэйл</span>
          <span className="profile__field-subtitle">{props.userInfo.email}</span>
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