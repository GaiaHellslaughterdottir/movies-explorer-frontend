import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import ProtectedRouteElement from "../ProtectedRoute";
import MainPage from "../../pages/MainPage";
import MoviesPage from "../../pages/MoviesPage";
import SavedMoviesPage from "../../pages/SavedMoviesPage";
import ProfilePage from "../../pages/ProfilePage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import PageNotFound from "../../pages/PageNotFound";

import { auth } from "../../utils/AuthApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Popup from "../Popup/Popup";


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [isToolTipOpen, setToolTipOpen] = React.useState(false);
  const [isToolTipSuccess, setToolTipSuccess] = React.useState(false);
  const [loginErrorText, setLoginErrorText] = React.useState(null);
  const [registerErrorText, setRegisterErrorText] = React.useState(null);
  const [profileEditErrorText, setProfileEditErrorText] = React.useState(null);
  const [profileEdited, setProfileEdited] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    setLoginErrorText(null);
    const token = localStorage.getItem('token');
    if (token !== null && !loggedIn) {
      setLoggedIn(true);
      getAuthUserInfo(token);
    }
  }, []);

  function handleLogin({ email, password, isAfterRegister = false }) {
    auth.postSignIn({ email: email, password: password })
      .then(({ token }) => {
        setLoginErrorText(null);
        localStorage.setItem('token', token);
        setLoggedIn(true);
        getAuthUserInfo(token);
        window.location.replace(isAfterRegister ? '/movies' : '/')
      })
      .catch((err) => {
        console.log(err);
        let message = 'Ошибка авторизации';
        if (err === 401) {
          message = 'Вы ввели неправильный логин или пароль.';
        } else if (err === 500) {
          message = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
        } else if (err === 400) {
          message = 'При авторизации произошла ошибка. Переданный токен некорректен.';
        }
        setLoginErrorText(message);
      });
  }

  function handleRegister({ name, email, password }) {
    auth.postSignUp({ name: name, email: email, password: password })
      .then(() => {
        handleLogin({ email: email, password: password, isAfterRegister: true });
      })
      .catch((err) => {
        console.log(err);
        let message = 'Ошибка регистрации';
        if (err === 409) {
          message = 'Пользователь с таким email уже существует.';
        } else if (err === 500) {
          message = 'При регистрации пользователя произошла ошибка.';
        }
        setRegisterErrorText(message);
      });
  }

  function getAuthUserInfo(token) {
    auth.getUserInfo(token)
      .then((userInfo) => {
        setUserInfo(userInfo);
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('shortMovie');
    localStorage.removeItem('searchText');
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  function handleEditProfile({ name, email }) {
    mainApi.patchUserProfileInfo({ name: name, email: email })
      .then((userInfo) => {
        setUserInfo(userInfo);
        setCurrentUser(userInfo);
        setProfileEdited(false);
      })
      .catch((err) => {
        console.log(err);
        let message = 'Ошибка редактирования профиля';
        if (err === 409) {
          message = 'Пользователь с таким email уже существует.';
        } else if (err === 500) {
          message = 'При обновлении профиля произошла ошибка.';
        }
        setProfileEditErrorText(message);
      });
  }

  function handleActivateEditProfile() {
    setProfileEdited(true);
  }

  function closeAllPopups() {
    setToolTipOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={ currentUser }>

      <Routes>
        <Route path="/" element={ <MainPage loggedIn={ loggedIn }/> }/>
        <Route path="/movies"
               element={ loggedIn ?
                 <ProtectedRouteElement element={ MoviesPage } currentUser={ currentUser }
                                        loggedIn={ loggedIn }/> : <Navigate to="/movies" replace/> }/>
        <Route path="/saved-movies"
               element={ loggedIn ?
                 <ProtectedRouteElement element={ SavedMoviesPage }
                                        loggedIn={ loggedIn }/> : <Navigate to="/saved-movies" replace/> }/>
        <Route path="/profile"
               element={ loggedIn ?
                 <ProtectedRouteElement element={ ProfilePage }
                                        onActivateEditProfile={handleActivateEditProfile}
                                        edited = {profileEdited}
                                        onEditProfile={ handleEditProfile }
                                        onSignOut={ handleSignOut }
                                        errorText={ profileEditErrorText }
                                        userInfo={ userInfo }
                                        loggedIn={ loggedIn }/> : <Navigate to="/profile" replace/> }/>
        <Route path="signin" element={ <SignInPage onLogin={ handleLogin } errorText={ loginErrorText }/> }/>

        <Route path="signup" element={ <SignUpPage onRegister={ handleRegister } errorText={ registerErrorText }/> }/>

        <Route path="*" element={ <PageNotFound/> }/>

      </Routes>
      <Popup name="info-tooltip" isOpen={ isToolTipOpen } onClose={ closeAllPopups }>
        <InfoTooltip  isSuccess={ isToolTipSuccess } message={ loginErrorText }/>
      </Popup>
    </CurrentUserContext.Provider>
  );
}

export default App;
