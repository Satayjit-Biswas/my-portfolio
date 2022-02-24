import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/img/img_1.jpg";

const SimpleRecentPost = (props) => {
    const {
        _id,
        blog_img,
        blog_title,
        blog_categories,
        blog_date,
        blog_conclusion,
    } = props.blog;
    const navigate = useNavigate();
    const location = useLocation();
    const BlogDetals = () => {
        navigate(`/postdetails/${_id}`);
    };
    return (
        <div className="recentpost_area_box">
            <div className="recentpost_img">
                <img onClick={BlogDetals} src={blog_img} alt="" />
            </div>
            <div>
                <h2 className="recentpost_title">
                    <a href="#" onClick={BlogDetals}>
                        {blog_title}
                    </a>
                </h2>
                <div className="recentpost_date">{blog_date}</div>
            </div>
        </div>
    );
};

export default SimpleRecentPost;
