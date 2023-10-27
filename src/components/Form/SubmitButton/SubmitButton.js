import React from "react";

export default function SubmitButton(props) {
  return (
      <button className={`submit-button ${props.classNameModifier ? props.classNameModifier : ""}`} type="submit">{props.buttonTitle}</button>
  );
}