import React from "react";

export default function FormField(props) {
  return (
    <div className="form__field-wrapper">
      <span className="form__field-title" >{props.fieldTitle}</span>
      {props.children}
      {!props.disableErrors && <span id="name-error" className="form__field-error">{props.errorTitle}</span>}
    </div>
  );
}