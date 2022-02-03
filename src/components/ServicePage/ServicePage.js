import React, { useEffect, useState } from "react";
import OurService from "../Home/OurService/OurService";
import "./ServicePage.css";

const ServicePage = () => {
    const [allquestion, setQuestion] = useState([]);
    const [loading, setloading] = useState([true]);
    useEffect(() => {
        let accordion_show = document.querySelector(".accordion-collapse");
        accordion_show.classList.add("show");
        let accordion_remove = document.querySelector(".accordion-button");
        accordion_remove.classList.remove("collapsed");
    }, [allquestion]);

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
    return (
        <div className="service_area">
            <OurService></OurService>
            <div className="container">
                <div className="Question">
                    <h4 className="text-center section_bottom_gap">
                        <span className="text_tb_line">Some Question</span>
                    </h4>
                    <div className="accordion" id="accordionExample">
                        {loading ? (
                            <div className="text-center">
                                <div
                                    class="spinner-border text-warning"
                                    role="status"
                                >
                                    <span class="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        ) : (
                            allquestion.map((e) => (
                                <div key={e._id} className="accordion-item">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={"#a" + e._id}
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        {e.question}
                                    </button>
                                    <div
                                        id={"a" + e._id}
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {e.answer}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        <div className="accordion-item d-none">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2"
                                aria-expanded="false"
                            ></button>
                            <div
                                id="collapse2"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
