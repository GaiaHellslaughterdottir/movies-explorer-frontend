import React from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";
import Header from "../Header/Header";

export default function Profile(props) {
  return (

    <div className="profile">

      <Form formTitle="Привет, Николай!" buttonTitle="Войти" name="login">

        <FormField fieldTitle="E-mail" errorTitle="Ошибка" disableErrors={true}>
          <input value="Николай"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="email"
                 className="form__field form__field_right"
                 id="form__field-email"
                 required/>
        </FormField>
        <FormField fieldTitle="Пароль" errorTitle="Ошибка" disableErrors={true}>
          <input value="Николай"
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