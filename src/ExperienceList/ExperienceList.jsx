import "./ExperienceList.css";
import React from "react";
import Experience from "../Experience";
import experienceData from './experience.json';

var details = experienceData.experience;

function template() {
  var list = [];
  for (var i=0; i < details.length; i++) {
    list.push(<Experience key={details[i].companyName + i} details={details[i]}/>);
  }

  return (
    <div className="experience-list">
      <div className="time-line">
        <div className="row">
          {list}
        </div>
      </div>
    </div>
  );
};

export default template;
