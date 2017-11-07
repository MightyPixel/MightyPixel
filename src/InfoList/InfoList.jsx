import "./InfoList.css";
import React from "react";
import strengthsData from "./strengths.json";
import achivementsData from "./achivements.json";

function template() {
  var data = [];
  if (this.props.sectionType === "strengths") {
    data = strengthsData.data;
  } else if (this.props.sectionType === "achivements") {
    data = achivementsData.data;
  }

  console.log(data);

  const list = data.map((item, index) =>
    <li key={index}>
      <div>{item.name}</div>
      <div><strong>{item.title}:</strong> {item.description}</div>
    </li>
  );

  return (
    <div className="info-list">
      <div className="section-holder texture">
        <h3 className="tech-and-skills-header">
          {this.props.sectionType}
        </h3>
        <div className="course-holder">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default template;
