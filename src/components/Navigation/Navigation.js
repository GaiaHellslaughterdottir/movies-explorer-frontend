import React from "react";
import { Link, useLocation, Route, NavLink } from "react-router-dom";
import { useWindowSize } from 'usehooks-ts'

const { useRef } = require("react");
const { useEffect } = require("react");

export default function Navigation(props) {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const [isSmallSize, setIsSmallSize] = React.useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    changeMode(width);
  }, [width]);

  function changeMode(currentWidth) {
    if (currentWidth < 1280 ) {
      setIsSmallSize(true);
    } else if (currentWidth >= 1280 ) {
      setIsSmallSize(false);
    }
  }

  function handleToggleMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <div className="navigation">
      {isSmallSize && <div className="navigation__menu-icon" onClick={ handleToggleMenu }/>}

      <div className={ isSmallSize ? 'navigation__wrapper-small-size' : 'navigation__wrapper-big-size'}
        style={{ display: isSmallSize && !isMenuOpened ? 'none' : 'flex' }}>
        <div className="navigation__menu-close-icon" style={{ display: isSmallSize && isMenuOpened ? 'block' : 'none' }}
             onClick={ handleToggleMenu }/>

        <div className="navigation__links-wrapper">
          <NavLink to="/" className="navigation__link navigation__link_invisible">Главная</NavLink>
          <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
        </div>
        <div className="navigation__account-wrapper">
          <NavLink to="/profile" className="navigation__profile">
            Аккаунт
            <div
              className={ `navigation__profile-link-wrapper ${ window.location.pathname !== "/" ? "navigation__profile-link-wrapper_grey" : "" }` }>
              <div className="navigation__profile-icon"/>
            </div>
          </NavLink>
        </div>
      </div>
    </div>


  )
    ;
}