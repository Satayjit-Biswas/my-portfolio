import React from "react";
import img from "../../../assets/img/img_5.jpg";
import "./Post.css";
import SinglePost from "./SinglePost";
const Post = (props) => {
    const { allblog, loading } = props;

    return (
        <div className="post_area ">
            <h4 className="text-center mb_30 mt_20">
                <span className="text_tb_line">All post</span>
            </h4>
            {allblog.map((e) => (
                <SinglePost key={e._id} blog={e}></SinglePost>
            ))}
            {/* <div className="post_area_box">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="post_img">
                            <a href="#">
                                <img src={img} alt="" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <h2 className="post_title">
                            <a href="#">
                                Alcohol After Botox: What Every Woman Should
                                Know Before Using
                            </a>
                        </h2>
                        <div className="post_date mt_5 mb_5">
                            December 5, 2021
                        </div>
                        <div className="post_details mb_10">
                            <p>
                                Did you know that Botox bruising is a
                                treatment’s most frequent adverse effect? Botox
                                is ....
                            </p>
                        </div>
                        <div className="post_read_more">
                            <a href="#" className="custom_btn">
                                <span className="left_border"></span> read more
                                <span className="right_border"></span>
                            </a>
                        </div>
                        <div className="post_icon mt_10">
                            <div className="post_icon_box">
                                <a href="#" target="_blank">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Post;
