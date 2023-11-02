import React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function PageNotFound() {
  const navigate = useNavigate();


  return (
    <div className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <div className="page-not-found__link-wrapper">
        <a className="login__footer-link" onClick={ () => navigate(-1) }>Назад</a>
      </div>
    </div>
  );
}