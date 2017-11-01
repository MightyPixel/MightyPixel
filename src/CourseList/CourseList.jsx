import React from "react";
import "./CourseList.css";
import coursesData from "./courses.json";

function template() {
  const data = coursesData.data;

  const list = data.map((item, index) =>
    <li key={index}>{item}</li>
  );

  return (
    <div className="course-list">
      <div className="section-holder texture">
        <div className="icon-holder i-size-big">
          <i className="ion-ios-bookmarks-outline"></i>
        </div>

        <h3 className="tech-and-skills-header">
          Courses
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
