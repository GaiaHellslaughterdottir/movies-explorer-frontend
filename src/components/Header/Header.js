import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Header(props) {
  return (
    <header className={ `header ${ window.location.pathname === "/" ? "header_blue" : "" }` }>
      <NavLink to="/">
        <div className="logo"/>
      </NavLink>

      <Navigation loggedIn={ props.loggedIn }/>

    </header>
  );
}