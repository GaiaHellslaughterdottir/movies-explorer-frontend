import React from "react";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import FormField from "../Form/FormField/FormField";
import { Link, NavLink } from "react-router-dom";

export default function Register(props) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({
      name,
      email,
      password
    });
  }

  return (
    <div className="register">
      <NavLink to="/">
        <Logo/>
      </NavLink>

      <Form formTitle="Добро пожаловать!"
            buttonTitle="Зарегистрироваться"
            onSubmit={handleSubmit}
            name="register"
            footerElement={ <p className="form__login-footer">
              Уже зарегистрированы? { <Link to="/signin" className="form__login-footer-link">Войти</Link> }</p> }>

        <FormField fieldTitle="Имя" errorTitle="Ошибка">
          <input value={name}
                 onChange={e => setName(e.target.value)}
                 placeholder="Имя"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="name"
                 className="form__field"
                 id="form__field-name"
                 required/>
        </FormField>
        <FormField fieldTitle="E-mail" errorTitle="Ошибка">
          <input value={email}
                 onChange={e => setEmail(e.target.value)}
                 placeholder="Е-мэйл"
                 minLength="2"
                 maxLength="30"
                 type="text"
                 name="email"
                 className="form__field"
                 id="form__field-email"
                 required/>
        </FormField>
        <FormField fieldTitle="Пароль" errorTitle="Ошибка">
          <input value={password}
                 onChange={e => setPassword(e.target.value)}
                 placeholder="Пароль"
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