import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllBlogCategories = () => {
    const [AllBlogCategories, setAllBlogCategories] = useState([]);
    const [loading, setloading] = useState([true]);
    //fetch  Blog Categories
    const url = "http://localhost:5000/blog_categories";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((BlogCategories) => {
                setAllBlogCategories(BlogCategories);
                setloading(false);
            });
    }, []);
    // delete Blog Categories
    const Deleteblog = (id) => {
        const sure = window.confirm(
            "Are You Sure Delete Your blog categories...?"
        );
        if (sure) {
            const url = `http://localhost:5000/blog_categories/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Delete Blog Categories");
                        const previewblog = AllBlogCategories.filter(
                            (blog) => blog._id !== id
                        );
                        setAllBlogCategories(previewblog);
                    }
                });
        }
    };
    return (
        <div className="alluser_page mt_20">
            <h4 className="text-center">
                <span className="text_tb_line">
                    All Blog Categories ( {AllBlogCategories.length} )
                </span>
            </h4>
            <div className="alluser_page_form">
                <table>
                    <tr>
                        <th>blog id</th>
                        <th>blog categories</th>
                        <th>Edit</th>
                    </tr>
                    {loading ? (
                        <div className="text-center mt_30">
                            <div
                                class="spinner-border text-warning"
                                role="status"
                            >
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        AllBlogCategories.map((e) => (
                            <tr>
                                <td>{e._id}</td>
                                <td>{e.categories}</td>
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

export default AllBlogCategories;
