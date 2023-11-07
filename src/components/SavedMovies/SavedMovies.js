import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

export default function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm/>
      <hr className="page__line"/>
      <MoviesCardList/>
    </section>
  );
}