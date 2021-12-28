import React from "react";
import Post from "./Post/Post";
import "./BlogPage.css";
import RecentPost from "./RecentPost/RecentPost";
import Categories from "./Categories/Categories";

const BlogPage = () => {
    return (
        <div className="blog_area sticky_top_gap">
            <div className="container">
                <div className="blog_area_box">
                    <div className="row">
                        <div className="col-lg-8">
                            <Post></Post>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_site mb_10">
                                <RecentPost></RecentPost>
                                <Categories></Categories>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
