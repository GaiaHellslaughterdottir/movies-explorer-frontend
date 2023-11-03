import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SavedMovies from "../components/SavedMovies/SavedMovies";

export default function SavedMoviesPage() {

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <SavedMovies/>
      <Footer/>
    </div>
  );
}