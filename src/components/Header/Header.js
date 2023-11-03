import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Header(props) {
  return (
    <header className={ `header ${ window.location.pathname === "/" ? "header_blue" : "" }` }>
      <NavLink to="/">
        <div className="logo"/>
      </NavLink>

      <Navigation loggedIn={ props.loggedIn }/>

      {/* { props.loggedIn && <div className="navigation-new">

        <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>

      </div> }
      { !props.loggedIn && <div className="navigation-new">
        <NavLink to="/signup" className="navigation__link navigation__link_login">Регистрация</NavLink>
      </div> }

      { props.loggedIn && <NavLink to="/profile" className="navigation__profile">
        Аккаунт
        <div className={`navigation__profile-link-wrapper ${ window.location.pathname !== "/" ? "navigation__profile-link-wrapper_grey" : "" }`}>
          <div className="navigation__profile-icon"/>
        </div>
      </NavLink> }

      { !props.loggedIn && <div className="navigation__profile navigation__profile_login">
        <NavLink to="/signin"><button className="button">Войти</button></NavLink>
      </div> }*/ }

    </header>
  );
}