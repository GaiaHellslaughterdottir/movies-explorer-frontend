import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "../components/Header/Header";
import SearchForm from "../components/Movies/SearchForm/SearchForm";
import Footer from "../components/Footer/Footer";
import SavedMovies from "../components/SavedMovies/SavedMovies";

export default function SavedMoviesPage() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <SavedMovies/>
      <Footer/>
    </div>
  );
}