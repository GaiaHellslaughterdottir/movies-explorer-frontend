import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {

  return (
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>

      {/*<main className="main">

      <section className="movies">
        <div className="movies-card">
          <div className="movies-card__title-wrapper">
            <p className="movies-card__title">Название фильма</p>
            <p className="movies-card__duration">2ч 52м</p>
          </div>
          <div className="movies-card__cover"/>
          <button className="movies-card__save-button"/>
        </div>
        <div className="movies-card">
          <div className="movies-card__title-wrapper">
            <p className="movies-card__title">Название фильма</p>
            <p className="movies-card__duration">2ч 52м</p>
          </div>
          <div className="movies-card__cover"/>
          <button className="movies-card__save-button"/>
        </div>
        <div className="movies-card">
          <div className="movies-card__title-wrapper">
            <p className="movies-card__title">Название фильма</p>
            <p className="movies-card__duration">2ч 52м</p>
          </div>
          <div className="movies-card__cover"/>
          <button className="movies-card__save-button"/>
        </div>
        <div className="movies-card">
          <div className="movies-card__title-wrapper">
            <p className="movies-card__title">Название фильма</p>
            <p className="movies-card__duration">2ч 52м</p>
          </div>
          <div className="movies-card__cover"/>
          <button className="movies-card__save-button"/>
        </div>
        <div className="movies-card">
          <div className="movies-card__title-wrapper">
            <p className="movies-card__title">Название фильма</p>
            <p className="movies-card__duration">2ч 52м</p>
          </div>
          <div className="movies-card__cover"/>
          <button className="movies-card__save-button"/>
        </div>
        <div className="movies-card">
          <div className="movies-card__title-wrapper">
            <p className="movies-card__title">Название фильма</p>
            <p className="movies-card__duration">2ч 52м</p>
          </div>
          <div className="movies-card__cover"/>
          <button className="movies-card__save-button"/>
        </div>
      </section>
      </main>
*/}
    </div>
  );
}

export default App;
