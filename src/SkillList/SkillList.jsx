import React from "react";
import OwlCarousel from 'react-owl-carousel';
import "./SkillList.css";
import skillsData from "./skills.js";

function template() {
  const data = skillsData.data;

  var list = [];
  for (var i = 0; i < data.length; i++) {
    const skillsSource = (
      <div key={data[i].source + i} className="skill-area">
        <h4 className="skill-title">{data[i].source}</h4>
        {data[i].skills.map(item => {
           return <div key={item.name} className="skillbar-title">
             <span className="skill-name">{item.name}</span>
             <span className="skill-level pull-right">{item.level}</span>
           </div>
        })}
      </div>
    );

    list.push(skillsSource);
  }

  return (
    <div className="skill-list">
      <div className="section-holder texture">
        <div className="icon-holder i-size-big">
          <i className="ion-ios-star-outline"></i>
        </div>

        <h3 className="tech-and-skills-header">
          Tech & Skills
          <a href="https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition" className="dreyfus-info">(Dreyfus model)</a>
        </h3>
          <div className="skill-holder">
            <OwlCarousel
              className="owl-theme"
              margin={15}
              items={2}
            >
              {list}
            </OwlCarousel>
          </div>
      </div>
    </div>
  );
};

export default template;
