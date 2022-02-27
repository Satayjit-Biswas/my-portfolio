import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "../../../hooks/useFirebase";
import JoditEditor from "jodit-react";
import "./AddBlog.css";

const AddBlog = () => {
    const { userrole } = useFirebase();
    const editor = useRef(null);
    const [BlogDescription, setBlogDescription] = useState("");
    const d = new Date();
    var options = {
        weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };

    let datetime = d.toLocaleString("en-IN", options);
    const [blogData, setBlogData] = useState({
        blog_title: "",
        blog_img: "",
        blog_date: `${datetime}`,
        blog_categories: "",
        blog_conclusion: "",
        blog_youtube_link: "",
        blog_fb_link: "",
        blog_twitter_link: "",
        blog_instagram_link: "",
        blog_github_link: "",
        blog_description: "",
    });
    useEffect(() => {
        setBlogData((prev) => {
            return {
                ...prev,
                blog_description: `${BlogDescription}`,
            };
        });
    }, [BlogDescription]);

    console.log(BlogDescription);
    //handle input
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setBlogData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
        console.log(blogData);
    };
    // submit blog
    const submitblog = (e) => {
        e.preventDefault();
        if (userrole === "admin") {
            fetch("https://coderchefserver.herokuapp.com/blog", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(blogData),
            }).then((res) => {
                setBlogData({
                    blog_title: "",
                    blog_img: "",
                    blog_date: `${datetime}`,
                    blog_categories: "",
                    blog_conclusion: "",
                    blog_youtube_link: "",
                    blog_fb_link: "",
                    blog_twitter_link: "",
                    blog_instagram_link: "",
                    blog_github_link: "",
                });
                setBlogDescription("");
                toast.success("Add blog");
            });
        } else {
            toast.error("Sorry you are not admin");
        }
    };
    return (
        <div className="home_contact_area addblog_area section_top_gap">
            <div className="container">
                <div className="contact">
                    <div className="contact-text section_bottom_gap">
                        <h4 className="text-center ">
                            <span className="text_tb_line">Add blog</span>
                        </h4>
                    </div>
                    <form onSubmit={submitblog}>
                        <div className="row">
                            <div className="col-md-8">
                                <input
                                    name="blog_title"
                                    type="text"
                                    placeholder="Blog Title"
                                    className="inputbox"
                                    value={blogData.blog_title}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-4">
                                <input
                                    name="blog_categories"
                                    type="text"
                                    placeholder="Blog Categories"
                                    className="inputbox"
                                    value={blogData.blog_categories}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-8">
                                <input
                                    name="blog_img"
                                    type="text"
                                    placeholder="Blog Img Link"
                                    className="inputbox"
                                    value={blogData.blog_img}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-4">
                                <input
                                    name="blog_date"
                                    type="text"
                                    className="inputbox"
                                    value={blogData.blog_date}
                                    onChange={InputEvent}
                                    readOnly
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name="blog_conclusion"
                                    className="inputbox"
                                    placeholder="Blog Conclusion"
                                    value={blogData.blog_conclusion}
                                    required
                                    onChange={InputEvent}
                                ></textarea>
                            </div>
                            <div className="col-md-12">
                                <input
                                    name="blog_youtube_link"
                                    type="text"
                                    placeholder="Blog Youtube Link"
                                    className="inputbox"
                                    value={blogData.blog_youtube_link}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    name="blog_fb_link"
                                    type="text"
                                    placeholder="Blog Fb Link"
                                    className="inputbox"
                                    value={blogData.blog_fb_link}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    name="blog_twitter_link"
                                    type="text"
                                    placeholder="Blog Twitter Link"
                                    className="inputbox"
                                    value={blogData.blog_twitter_link}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    name="blog_instagram_link"
                                    type="text"
                                    placeholder="Blog Instagram Link"
                                    className="inputbox"
                                    value={blogData.blog_instagram_link}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    name="blog_github_link"
                                    type="text"
                                    placeholder="Blog Github Link"
                                    className="inputbox"
                                    value={blogData.blog_github_link}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-12">
                                <JoditEditor
                                    ref={editor}
                                    tabIndex={1} // tabIndex of textarea
                                    name="blog_description"
                                    value={BlogDescription}
                                    onChange={(e) => setBlogDescription(e)}
                                />
                            </div>
                            <div className="col-12 text-center mt_30">
                                <p id="my-form-status"></p>
                                <button
                                    type="submit"
                                    className="button mt-3"
                                    value="Submit"
                                    id="my-form"
                                    className="custom_btn"
                                >
                                    <span className="left_border"></span> ADD
                                    blog <span className="right_border"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddBlog;
