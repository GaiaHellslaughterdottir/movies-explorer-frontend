import React from "react";
import { mainApi } from "../../../utils/MainApi";

export default function MoviesCard(props) {
  function handleSaveMovie() {
    if (props.movie._id !== undefined) {
      mainApi.deleteSavedMovie(props.movie._id)
        .then((movie) => {
          delete props.movie._id;
          props.onChangeMovie(props.movie);
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      mainApi.postSavedMovie(props.movie)
        .then((movie) => {
          props.movie._id = movie._id;
          props.onChangeMovie(props.movie);
        })
        .catch((err) => {
          console.log(err);
        })
      ;
    }
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
           src={props.movie.image}
           alt={props.movie.nameEN}/>
      <button className={`movies-card__save-button ${props.movie._id  ? "movies-card__save-button_saved" : ""}`}
              type="button"
              onClick={handleSaveMovie}>Сохранить</button>
    </article>
  );
}