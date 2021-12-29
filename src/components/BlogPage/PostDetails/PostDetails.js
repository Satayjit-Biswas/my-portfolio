import React from "react";
import Categories from "../Categories/Categories";
import RecentPost from "../RecentPost/RecentPost";

const PostDetails = () => {
    return (
        <div className="post_details sticky_top_gap">
            <div className="container">
                <div className="blog_area_box">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ads728_90"></div>
                            <h2>Coming........</h2>
                            <div className="ads728_90"></div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_site ml_20 mb_10">
                                <div className="ads320_50"></div>
                                <RecentPost></RecentPost>
                                <div className="ads336_280"></div>
                                <Categories></Categories>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
