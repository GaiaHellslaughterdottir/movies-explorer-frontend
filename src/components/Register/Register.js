import React from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";
import { Link, NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <NavLink to="/">
        <Logo/>
      </NavLink>

      <Form formTitle="Добро пожаловать!"
            buttonTitle="Зарегистрироваться"
            name="register"
            footerElement={ <p className="form__login-footer">
              Уже зарегистрированы? { <Link to="/signin" className="form__login-footer-link">Войти</Link> }</p> }>

        <FormField fieldTitle="Имя" errorTitle="Ошибка">
          <input placeholder="Имя"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="name"
                 className="form__field"
                 id="form__field-name"
                 required/>
        </FormField>
        <FormField fieldTitle="E-mail" errorTitle="Ошибка">
          <input placeholder="Е-мэйл"
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