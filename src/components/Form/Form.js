import React from "react";
import SubmitButton from "./SubmitButton/SubmitButton";

export default function Form(props) {
  return (
    <form className={ `form ${ props.className }` }
          name={ `${ props.name }-form` }
          onSubmit={props.onSubmit}>
      { props.formTitle && <h1 className="form__title">{ props.formTitle }</h1> }
      <div className="form__fields-wrapper">
      { props.children }
      </div>
      <div className="form__footer-wrapper">
        { props.errorText && <span className="form__error">{ props.errorText }</span> }
        <SubmitButton submitButtonDisabled={ props.submitButtonDisabled }
                      buttonTitle={ props.buttonTitle }/>
        { props.footerElement }
      </div>
    </form>
  );
}