import React from "react";
import Register from "../components/Register/Register";
import SignInPage from "./SignInPage";

export default function SignUpPage(props) {

  return (
    <div className="page">
      <Register onRegister={props.onRegister} errorText={ props.errorText }/>
    </div>
  );
}