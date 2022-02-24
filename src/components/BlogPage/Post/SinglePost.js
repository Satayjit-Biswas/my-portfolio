import React from "react";
import { useNavigate } from "react-router-dom";

const SinglePost = (props) => {
    const {
        _id,
        blog_img,
        blog_title,
        blog_categories,
        blog_date,
        blog_conclusion,
        blog_youtube_link,
        blog_fb_link,
        blog_twitter_link,
        blog_instagram_link,
        blog_github_link,
    } = props.blog;
    const navigate = useNavigate();
    const BlogDetals = () => {
        navigate(`postdetails/${_id}`);
    };
    return (
        <div className="post_area_box">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="post_img">
                        <a href="#" onClick={BlogDetals}>
                            <img src={blog_img} alt="" className="img-fluid" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-7">
                    <h2 className="post_title">
                        <a href="#" onClick={BlogDetals}>
                            {blog_title}
                        </a>
                    </h2>
                    <div className="post_date mt_5 mb_5">
                        <span className="mr_20">
                            Categories : {blog_categories}
                        </span>
                        <span>{blog_date}</span>
                    </div>
                    <div className="post_details mb_10">
                        <p>{blog_conclusion.substring(0, 160)} ....</p>
                    </div>
                    <div className="post_read_more">
                        <a href="#" onClick={BlogDetals} className="custom_btn">
                            <span className="left_border"></span> read more
                            <span className="right_border"></span>
                        </a>
                    </div>
                    <div className="post_icon mt_10">
                        <div className="post_icon_box">
                            <a href={blog_youtube_link} target="_blank">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href={blog_fb_link} target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={blog_twitter_link} target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href={blog_instagram_link} target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href={blog_github_link} target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
