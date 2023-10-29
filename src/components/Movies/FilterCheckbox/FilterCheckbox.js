import React from "react";

export default function FilterCheckbox(props) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input type="checkbox"/>
        <span className="filter-checkbox__body">
	            <span className="filter-checkbox__block"/>
	          </span>
      </label>
      <span className="filter-checkbox__title">{ props.title }</span>
    </div>
  );
}