import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="logo"/>
      <div className="navigation">
        <a className="navigation__link">Фильмы</a>
        <a className="navigation__link">Сохранённые фильмы</a>
      </div>
      <div className="profile">
        <a className="profile__link">Аккаунт</a>
        <div className="profile__link-wrapper">
          <div className="profile__icon"/>
        </div>
      </div>
    </header>
  );
}