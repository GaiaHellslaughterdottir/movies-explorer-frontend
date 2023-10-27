import React from "react";


export default function MoviesCard() {
  return (
    <section className="movies-card">
      <div className="movies-card__title-wrapper">
        <p className="movies-card__title">Название фильма</p>
        <p className="movies-card__duration">2ч 52м</p>
      </div>
      <div className="movies-card__cover"/>
      <button className="movies-card__save-button"/>
    </section>
  );
}