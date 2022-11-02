import "./WorkCardStyles.css";
import WorkCard42 from "./WorkCard42";
import WorkCardDataOther from "./WorkCardDataOther";
import React from "react";

const WorkOther = () => {
    return <div className="work-container">
        <h1 className="project-heading">Other Projects</h1>
        <div className="project-container-other">
            {WorkCardDataOther.map((val, ind) => {
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
export default WorkOther;