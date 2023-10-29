import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";

export default function ProfilePage() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="page">
      <Header loggedIn={true}/>
      <Profile/>
    </div>
  );
}