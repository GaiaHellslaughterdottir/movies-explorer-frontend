import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
      <section className="movies-card-list">
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </section>
  );
}