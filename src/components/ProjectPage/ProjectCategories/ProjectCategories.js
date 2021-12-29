import React from "react";

const ProjectCategories = () => {
    return (
        <div className="project_categories_area ">
            <div className="right_text">
                <h3>Project CATEGORIES</h3>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="categories_link">
                        <i class="fal fa-long-arrow-right"></i>
                        <a href="#">html 5</a>
                    </div>
                    <div className="categories_link">
                        <i class="fal fa-long-arrow-right"></i>
                        <a href="#">css 3</a>
                    </div>
                    <div className="categories_link">
                        <i class="fal fa-long-arrow-right"></i>
                        <a href="#">react</a>
                    </div>
                    <div className="categories_link">
                        <i class="fal fa-long-arrow-right"></i>
                        <a href="#">bootstrap</a>
                    </div>
                </div>
                <div className="col-6">
                    <div className="ads160_600"></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCategories;
