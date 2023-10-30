import React from "react";


export default function MoviesCard() {
  const [saved, setSaved] = React.useState(false);

  function toggleSavedHandler() {
    setSaved(!saved);
  }

  return (
    <section className="movies-card">
      <div className="movies-card__title-wrapper">
        <p className="movies-card__title">Название фильма</p>
        <p className="movies-card__duration">2ч 52м</p>
      </div>
      <div className="movies-card__cover"/>
      <button className={`movies-card__save-button ${saved ? "movies-card__save-button_saved" : ""}`}
              type="button" onClick={toggleSavedHandler}>Сохранить</button>
    </section>
  );
}