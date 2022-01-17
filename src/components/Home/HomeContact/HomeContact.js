import React from "react";
import "./HomeContact.css";

const HomeContact = () => {
    return (
        <div className="home_contact_area section_top_gap">
            <div className="container">
                <div className="contact">
                    <div className="contact-text section_bottom_gap">
                        <h4 className="text-center ">
                            <span className="text_tb_line">Contact me</span>
                        </h4>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <input
                                    name="name :"
                                    type="text"
                                    placeholder="Your Name"
                                    className="inputbox"
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="inputbox"
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name="Message :"
                                    className="inputbox"
                                    placeholder="Message"
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
        </div>
    );
};

export default HomeContact;
