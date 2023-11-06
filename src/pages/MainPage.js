import React from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function MainPage(props) {

  return (
    <div className="page">
      <Header loggedIn={props.loggedIn}/>
      <Main/>
      <Footer/>
    </div>
  );
}