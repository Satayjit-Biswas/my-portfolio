import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Allblog = () => {
    const [allblog, setUserblog] = useState([]);
    const [loading, setloading] = useState([true]);
    //fetch  ServerUser
    const url = "https://coderchefserver.herokuapp.com/blog";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((blog) => {
                setUserblog(blog);
                setloading(false);
            });
    }, []);
    // delete blog
    const Deleteblog = (id) => {
        const sure = window.confirm("Are You Sure Delete Your blog...?");
        if (sure) {
            const url = `https://coderchefserver.herokuapp.com/blog/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Delete blog");
                        const previewblog = allblog.filter(
                            (blog) => blog._id !== id
                        );
                        setUserblog(previewblog);
                    }
                });
        }
    };
    return (
        <div className="alluser_page mt_20">
            <h4 className="text-center">
                <span className="text_tb_line">
                    All blog ( {allblog.length} )
                </span>
            </h4>
            <div className="alluser_page_form">
                <table>
                    <tr>
                        <th>blog Title</th>
                        <th>blog Date</th>
                        <th>blog categories</th>
                        <th>Edit</th>
                    </tr>
                    {loading ? (
                        <div className="text-center mt_30">
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
                        allblog.map((e) => (
                            <tr>
                                <td>{e.blog_title}</td>
                                <td>{e.blog_date}</td>
                                <td>{e.blog_categories}</td>
                                <td>
                                    <button
                                        className="delete_btn"
                                        onClick={() => Deleteblog(e._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Allblog;
