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

import {auth} from "../../utils/AuthApi";
import {moviesApi} from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  const navigate = useNavigate();

  React.useEffect(() => {


    const token = localStorage.getItem('token');
    if (token !== null && !loggedIn) {
      setLoggedIn(true);
      getAuthUserInfo(token);
    }
  }, []);

  function handleLogin({email, password, isAfterRegister = false}) {
    auth.postSignIn({email: email, password: password})
      .then(({token}) => {
        localStorage.setItem('token', token);
        setLoggedIn(true);
        getAuthUserInfo(token);
        window.location.replace(isAfterRegister ? '/movies' : '/')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister({name, email, password}) {
    auth.postSignUp({name: name, email: email, password: password})
      .then(() => {
        handleLogin({email: email, password: password, isAfterRegister: true});
      })
      .catch((err) => {
        console.log(err);
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

  function handleEditProfile({name, email}) {
    mainApi.patchUserProfileInfo({name: name, email: email})
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (

    <Routes>
      <Route path="/" element={ <MainPage loggedIn={ loggedIn }/> }/>
      <Route path="/movies"
             element={ loggedIn ?
               <ProtectedRouteElement element={ MoviesPage } currentUser={currentUser}
                                      loggedIn={ loggedIn }/> : <Navigate to="/movies" replace/> }/>
      <Route path="/saved-movies"
             element={ loggedIn ?
               <ProtectedRouteElement element={ SavedMoviesPage }
                                      loggedIn={ loggedIn }/> : <Navigate to="/saved-movies" replace/> }/>
      <Route path="/profile"
             element={ loggedIn ?
               <ProtectedRouteElement element={ ProfilePage }
                                      onEditProfile={ handleEditProfile }
                                      onSignOut={ handleSignOut }
                                      userInfo={ userInfo }
                                      loggedIn={ loggedIn }/> : <Navigate to="/profile" replace/> }/>
      <Route path="signin" element={ <SignInPage onLogin={ handleLogin }/> }/>

      <Route path="signup" element={ <SignUpPage onRegister={handleRegister}/> }/>

      <Route path="*" element={ <PageNotFound/> }/>

    </Routes>

  );
}

export default App;
