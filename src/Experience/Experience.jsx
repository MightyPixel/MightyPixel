import "./Experience.css";
import React from "react";

function template() {
  const id = "career-" + this.props.details.companyName.toLocaleLowerCase();
  return (
    <div id={id} key="props.key" className="experience col-sm-12">
      <div className="time-item">
        <div className="time-year">
          {this.props.details.timeframe}
        </div>
        <div className="icon-holder-time wow fadeIn">
          <i className="ion-ios-circle-outline"></i>
        </div>
        <h4 className="time-title">
          {this.props.details.companyName}
        </h4>
        <h5 className="time-semitag">{this.props.details.role}</h5>
        <div>
          {this.props.details.description}
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
