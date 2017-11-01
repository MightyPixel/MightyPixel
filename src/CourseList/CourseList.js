import React    from "react";
import template from "./CourseList.jsx";

class CourseList extends React.Component {
  render() {
    return template.call(this);
  }
}

export default CourseList;
