import React from "react";
import {Route, Routes, Navigate, useNavigate} from "react-router-dom";

function App() {

  return (
    <div className="page">
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

      <section className="promo">

      </section>

      <section className="about-project">

      </section>

      <section className="techs">

      </section>

      <section className="about-me">

      </section>

      <section className="portfolio">

      </section>

      <footer className="footer">

      </footer>

    </div>
  );

}

export default App;
