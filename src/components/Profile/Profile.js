import React from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";
import Header from "../Header/Header";

export default function Profile(props) {
  return (

    <div className="profile">

      <Form className="form_edit-profile" formTitle="Bonjour Nicolas!" buttonTitle="Войти" name="login">

        <FormField fieldTitle="Имя">
          <input value="Nicolas"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="name"
                 className="form__field"
                 id="form__field-name"
                 required/>
        </FormField>
        <FormField fieldTitle="E-mail">
          <input value="E-mail"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="email"
                 className="form__field"
                 id="form__field-email"
                 required/>
        </FormField>
      </Form>
    </div>
  );
}