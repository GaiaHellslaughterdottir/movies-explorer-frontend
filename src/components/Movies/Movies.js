import React from "react";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";

export default function Movies() {
  return (
      <section className="movies">
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