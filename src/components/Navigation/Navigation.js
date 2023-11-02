import React from "react";
import { Link, useLocation, Route, NavLink } from "react-router-dom";

export default function Navigation(props) {
  return (
    <div className="navigation">
      <div className="navigation__links-wrapper">
        <NavLink to="/" className="navigation__link">Главная</NavLink>
        <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
        <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
      </div>
      <div className="navigation__account-wrapper">
        <NavLink to="/profile" className="header__profile">
          Аккаунт
          <div
            className={ `header__profile-link-wrapper ${ window.location.pathname !== "/" ? "header__profile-link-wrapper_grey" : "" }` }>
            <div className="header__profile-icon"/>
          </div>
        </NavLink>
      </div>

    </div>

  );
}