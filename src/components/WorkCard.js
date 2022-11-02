import "./WorkCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <NavLink to={props.view} ><img src={props.imgsrc} alt="" /></NavLink>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">View</NavLink>
          <a href={props.source} className="btn">Source</a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
