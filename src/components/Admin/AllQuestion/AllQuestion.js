import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AllQuestion = () => {
    const [allquestion, setQuestion] = useState([]);
    const [loading, setloading] = useState([true]);
    //fetch  ServerUser
    const url = "http://localhost:5000/question";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((question) => {
                setQuestion(question);
                setloading(false);
            });
    }, []);
    // delete service
    const Deletequestion = (id) => {
        const sure = window.confirm("Are You Sure Delete Your question");
        if (sure) {
            const url = `http://localhost:5000/question/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast.success("Delete question");
                        const previewquestion = allquestion.filter(
                            (question) => question._id !== id
                        );
                        setQuestion(previewquestion);
                    }
                });
        }
    };
    return (
        <div className="alluser_page mt_20">
            <h4 className="text-center">
                <span className="text_tb_line">
                    All question ( {allquestion.length} )
                </span>
            </h4>
            <div className="alluser_page_form">
                <table>
                    <tr>
                        <th>question</th>
                        <th>Answer</th>
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
                        allquestion.map((e) => (
                            <tr>
                                <td>{e.question}</td>
                                <td>{e.answer}</td>
                                <td>
                                    <button
                                        className="delete_btn"
                                        onClick={() => Deletequestion(e._id)}
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

export default AllQuestion;
