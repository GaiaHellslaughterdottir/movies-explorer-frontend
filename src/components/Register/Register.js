import React from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";

export default function Register() {
  return (
    <div className="register">
      <Logo/>
      <Form formTitle="Добро пожаловать!" buttonTitle="Зарегистрироваться" name="register" classNameModifier="submit-button_green">

        <FormField fieldTitle="Имя" errorTitle="Ошибка">
          <input value="Виталий"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="name"
                 className="form__field"
                 id="form__field-name"
                 required/>
        </FormField>
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
    </div>
  );
}