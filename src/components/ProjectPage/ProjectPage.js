import React, { useEffect, useState } from "react";
import ProjectCategories from "./ProjectCategories/ProjectCategories";
import Projects from "./Projects/Projects";

const ProjectPage = () => {
    const [allproject, setProject] = useState([]);
    const [allfilterProject, setfilterProject] = useState([]);
    const [loading, setloading] = useState([true]);

    //fetch  ServerProject
    const url = "http://localhost:5000/project";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((project) => {
                setProject(project);
                setfilterProject(project);
                setloading(false);
            });
    }, []);
    // filter project
    const filterProject = (categ) => {
        const updateProject = allproject.filter((item) => {
            return item.project_categories == categ;
        });
        setfilterProject(updateProject);
    };
    return (
        <div className="post_details sticky_top_gap">
            <div className="container">
                <div className="blog_area_box">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ads728_90"></div>
                            <Projects
                                allproject={allfilterProject}
                                loading={loading}
                            ></Projects>
                            <div className="ads728_90"></div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_site ml_20 mb_10">
                                <div className="ads320_50"></div>
                                <ProjectCategories
                                    filterProject={(e) => filterProject(e)}
                                ></ProjectCategories>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
