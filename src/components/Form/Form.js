import React from "react";
import Logo from "../Logo/Logo";
import SubmitButton from "./SubmitButton/SubmitButton";

export default function Form(props) {
  return (
    <form className={`form ${props.className}`}
          name={`${props.name}-form`}>
      {props.formTitle && <h1 className="form__title">{ props.formTitle }</h1>}
      { props.children }
      <SubmitButton buttonTitle={props.buttonTitle}/>
    </form>
  );
}