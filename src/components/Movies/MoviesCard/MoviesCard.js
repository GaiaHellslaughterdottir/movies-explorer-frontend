import React from "react";
import { Link } from "react-router-dom";

export default function MoviesCard(props) {
  function handleSaveMovie(e) {
    e.preventDefault();
    props.onChangeMovie({
        _id: props.movie._id,
        movieId: props.movie.movieId
      }
    );
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
    <Link className="movies-card" to={ props.movie.trailerLink } target="_blank" rel="noopener noreferrer">
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