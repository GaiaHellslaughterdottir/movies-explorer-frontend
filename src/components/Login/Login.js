import React from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";
import {Link} from "react-router-dom";


export default function Login(props) {
  return (
    <div className="login">
      <Logo/>
      <Form className="form_login" formTitle="Рады видеть!" buttonTitle="Войти" name="login">

        <FormField fieldTitle="E-mail" errorTitle="Ошибка">
          <input value="Виталий"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="email"
                 className="form__field"
                 id="form__field-email"
                 required/>
        </FormField>
        <FormField fieldTitle="Пароль" errorTitle="Ошибка">
          <input value="Виталий"
                 minLength="2"
                 maxLength="30"
                 type="password"
                 name="password"
                 className="form__field"
                 id="form__field-password"
                 required/>
        </FormField>
      </Form>
        <p className="login__footer">
          Ещё не зарегистрированы? {<Link to="/signup" className="login__footer-link">Регистрация</Link>}</p>
    </div>
  );
}