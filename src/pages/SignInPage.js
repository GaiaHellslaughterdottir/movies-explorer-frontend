import React from "react";
import Login from "../components/Login/Login";

export default function SignInPage(props) {

  return (
    <div className="page">
      <Login onLogin={props.onLogin}/>
    </div>
  );
}