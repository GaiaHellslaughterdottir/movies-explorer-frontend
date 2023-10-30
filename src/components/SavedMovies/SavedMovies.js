import React from "react";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";

export default function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm/>
      <hr className="page__line"/>
      <MoviesCardList/>
      <Preloader/>
    </section>
  );
}