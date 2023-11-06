import React from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";
import { Link, NavLink } from "react-router-dom";


export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  function handleSubmit(e) {
    e.preventDefault();
    console.log(props);
    props.onLogin({
      email,
      password,
    });
  }

  return (
    <div className="login">
      <NavLink to="/">
        <Logo/>
      </NavLink>
      <Form className="form_login"
            formTitle="Рады видеть!"
            buttonTitle="Войти"
            name="login"
            onSubmit={ handleSubmit }
            footerElement={ <p className="form__login-footer">
              Ещё не зарегистрированы? { <Link to="/signup"
                                               className="form__login-footer-link">Регистрация</Link> }</p> }>

        <FormField fieldTitle="E-mail" errorTitle="Ошибка">
          <input value={ email }
                 placeholder="E-mail"
                 onChange={ e => setEmail(e.target.value) }
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="email"
                 className="form__field"
                 id="form__field-email"
                 required/>
        </FormField>
        <FormField fieldTitle="Пароль" errorTitle="Ошибка">
          <input value={ password }
                 placeholder="Пароль"
                 onChange={ e => setPassword(e.target.value) }
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