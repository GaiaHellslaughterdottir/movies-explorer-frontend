import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

function App() {

  return (
    <div className="page">
      {/*<header className="header">
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
      </header>*/ }

      {/*<section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button-show-more" type="button">Узнать больше</button>
      </section>*/ }

      {/*<section className="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__table-wrapper">
            <h3 className="about-project__table-title">Дипломный проект включал 5 этапов</h3>
            <h3 className="about-project__table-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__table-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.</p>
          <p className="about-project__table-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
              было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__time-bar-wrapper">
          <div className="about-project__time-bar-cell about-project__time-bar-cell_green">1 неделя</div>
          <div
            className="about-project__time-bar-cell about-project__time-bar-cell_grey">
            4недели</div>
          <div className="about-project__time-bar-cell">Back-end</div>
          <div className="about-project__time-bar-cell">Front-end</div>
        </div>
      </section>*/ }

      {/*<section className="techs">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__lang-wrapper">
          <div className="techs__lang">HTML</div>
          <div className="techs__lang">CSS</div>
          <div className="techs__lang">JS</div>
          <div className="techs__lang">React</div>
          <div className="techs__lang">Git</div>
          <div className="techs__lang">Express.js</div>
          <div className="techs__lang">mongoDB</div>
        </div>
      </section>*/ }

      <section className="about-me">
        <h2 className="about-me__title">Технологии</h2>
        <div className="about-me__wrapper">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__dev">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.</p>
          <a className="about-me__link">Github</a>
          <div className="about-me__photo"></div>
        </div>

      </section>

      <section className="portfolio">

      </section>

      <footer className="footer">

      </footer>

    </div>
  );

}

export default App;
