import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList(props) {
  return (
      <section className="movies-card-list">
        {props.movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie}/>
        ))}
      </section>
  );
}