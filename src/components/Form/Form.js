import React from "react";
import Logo from "../Logo/Logo";
import SubmitButton from "./SubmitButton/SubmitButton";

export default function Form(props) {
  return (
    <form className="form" name={`${props.name}-form`}>
      <h1 className="form__title">{props.formTitle}</h1>
      { props.children }
      <SubmitButton buttonTitle={props.buttonTitle} classNameModifier={props.classNameModifier}/>
    </form>
  );
}