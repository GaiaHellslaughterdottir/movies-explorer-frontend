import React from "react";

export default function FilterCheckbox(props) {

  function handlerChangeState(e) {
    props.onChangeShortMovie(e.target.checked);
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input onChange={handlerChangeState} checked={props.value} type="checkbox"/>
        <span className="filter-checkbox__body">
          <span className="filter-checkbox__block"/>
        </span>
      </label>
      <span className="filter-checkbox__title">{ props.title }</span>
    </div>
  );
}