import React from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function MainPage(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="page">
      <Header loggedIn={props.loggedIn}/>
      <Main/>
      <Footer/>
    </div>
  );
}