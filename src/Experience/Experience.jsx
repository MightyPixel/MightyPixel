import "./Experience.css";
import React from "react";

function template() {
  const id = "career-" + this.props.details.companyName.toLocaleLowerCase();
  return (
    <div id={id} key="props.key" className="experience col-sm-12">
      <div className="time-item">
        <h4 className="time-title">{this.props.details.role} @ {this.props.details.companyName}</h4>
        <h5 className="time-year">{this.props.details.timeframe}</h5>
        <div>
          <p>{this.props.details.description}</p>
          <ul>
            {this.props.details.achivements.map((item) =>
              <li key={item}>{item}</li>
            )}
          </ul>
        </div>
      </div>
      <div className="work-item-icon">
      </div>
    </div>
  );
}

export default template;
