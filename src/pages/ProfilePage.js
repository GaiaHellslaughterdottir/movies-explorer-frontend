import React from "react";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";

export default function ProfilePage(props) {

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <Profile onSignOut={props.onSignOut}/>
    </div>
  );
}