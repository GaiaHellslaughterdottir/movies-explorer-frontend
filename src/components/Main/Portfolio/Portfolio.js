import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a target="_blank" rel="noreferrer" href="https://gaiahellslaughterdottir.github.io/how-to-learn/"
         className="portfolio__link-wrapper">
        <p className="portfolio__link">Статичный сайт</p>
        <p className="portfolio__link">↗</p>
      </a>
      <a target="_blank" rel="noreferrer" href="https://gaiahellslaughterdottir.github.io/russian-travel/"
         className="portfolio__link-wrapper">
        <p className="portfolio__link">Адаптивный сайт</p>
        <p className="portfolio__link">↗</p>
      </a>
      <a target="_blank" rel="noreferrer" href="https://gaiahellslaughterdottir.github.io/mesto/"
         className="portfolio__link-wrapper">
        <p className="portfolio__link">Одностраничное приложение</p>
        <p className="portfolio__link">↗</p>
      </a>
    </section>
  );
}