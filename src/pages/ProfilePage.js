import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";

export default function ProfilePage(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <Profile onSignOut={props.onSignOut}/>
    </div>
  );
}