import "./WorkCardStyles.css";
import WorkCard42 from "./WorkCard42";
import WorkCardData42 from "./WorkCardData42";

import React from "react";

const Work42 = () => {
    return <div className="work-container">
        <h1 className="project-heading">42 School Projects</h1>
        <div className="project-container">
            {WorkCardData42.map((val, ind) => {
                return (
                    <WorkCard42
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        source={val.source}
                    />
                );
            })}
        </div>
    </div>;
};
export default Work42;