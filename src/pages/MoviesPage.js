import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";

export default function MoviesPage(props) {

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <Movies movies={ props.movies }/>
      <Footer/>
    </div>
  );
}