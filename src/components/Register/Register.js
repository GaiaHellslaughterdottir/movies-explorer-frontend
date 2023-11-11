import React from "react";
import { useForm } from 'react-hook-form';

import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";
import { Link, NavLink } from "react-router-dom";

export default function Register(props) {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

  function onSubmit(data) {
    props.onRegister({
      name: data.name,
      email: data.email,
      password: data.password
    });
  }

  return (
    <div className="register">
      <NavLink to="/">
        <Logo/>
      </NavLink>

      <Form formTitle="Добро пожаловать!"
            onSubmit={ handleSubmit(onSubmit) }
            buttonTitle="Зарегистрироваться"
            submitButtonDisabled={Object.keys(errors).length !== 0}
            name="register"
            errorText={ props.errorText }
            footerElement={ <p className="form__login-footer">
              Уже зарегистрированы? { <Link to="/signin" className="form__login-footer-link" >Войти</Link> }</p> }>

        <FormField fieldTitle="Имя" errorTitle={ errors.name !== undefined ? 'Имя задано не корректно' : null }>
          <input placeholder="Имя"
                 type="text"
                 className="form__field"
                 id="form__field-name"
                 { ...register('name', { required: true, maxLength: 30, minLength: 2 }) }
          />
        </FormField>
        <FormField fieldTitle="E-mail" errorTitle={ errors.email !== undefined ? 'Емэйл задан не корректно' : null }>
          <input placeholder="E-mail"
                 type="email"
                 className="form__field"
                 id="form__field-email"
                 { ...register('email', {
                   required: true, maxLength: 30, minLength: 2,
                   pattern: {
                     value: /\S+@\S+\.\S+/,
                   }
                 }) }
          />
        </FormField>
        <FormField fieldTitle="Пароль"
                   errorTitle={ errors.password !== undefined ? 'Пароль не соответствует требованиям' : null }>
          <input placeholder="Пароль"
                 type="password"
                 className="form__field"
                 id="form__field-password"
                 { ...register('password', { required: true, maxLength: 30, minLength: 2 }) }
          />
        </FormField>
      </Form>

    </div>
  );
}