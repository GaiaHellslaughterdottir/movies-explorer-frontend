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
import { mainApi } from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Popup from "../Popup/Popup";
import { messages, http_codes } from '../../utils/constants';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [isToolTipOpen, setToolTipOpen] = React.useState(false);
  const [isToolTipSuccess, setToolTipSuccess] = React.useState(false);
  const [loginErrorText, setLoginErrorText] = React.useState(null);
  const [registerErrorText, setRegisterErrorText] = React.useState(null);
  const [profileEditErrorText, setProfileEditErrorText] = React.useState(null);
  const [infoMessage, setInfoMessage] = React.useState(null);
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

  function handleLogin({ email, password}) {
    auth.postSignIn({ email: email, password: password })
      .then(({ token }) => {
        setLoginErrorText(null);
        localStorage.setItem('token', token);
        setLoggedIn(true);
        getAuthUserInfo(token);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        let message = messages.authorizationErrorDefault;
        if (err === http_codes.UNAUTHORIZED) {
          message = messages.incorrectLoginOrPasswordError;
        } else if (err === http_codes.INTERNAL_SERVER_ERROR) {
          message = messages.authorizationError;
        } else if (err === http_codes.BAD_REQUEST) {
          message = messages.badTokenError;
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
        let message = messages.registrationErrorDefault;
        if (err === http_codes.CONFLICT) {
          message = messages.duplicateEmailError;
        } else if (err === http_codes.INTERNAL_SERVER_ERROR) {
          message = messages.registrationError;
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
        setToolTipOpen(true);
        setToolTipSuccess(true);
        setInfoMessage(messages.profileSaveSuccess);
      })
      .catch((err) => {
        console.log(err);
        let message = messages.profileEditErrorDefault;
        if (err === http_codes.CONFLICT) {
          message = messages.duplicateEmailError;
        } else if (err === http_codes.INTERNAL_SERVER_ERROR) {
          message = messages.profileEditError;
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
                                        loggedIn={ loggedIn }/> : <Navigate to="/" replace/> }/>
        <Route path="/saved-movies"
               element={ loggedIn ?
                 <ProtectedRouteElement element={ SavedMoviesPage }
                                        loggedIn={ loggedIn }/> : <Navigate to="/" replace/> }/>
        <Route path="/profile"
               element={ loggedIn ?
                 <ProtectedRouteElement element={ ProfilePage }
                                        onActivateEditProfile={handleActivateEditProfile}
                                        edited = {profileEdited}
                                        onEditProfile={ handleEditProfile }
                                        onSignOut={ handleSignOut }
                                        errorText={ profileEditErrorText }
                                        userInfo={ userInfo }
                                        loggedIn={ loggedIn }/> : <Navigate to="/" replace/> }/>
        <Route path="signin" element={ <SignInPage onLogin={ handleLogin } errorText={ loginErrorText }/> }/>

        <Route path="signup" element={ <SignUpPage onRegister={ handleRegister } errorText={ registerErrorText }/> }/>

        <Route path="*" element={ <PageNotFound/> }/>

      </Routes>
      <Popup name="info-tooltip" isOpen={ isToolTipOpen } onClose={ closeAllPopups }>
        <InfoTooltip  isSuccess={ isToolTipSuccess } message={ infoMessage }/>
      </Popup>
    </CurrentUserContext.Provider>
  );
}

export default App;
