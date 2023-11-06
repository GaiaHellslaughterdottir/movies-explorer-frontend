import React from "react";
import Register from "../components/Register/Register";

export default function SignUpPage(props) {

  return (
    <div className="page">
      <Register onRegister={props.onRegister}/>
    </div>
  );
}