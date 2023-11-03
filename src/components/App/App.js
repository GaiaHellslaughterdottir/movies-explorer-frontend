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

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  const navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  return (

    <Routes>
      <Route path="/" element={ <MainPage loggedIn={ loggedIn }/> }/>
      <Route path="/movies"
             element={ loggedIn ?
               <ProtectedRouteElement element={ MoviesPage }
                                      loggedIn={ loggedIn }/> : <Navigate to="/movies" replace/> }/>
      <Route path="/saved-movies"
             element={ loggedIn ?
               <ProtectedRouteElement element={ SavedMoviesPage }
                                      loggedIn={ loggedIn }/> : <Navigate to="/saved-movies" replace/> }/>
      <Route path="/profile"
             element={ loggedIn ?
               <ProtectedRouteElement element={ ProfilePage } onSignOut={ handleSignOut }
                                      loggedIn={ loggedIn }/> : <Navigate to="/profile" replace/> }/>
      <Route path="signin" element={ <SignInPage/> }/>

      <Route path="signup" element={ <SignUpPage/> }/>

      <Route path="*" element={ <PageNotFound/> }/>

    </Routes>

  );
}

export default App;
