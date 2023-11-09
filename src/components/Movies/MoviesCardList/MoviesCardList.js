import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList(props) {
  return (
    <section className="movies-card-list">

      { props.movies !== null && props.movies.length > 0 && <div className="movies-card-list__container">
        { props.movies.map((movie) => (
          <MoviesCard key={ movie.movieId } movie={ movie } onChangeMovie={props.onChangeMovie}/>
        )) }
      </div> }

      { props.message &&
      <div className="movies-card-list__not-found">{props.message}</div> }

      { props.searchError === null &&
      <div className="movies-card-list__error">{ props.searchError }</div> }
    </section>
  );
}