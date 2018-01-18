import React from "react";
import OwlCarousel from 'react-owl-carousel';
import "./ProjectList.css";
import projectsData from "./projects.json";


function template() {
  const data = projectsData.data;

  var list = data.map((item, index) =>
    <div key={index} className="col-md-12 texture box-it project-box">
      <div className="skillbar-title">
        <h4 className="title">
          {item.title}
          <div className="pull-right">
              <a href={item.link}>
                <div className="i-size-small">
                  <i className="ion-social-github-outline"></i>
                </div>
              </a>
          </div>
        </h4>

        <h6 className="tag">{item.tag}</h6>
        <span className="project-item-date">{item.date}</span>
        <span className="project-item-place">{item.place}</span>
        <div className="row">
          <div className="col-sm-12">
            {item.description}
          </div>
        </div>
      </div>
    </div>
  );


  const resp = {
    0:{
      items:1
    },
    500:{
      items:2
    },
    600:{
      items:3
    }
  };


  return (
  <div className="project-list">
    <OwlCarousel
      className="owl-theme"
      margin={15}
      autoplay={false}
      responsive={resp}
      >
      {list}
    </OwlCarousel>
  </div>
  );
};

export default template;
