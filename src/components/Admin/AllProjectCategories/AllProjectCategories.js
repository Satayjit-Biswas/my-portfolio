import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProjectCategories = () => {
    const [AllprojectCategories, setAllprojectCategories] = useState([]);
    const [loading, setloading] = useState([true]);
    //fetch  project Categories
    const url = "http://localhost:5000/project_categories";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((projectCategories) => {
                setAllprojectCategories(projectCategories);
                setloading(false);
            });
    }, []);
    // delete project Categories
    const Deleteproject = (id) => {
        const sure = window.confirm(
            "Are You Sure Delete Your Project categories...?"
        );
        if (sure) {
            const url = `http://localhost:5000/project_categories/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Delete Project Categories");
                        const previewproject = AllprojectCategories.filter(
                            (project) => project._id !== id
                        );
                        setAllprojectCategories(previewproject);
                    }
                });
        }
    };
    return (
        <div className="alluser_page mt_20">
            <h4 className="text-center">
                <span className="text_tb_line">
                    All project Categories ( {AllprojectCategories.length} )
                </span>
            </h4>
            <div className="alluser_page_form">
                <table>
                    <tr>
                        <th>project id</th>
                        <th>project categories</th>
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
                        AllprojectCategories.map((e) => (
                            <tr>
                                <td>{e._id}</td>
                                <td>{e.categories}</td>
                                <td>
                                    <button
                                        className="delete_btn"
                                        onClick={() => Deleteproject(e._id)}
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

export default AllProjectCategories;
