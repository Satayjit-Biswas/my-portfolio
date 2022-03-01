import React from "react";
import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

const Projects = (props) => {
    const { allproject } = props;
    return (
        <div className="projects_area">
            <h4 className="text-center mb_30 mt_20">
                <span className="text_tb_line">All project</span>
            </h4>
            <div className="projects_area_box mb_20">
                {allproject.map((e) => (
                    <SingleProject key={e._id} projects={e}></SingleProject>
                ))}
            </div>
        </div>
    );
};

export default Projects;
