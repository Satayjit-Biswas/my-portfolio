import React from "react";
import ProjectCategories from "./ProjectCategories/ProjectCategories";
import Projects from "./Projects/Projects";

const ProjectPage = () => {
    return (
        <div className="post_details sticky_top_gap">
            <div className="container">
                <div className="blog_area_box">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ads728_90"></div>
                            <Projects></Projects>
                            <div className="ads728_90"></div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_site ml_20 mb_10">
                                <div className="ads320_50"></div>
                                <ProjectCategories></ProjectCategories>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
