import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Logo from "../Logo/Logo";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {

  return (
    <div className="page">

      <Header loggedIn={true} isMainPage={true}/>

      <Profile/>

    </div>

  );
}

export default App;
