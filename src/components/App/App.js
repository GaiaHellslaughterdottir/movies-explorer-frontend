import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import ProtectedRouteElement from "../ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Logo from "../Logo/Logo";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);


  return (
    <div className="page">

      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
        <Route path="/movies"
               element={loggedIn ?
                 <ProtectedRouteElement element={Movies}
                                        loggedIn={loggedIn}/> : <Navigate to="/signin" replace/>}/>
        <Route path="signin" element={<Login/>}/>

        <Route path="signup" element={<Register/>}/>

      </Routes>

    </div>

  );
}

export default App;
