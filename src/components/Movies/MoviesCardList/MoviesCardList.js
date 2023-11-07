import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloder/Preloader";

export default function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        { props.movies.map((movie) => (
          <MoviesCard key={ movie.id } movie={ movie }/>
        )) }
      </div>
      <button className="show-more" type="button">Ещё</button>


    </section>
  );
}