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
      mainApi.postSavedMovie({country: props.movie.country,
        director: props.movie.director,
        duration: props.movie.duration,
        year: props.movie.year,
        description: props.movie.description,
        image: 'https://api.nomoreparties.co' + props.movie.image.url,
        trailerLink: props.movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + props.movie.image.url,
        movieId: props.movie.id,
        nameRU: props.movie.nameRU,
        nameEN: props.movie.nameEN,
      })
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
           src={`https://api.nomoreparties.co${props.movie.image.url}`}
           alt={props.movie.image.name}/>
      <button className={`movies-card__save-button ${props.movie._id  ? "movies-card__save-button_saved" : ""}`}
              type="button"
              onClick={handleSaveMovie}>Сохранить</button>
    </article>
  );
}