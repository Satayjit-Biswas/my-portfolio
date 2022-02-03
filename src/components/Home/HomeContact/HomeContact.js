import React, { useState } from "react";
import "./HomeContact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeContact = () => {
    const [emailData, setemailData] = useState({
        name: "",
        email: "",
        message: "",
    });
    //handle input
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setemailData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    // submit email
    const submitemail = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/sendemail", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(emailData),
        }).then((res) => {
            setemailData({
                name: "",
                email: "",
                message: "",
            });
            toast.success("Send Message");
        });
    };
    return (
        <div className="home_contact_area section_top_gap">
            <div className="container">
                <div className="contact">
                    <div className="contact-text section_bottom_gap">
                        <h4 className="text-center ">
                            <span className="text_tb_line">Contact me</span>
                        </h4>
                    </div>
                    <form onSubmit={submitemail}>
                        <div className="row">
                            <div className="col-md-6">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="inputbox"
                                    value={emailData.name}
                                    onChange={InputEvent}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="inputbox"
                                    required
                                    value={emailData.email}
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name="message"
                                    className="inputbox"
                                    placeholder="Message"
                                    onChange={InputEvent}
                                    required
                                    value={emailData.message}
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
                                    <span className="left_border"></span> Send
                                    Message{" "}
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

export default HomeContact;
