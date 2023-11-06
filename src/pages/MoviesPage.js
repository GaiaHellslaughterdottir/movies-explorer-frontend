import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";

export default function MoviesPage() {

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <Movies/>
      <Footer/>
    </div>
  );
}