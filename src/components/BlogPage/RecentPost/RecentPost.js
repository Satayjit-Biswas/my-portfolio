import React, { useEffect, useState } from "react";
import "./RecentPost.css";
import img from "../../../assets/img/img_1.jpg";
import SinglePost from "../Post/SinglePost";
import SimpleRecentPost from "./SimpleRecentPost";

const RecentPost = () => {
    const [allblog, setBlog] = useState([]);
    const [loading, setloading] = useState([true]);

    //fetch  Serverblog
    const url = "http://localhost:5000/blog";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((blog) => {
                setBlog(blog.slice(-5));
                setloading(false);
            });
    }, []);
    return (
        <div className="recentpost_area">
            <div className="right_text">
                <h3>RECENT POSTS</h3>
            </div>
            {loading ? (
                <div className="text-center mt_30 mb_30">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                allblog.map((e) => (
                    <SimpleRecentPost key={e._id} blog={e}></SimpleRecentPost>
                ))
            )}
        </div>
    );
};

export default RecentPost;
