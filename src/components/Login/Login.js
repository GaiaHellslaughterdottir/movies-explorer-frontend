import React from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";
import { Link, NavLink } from "react-router-dom";


export default function Login() {
  return (
    <div className="login">
      <NavLink to="/">
        <Logo/>
      </NavLink>
      <Form className="form__login" formTitle="Рады видеть!" buttonTitle="Войти" name="login" footerElement={<p className="login__footer">
        Ещё не зарегистрированы? {<Link to="/signup" className="login__footer-link">Регистрация</Link>}</p>}>

        <FormField fieldTitle="E-mail" errorTitle="Ошибка">
          <input placeholder="Имя"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="email"
                 className="form__field"
                 id="form__field-email"
                 required/>
        </FormField>
        <FormField fieldTitle="Пароль" errorTitle="Ошибка">
          <input placeholder="Пароль"
                 minLength="2"
                 maxLength="30"
                 type="password"
                 name="password"
                 className="form__field"
                 id="form__field-password"
                 required/>
        </FormField>
      </Form>
    </div>
  );
}