import React from "react";
import img from "../../../assets/img/img_5.jpg";
import "./Post.css";
import SinglePost from "./SinglePost";
const Post = (props) => {
    const { allblog } = props;

    return (
        <div className="post_area ">
            <h4 className="text-center mb_30 mt_20">
                <span className="text_tb_line">All post</span>
            </h4>
            {allblog.map((e) => (
                <SinglePost key={e._id} blog={e}></SinglePost>
            ))}
        </div>
    );
};

export default Post;
