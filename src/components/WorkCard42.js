import "./WorkCardStyles.css";

import React from "react";

const WorkCard42 = (props) => {
    return (
        <div className="project-card">
            <a href={props.source}><img src={props.imgsrc} alt="" /></a>
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns-other">
                    <a href={props.source} className="btn">Source</a>
                </div>
            </div>
        </div>
    );
};

export default WorkCard42;
