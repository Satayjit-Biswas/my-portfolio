import React from "react";
import "./RecentPost.css";
import img from "../../../assets/img/img_1.jpg";

const RecentPost = () => {
    return (
        <div className="recentpost_area">
            <div className="right_text">
                <h3>RECENT POSTS</h3>
            </div>
            <div className="recentpost_area_box">
                <div className="recentpost_img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2 className="recentpost_title">
                        <a href="#">
                            Alcohol After Botox: What Every Woman Should Know
                            Before Using
                        </a>
                    </h2>
                    <div className="recentpost_date">December 5, 2021</div>
                </div>
            </div>
            <div className="recentpost_area_box">
                <div className="recentpost_img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2 className="recentpost_title">
                        <a href="#">
                            Alcohol After Botox: What Every Woman Should Know
                            Before Using
                        </a>
                    </h2>
                    <div className="recentpost_date">December 5, 2021</div>
                </div>
            </div>
            <div className="recentpost_area_box">
                <div className="recentpost_img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2 className="recentpost_title">
                        <a href="#">
                            Alcohol After Botox: What Every Woman Should Know
                            Before Using
                        </a>
                    </h2>
                    <div className="recentpost_date">December 5, 2021</div>
                </div>
            </div>
            <div className="recentpost_area_box">
                <div className="recentpost_img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2 className="recentpost_title">
                        <a href="#">
                            Alcohol After Botox: What Every Woman Should Know
                            Before Using
                        </a>
                    </h2>
                    <div className="recentpost_date">December 5, 2021</div>
                </div>
            </div>
        </div>
    );
};

export default RecentPost;
