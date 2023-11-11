import React from "react";

export default function Popup(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} id={`${props.name}-popup`}>
      <div className="popup__container">
        <button className="popup__close-icon" type="button" onClick={props.onClose}/>
        {props.children}
      </div>
    </div>
  );
}