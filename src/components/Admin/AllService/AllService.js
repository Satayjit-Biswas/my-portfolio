import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AllService = () => {
    const [allService, setUserService] = useState([]);
    const [loading, setloading] = useState([true]);
    //fetch  ServerUser
    const url = "http://localhost:5000/service";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((Service) => {
                setUserService(Service);
                setloading(false);
            });
    }, []);
    // delete service
    const DeleteService = (id) => {
        const sure = window.confirm("Are You Sure Delete Your Service");
        if (sure) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Delete Service");
                        const previewService = allService.filter(
                            (Service) => Service._id !== id
                        );
                        setUserService(previewService);
                    }
                });
        }
    };
    return (
        <div className="alluser_page mt_20">
            <h4 className="text-center">
                <span className="text_tb_line">
                    All Service ( {allService.length} )
                </span>
            </h4>
            <div className="alluser_page_form">
                <table>
                    <tr>
                        <th>Service Title</th>
                        <th>description</th>
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
                        allService.map((e) => (
                            <tr>
                                <td>{e.title}</td>
                                <td>{e.description}</td>
                                <td>
                                    <button
                                        className="delete_btn"
                                        onClick={() => DeleteService(e._id)}
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

export default AllService;
