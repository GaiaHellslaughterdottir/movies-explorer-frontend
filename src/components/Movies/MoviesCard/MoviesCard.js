import React from "react";


export default function MoviesCard(props) {
  const [saved, setSaved] = React.useState(false);

  function toggleSavedHandler() {
    setSaved(!saved);
  }

  function formatDuration(duration) {
    if (duration > 59) {
      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;
      return hours + "ч " + minutes + "м";
    } else {
      return duration + "м";
    }
  }

  return (
    <article className="movies-card">
      <div className="movies-card__title-wrapper">
        <p className="movies-card__title">{props.movie.nameRU}</p>
        <p className="movies-card__duration">{formatDuration(props.movie.duration)}</p>
      </div>
      <img className="movies-card__cover"
           src={`https://api.nomoreparties.co${props.movie.image.url}`}
           alt={props.movie.image.name}/>
      <button className={`movies-card__save-button ${saved ? "movies-card__save-button_saved" : ""}`}
              type="button"
              onClick={toggleSavedHandler}>Сохранить</button>
    </article>
  );
}