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
    } = props.projects;
    const navigate = useNavigate();
    const projectDetals = () => {
        navigate(`projectdetails/${_id}`);
    };
    return (
        <div className="project_item">
            <div className="project_item_img1">
                <a href="#">
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
                    <span onClick={projectDetals}>{project_title}</span>
                </h3>
                <p>
                    This is an amazing bike store website. There are many
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in so....
                </p>
                <div className="post_read_more mt_20 mb_10">
                    <button onClick={projectDetals} className="custom_btn">
                        <span className="left_border"></span>
                        details
                        <span className="right_border"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
