import React from "react";

export default function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a className="promo__button-show-more" href="#about">Узнать больше</a>
    </section>
  );
}