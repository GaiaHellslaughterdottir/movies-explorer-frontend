import React from "react";

export default function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__lang-wrapper">
        <div className="techs__lang">HTML</div>
        <div className="techs__lang">CSS</div>
        <div className="techs__lang">JS</div>
        <div className="techs__lang">React</div>
        <div className="techs__lang">Git</div>
        <div className="techs__lang">Express.js</div>
        <div className="techs__lang">mongoDB</div>
      </div>
    </section>
  );
}