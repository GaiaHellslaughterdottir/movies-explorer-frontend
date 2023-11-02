import React from "react";
import { Link, useLocation, Route, NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Header(props) {
  return (
    <header className={ `header ${ window.location.pathname === "/" ? "header_blue" : "" }` }>
      <NavLink to="/" ><div className="logo"/></NavLink>

      <Navigation loggedIn={props.loggedIn}/>

     {/* { props.loggedIn && <div className="navigation">

        <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>

      </div> }
      { !props.loggedIn && <div className="navigation">
        <NavLink to="/signup" className="navigation__link navigation__link_login">Регистрация</NavLink>
      </div> }

      { props.loggedIn && <NavLink to="/profile" className="header__profile">
        Аккаунт
        <div className={`header__profile-link-wrapper ${ window.location.pathname !== "/" ? "header__profile-link-wrapper_grey" : "" }`}>
          <div className="header__profile-icon"/>
        </div>
      </NavLink> }

      { !props.loggedIn && <div className="header__profile header__profile_login">
        <NavLink to="/signin"><button className="button">Войти</button></NavLink>
      </div> }*/}

    </header>
  );
}