import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper">
        <p>© 2020</p>
        <div>
          <a className="footer__link">Яндекс.Практикум</a>
          <a className="footer__link">Github</a>
        </div>
      </div>
    </footer>
  );
}