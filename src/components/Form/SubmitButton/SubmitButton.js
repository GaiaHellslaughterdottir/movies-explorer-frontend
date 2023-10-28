import React from "react";

export default function SubmitButton(props) {
  return (
      <button className="submit-button" type="submit">{props.buttonTitle}</button>
  );
}