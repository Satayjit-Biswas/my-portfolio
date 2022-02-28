import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecentPost from "../RecentPost/RecentPost";
import "./PostDetails.css";
const PostDetails = () => {
    const { id } = useParams();
    const [GetBlog, setGetBlog] = useState({});
    const [loading, setloading] = useState([true]);
    useEffect(() => {
        fetch(`https://coderchefserver.herokuapp.com/blog/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setGetBlog(data);
                setloading(false);
            });
    }, [id]);
    const {
        blog_title,
        blog_img,
        blog_date,
        blog_categories,
        blog_conclusion,
        blog_description,
    } = GetBlog;

    return (
        <div className="post_details sticky_top_gap">
            <div className="container">
                <div className="blog_area_box">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="post_details_right">
                                <div className="blog_left_site mb_20">
                                    <div className="d-flex justify-content-center">
                                        <div className="ads728_90"></div>
                                        <div className="ads468_60"></div>
                                        <div className="ads320_100"></div>
                                    </div>
                                </div>
                                {loading ? (
                                    <div className="text-center mt_30 mb_30">
                                        <div
                                            className="spinner-border text-warning"
                                            role="status"
                                        >
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h2 className="mb_20">{blog_title}</h2>
                                        <div className="post_date mt_5 mb_5">
                                            <span className="mr_20">
                                                Categories : {blog_categories}
                                            </span>
                                            <span>{blog_date}</span>
                                        </div>
                                        <p className="mb_20">
                                            {blog_conclusion}
                                        </p>
                                        <img
                                            src={blog_img}
                                            alt=""
                                            className="img-fluid mb_20"
                                        />
                                        <div className="post_details mb_10">
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: blog_description,
                                                }}
                                            ></p>
                                        </div>
                                    </div>
                                )}
                                <div className="blog_left_site mt_20">
                                    <div className="d-flex justify-content-center">
                                        <div className="ads728_90"></div>
                                        <div className="ads468_60"></div>
                                        <div className="ads320_100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_site ml_20 mb_10">
                                <div className="d-flex justify-content-center">
                                    <div className="ads320_50"></div>
                                    <div className="ads468_60"></div>
                                    <div className="ads250_250"></div>
                                    <div className="ads320_100"></div>
                                </div>
                                <RecentPost></RecentPost>
                                <div className="d-flex justify-content-center">
                                    <div className="ads320_50"></div>
                                    <div className="ads468_60"></div>
                                    <div className="ads250_250"></div>
                                    <div className="ads320_100"></div>
                                    <div className="ads336_280"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
