import React from "react";
import okImage from "../../images/Union.png";
import failImage from "../../images/Union_error.png";

export default function InfoTooltip(props) {
  return (
    <div className="tooltip">
      <img className="tooltip__image" src={ props.isSuccess ? okImage : failImage }/>
      <p
        className="tooltip__title">{ props.message }</p>
    </div>

  );
}