import React from "react";
import "./CourseList.css";
import coursesData from "./courses.json";

function template() {
  const data = coursesData.data;

  const breathList = data.breath.map((item, index) =>
    <li key={index}>{item}</li>
  );

  const depthList = data.depth.map((item, index) =>
    <li key={index}>{item}</li>
  );

  return (
    <div className="course-list">
      <div className="section-holder texture">
        <div className="icon-holder i-size-med">
          <i className="ion-ios-bookmarks-outline"></i>
          <h3 className="tech-and-skills-header section-title"> Favorite Courses </h3>
        </div>
        <div className="course-holder">
          <ul>
            <lh><strong>Skill Depth</strong></lh>
            {depthList}
          </ul>
          <ul>
            <lh><strong>Skill Breath</strong></lh>
            {breathList}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default template;
