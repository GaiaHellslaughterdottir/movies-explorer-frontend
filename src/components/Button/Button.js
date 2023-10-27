import React from "react";

export default function Button(props) {
  return (
      <button className={`button ${props.classNameModifier ? props.classNameModifier : ""}`} type="button">{props.buttonTitle}</button>
  );
}