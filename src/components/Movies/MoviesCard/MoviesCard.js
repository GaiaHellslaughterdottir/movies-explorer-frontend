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
      <img className="movies-card__cover"
           src="https://a.allegroimg.com/s1024/0c2811/a791b8844041a0a07222c475c029"
           alt="Обложка фольма"/>
      <button className={`movies-card__save-button ${saved ? "movies-card__save-button_saved" : ""}`}
              type="button"
              onClick={toggleSavedHandler}>Сохранить</button>
    </section>
  );
}