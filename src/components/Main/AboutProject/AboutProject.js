import React from "react";

export default function AboutProject() {
  return (
    <section className="about-project" id="about">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__table-wrapper">
        <div className="about-project__text-wrapper">
          <h3 className="about-project__table-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__table-text">Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__text-wrapper">
          <h3 className="about-project__table-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__table-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
            было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__time-bar-wrapper">
        <div className="about-project__time-bar-cell about-project__time-bar-cell_green">1 неделя</div>
        <div
          className="about-project__time-bar-cell about-project__time-bar-cell_grey">
          4недели
        </div>
        <div className="about-project__time-bar-cell">Back-end</div>
        <div className="about-project__time-bar-cell">Front-end</div>
      </div>
    </section>
  );
}