import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SingleProject = (props) => {
    const {
        _id,
        img1,
        project_categories,
        project_title,
        project_start_date,
        project_end_date,
        description1,
    } = props.projects;
    const navigate = useNavigate();
    const projectDetals = () => {
        navigate(`projectdetails/${_id}`);
    };
    return (
        <div className="project_item">
            <div className="project_item_img1">
                <a href="#" onClick={projectDetals}>
                    <img src={img1} alt="" />
                </a>
            </div>
            <div className="project_item_text">
                <div className="project_item_date">
                    <p>
                        Start Date :<span> {project_start_date}</span>
                    </p>
                    <p>
                        Finish Date :<span> {project_end_date}</span>
                    </p>
                </div>
                <div className="project_categories mt_5">
                    <p>
                        Categories :<span> {project_categories}</span>
                    </p>
                </div>
                <h3 className="mt_5 mb_15">
                    <a href="#" onClick={projectDetals}>
                        {project_title}
                    </a>
                </h3>
                <p>{description1.substr(0, 115)} ....</p>
                <div className="post_read_more mt_20 mb_10">
                    <a href="#" onClick={projectDetals} className="custom_btn">
                        <span className="left_border"></span>
                        details
                        <span className="right_border"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
