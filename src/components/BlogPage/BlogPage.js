import React, { useState,useEffect } from "react";
import Post from "./Post/Post";
import "./BlogPage.css";
import RecentPost from "./RecentPost/RecentPost";
import Categories from "./Categories/Categories";
import { Outlet } from "react-router-dom";


const BlogPage = () => {
    const [allblog, setBlog] = useState([]);
    const [allfilterblog, setFilterBlog] = useState([]);
    const [loading, setloading] = useState([true]);

    //fetch  Serverblog
    const url = "http://localhost:5000/blog";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((blog) => {
                setBlog(blog);
                setFilterBlog(blog);
                setloading(false);
            });
    }, []);
    // filter blog
    const filterblog = (categ) => {
        const updateblog = allblog.filter((item) => {
            return item.blog_categories == categ;
        });
        setFilterBlog(updateblog);
    };
    console.log(Outlet);
    return (
        <div className="blog_area sticky_top_gap">
            <div className="container">
                <div className="blog_area_box">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ads728_90"></div>
                            <Post allblog={allfilterblog}
                                loading={loading}></Post>
                            <div className="ads728_90"></div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_site ml_20 mb_10">
                                <div className="ads320_50"></div>
                                <RecentPost></RecentPost>
                                <div className="ads336_280"></div>
                                <Categories filterblog={(e) => filterblog(e)}></Categories>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
