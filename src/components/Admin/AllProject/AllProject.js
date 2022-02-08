import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AllProject = () => {
    const [allproject, setUserproject] = useState([]);
    const [loading, setloading] = useState([true]);
    //fetch  ServerUser
    const url = "http://localhost:5000/project";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((project) => {
                setUserproject(project);
                setloading(false);
            });
    }, []);
    // delete project
    const Deleteproject = (id) => {
        const sure = window.confirm("Are You Sure Delete Your project");
        if (sure) {
            const url = `http://localhost:5000/project/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Delete project");
                        const previewproject = allproject.filter(
                            (project) => project._id !== id
                        );
                        setUserproject(previewproject);
                    }
                });
        }
    };
    return (
        <div className="alluser_page mt_20">
            <h4 className="text-center">
                <span className="text_tb_line">
                    All project ( {allproject.length} )
                </span>
            </h4>
            <div className="alluser_page_form">
                <table>
                    <tr>
                        <th>project Title</th>
                        <th>project live link</th>
                        <th>project categories</th>
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
                        allproject.map((e) => (
                            <tr>
                                <td>{e.project_title}</td>
                                <td>{e.project_live_link}</td>
                                <td>{e.project_categories}</td>
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

export default AllProject;
