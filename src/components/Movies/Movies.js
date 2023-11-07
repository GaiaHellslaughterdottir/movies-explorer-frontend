import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies(props) {
  return (
      <section className="movies">
        <SearchForm/>
        <hr className="page__line"/>
        <MoviesCardList movies={ props.movies }/>
      </section>
  );
}