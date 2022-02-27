import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "../../../hooks/useFirebase";
const AddQuestion = () => {
    const { userrole } = useFirebase();

    const [questionData, setQuestionData] = useState({
        question: "",
        answer: "",
    });
    //handle input
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setQuestionData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    // submit question
    const submitquestion = (e) => {
        e.preventDefault();
        if (userrole == "admin") {
            fetch("https://coderchefserver.herokuapp.com/question", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(questionData),
            }).then((res) => {
                setQuestionData({
                    question: "",
                    answer: "",
                });
                toast.success("Add question");
            });
        } else {
            toast.error("Sorry you are not admin");
        }
    };
    return (
        <div className="home_contact_area section_top_gap">
            <div className="container">
                <div className="contact">
                    <div className="contact-text section_bottom_gap">
                        <h4 className="text-center ">
                            <span className="text_tb_line">Add Question</span>
                        </h4>
                    </div>
                    <form onSubmit={submitquestion}>
                        <div className="row">
                            <div className="col-12">
                                <input
                                    name="question"
                                    type="text"
                                    placeholder="Question :"
                                    className="inputbox"
                                    value={questionData.question}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>

                            <div className="col-12">
                                <textarea
                                    name="answer"
                                    className="inputbox"
                                    placeholder="Answer :"
                                    value={questionData.answer}
                                    onChange={InputEvent}
                                    required
                                ></textarea>
                            </div>
                            <div className="col-12 text-center">
                                <p id="my-form-status"></p>
                                <button
                                    type="submit"
                                    className="button mt-3"
                                    value="Submit"
                                    id="my-form"
                                    className="custom_btn"
                                >
                                    <span className="left_border"></span> ADD
                                    question{" "}
                                    <span className="right_border"></span>
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

export default AddQuestion;
