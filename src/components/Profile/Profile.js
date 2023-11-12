import React from "react";
import { useForm } from 'react-hook-form';

import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";

export default function Profile(props) {
  const [lastName, setLastName] = React.useState(null);
  const [lastEmail, setLastEmail] = React.useState(null);
  const [currentName, setCurrentName] = React.useState(null);
  const [currentEmail, setCurrentEmail] = React.useState(null);
  const [noChanges, setNoChanges] = React.useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({ mode: 'all' });

  function onSubmit(data) {
    props.onEditProfile({
      name: data.name,
      email: data.email,
    });
  }

  React.useEffect(() => {
    if(props.edited === true) {
      setLastName(props.userInfo.name);
      setLastEmail(props.userInfo.email);
      setNoChanges(true);
    } else {
      setLastName(null);
      setLastEmail(null);
      setNoChanges(false);
    }
  }, [props.edited]);

  React.useEffect(() => {
    setNoChanges(lastName === currentName && lastEmail === currentEmail);
  }, [currentName, currentEmail]);

  React.useEffect(() => {
    if (props.userInfo.name !== undefined && props.userInfo.email !== undefined) {
      setValue('name', props.userInfo.name);
      setValue('email', props.userInfo.email);
    }
  }, [props.userInfo]);

  function onChangeNameValue(e) {
    setCurrentName(e.target.value);
  }

  function onChangeEmailValue(e) {
    setCurrentEmail(e.target.value);
  }

  return (

    <div className="profile">

      { props.edited && <Form className="form_edit-profile"
                        onSubmit={ handleSubmit(onSubmit) }
                        errorText={ props.errorText }
                        formTitle={`Привет, ${props.userInfo.name}`}
                        buttonTitle="Сохранить"
                        submitButtonDisabled={noChanges || props.inRequest || Object.keys(errors).length !== 0}
                        name="login">
        <FormField fieldTitle="Имя" errorTitle={errors.name !== undefined ? 'Имя задано не корректно' : null}>
          <input
            placeholder="Name"
            type="text"
            className="form__field"
            id="form__field-name"
            { ...register('name', { required: true, maxLength: 30, minLength: 2, onChange: onChangeNameValue }) }
          />
        </FormField>
        <FormField fieldTitle="E-mail" errorTitle={errors.email !== undefined ? 'Емэйл задан не корректно' : null}>
          <input
            placeholder="E-mail"
            type="email"
            className="form__field"
            id="form__field-email"
            { ...register('email', {
              required: true, maxLength: 30, minLength: 2, onChange: onChangeEmailValue,
              pattern: {
                value: /\S+@\S+\.\S+/,
              }
            }) }
          />
        </FormField>
      </Form> }

      { !props.edited &&
      <div className="profile__wrapper">
        <h1 className="profile__title">Привет, {props.userInfo.name}</h1>
        <div className="profile__field-wrapper">
          <span className="profile__field-title">Имя</span>
          <span className="profile__field-subtitle">{ props.userInfo.name }</span>
        </div>
        <div className="profile__field-wrapper">
          <span className="profile__field-title">Емэйл</span>
          <span className="profile__field-subtitle">{ props.userInfo.email }</span>
        </div>
        <div className="profile__button-wrapper">
          <a className="profile__link-register" onClick={ () => props.onActivateEditProfile() }>Редактировать</a>
          <a className="profile__link-out" onClick={ props.onSignOut }>Выйти из аккаунта</a>
        </div>
      </div>
      }
    </div>
  );
}