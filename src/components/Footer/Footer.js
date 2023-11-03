import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__wrapper">
        <p className="footer__copyright">© 2020</p>
        <div className="footer__link-wrapper">
          <a className="footer__link" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/">Github</a>
        </div>
      </div>
    </footer>
  );
}