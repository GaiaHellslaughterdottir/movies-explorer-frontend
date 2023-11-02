import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a href="#" className="portfolio__link-wrapper">
        <a className="portfolio__link" target="_blank"
           href="https://gaiahellslaughterdottir.github.io/how-to-learn/">Статичный сайт</a>
        <p className="portfolio__link">↗</p>
      </a>
      <a href="#" className="portfolio__link-wrapper">
        <a className="portfolio__link" target="_blank"
           href="https://gaiahellslaughterdottir.github.io/russian-travel/">Адаптивный сайт</a>
        <p className="portfolio__link">↗</p>
      </a>
      <a href="#" className="portfolio__link-wrapper">
        <a className="portfolio__link" target="_blank"
           href="https://gaiahellslaughterdottir.github.io/mesto/">Одностраничное приложение</a>
        <p className="portfolio__link">↗</p>
      </a>
    </section>
  );
}