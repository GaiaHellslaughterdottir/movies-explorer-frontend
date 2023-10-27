import React from "react";

export default function Header(props) {
  return (
    <header className={ `header ${ !props.isMainPage ? "header_dark" : "" }` }>
      <div className="logo"/>
      { props.loggedIn && <div className="navigation">
        <a className="navigation__link">Фильмы</a>
        <a className="navigation__link">Сохранённые фильмы</a>
      </div> }

      { !props.loggedIn && <div className="navigation">
        <a className="navigation__link navigation__link_login">Регистрация</a>
      </div> }

      { props.loggedIn && <div className="header__profile">
        <a className="header__profile-link">Аккаунт</a>
        <div className="header__profile-link-wrapper">
          <div className="header__profile-icon"/>
        </div>
      </div> }

      { !props.loggedIn && <div className="header__profile header__profile_login">
        <button className="button">Войти

        </button>
      </div> }

    </header>
  );
}