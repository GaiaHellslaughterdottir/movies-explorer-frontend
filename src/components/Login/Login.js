import React from "react";
import { useForm } from 'react-hook-form';

import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";
import { Link, NavLink } from "react-router-dom";


export default function Login(props) {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

  function onSubmit(data) {
    props.onLogin({
      email: data.email,
      password: data.password,
    });
  }

  return (
    <div className="login">
      <NavLink to="/">
        <Logo/>
      </NavLink>
      <Form className="form_login"
            onSubmit={ handleSubmit(onSubmit) }
            formTitle="Рады видеть!"
            buttonTitle="Войти"
            submitButtonDisabled={Object.keys(errors).length !== 0}
            name="login"
            footerElement={ <p className="form__login-footer">
              Ещё не зарегистрированы? { <Link to="/signup"
                                               className="form__login-footer-link">Регистрация</Link> }</p> }>

        <FormField fieldTitle="E-mail" errorTitle={errors.email !== undefined ? 'Емэйл задан не корректно' : null}>
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
        <FormField fieldTitle="Пароль" errorTitle={errors.password !== undefined ? 'Пароль не соответствует требованиям' : null}>
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