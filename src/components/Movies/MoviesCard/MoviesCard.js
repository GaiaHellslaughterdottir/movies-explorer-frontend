import React from "react";
import { mainApi } from "../../../utils/MainApi";
import { Link } from "react-router-dom";

export default function MoviesCard(props) {
  function handleSaveMovie(e) {
    e.preventDefault();
    if (props.movie._id !== undefined) {
      mainApi.deleteSavedMovie(props.movie._id)
        .then(() => {
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
      <Link className="movies-card" to={props.movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <div className="movies-card__title-wrapper">
          <p className="movies-card__title">{ props.movie.nameRU }</p>
          <p className="movies-card__duration">{ formatDuration(props.movie.duration) }</p>
        </div>
        <img className="movies-card__cover"
             src={ props.movie.image }
             alt={ props.movie.nameEN }/>
        <button
          className={ `movies-card__save-button ${ props.savedPage ? "movies-card__save-button_delete" : (props.movie._id ? "movies-card__save-button_saved" : "") }` }
          type="button"
          onClick={ handleSaveMovie }>{ !props.savedPage ? "Сохранить" : "" }</button>
      </Link>
  );
}