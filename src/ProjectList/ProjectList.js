import React    from "react";
import template from "./ProjectList.jsx";

class ProjectList extends React.Component {
  render() {
    return template.call(this);
  }
}

export default ProjectList;
