import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useWindowSize } from 'usehooks-ts'

export default function Navigation(props) {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const [isSmallSize, setIsSmallSize] = React.useState(false);
  const { width } = useWindowSize();

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

        { props.loggedIn && <div className="navigation__links-wrapper">
          <NavLink to="/" className="navigation__link navigation__link_invisible">Главная</NavLink>
          <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
        </div>}

        { props.loggedIn && <div className="navigation__account-wrapper">
          <NavLink to="/profile" className="navigation__profile">
            Аккаунт
            <div
              className={ `navigation__profile-link-wrapper ${ window.location.pathname !== "/" ? "navigation__profile-link-wrapper_grey" : "" }` }>
              <div className="navigation__profile-icon"/>
            </div>
          </NavLink>
        </div>}

        { !props.loggedIn && <div className="navigation__links-wrapper">
          <NavLink to="/signup" className="navigation__link navigation__link_login">Регистрация</NavLink>
          </div> }

        { !props.loggedIn && <NavLink className="navigation__signin-wrapper" to="/signin"><button className="button">Войти</button></NavLink> }



      </div>
    </div>


  )
    ;
}