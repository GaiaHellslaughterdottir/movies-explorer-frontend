import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";
import SearchForm from "../components/Movies/SearchForm/SearchForm";

export default function MoviesPage() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <Movies/>
      <Footer/>
    </div>
  );
}