import React from "react";
import { Link } from "react-router-dom";
import "./ForgetPage.css";

const ForgetPage = () => {
    return (
        <div className="forget_area sticky_top_gap">
            <div className="container">
                <div className="contact">
                    <div className="contact-text section_bottom_gap">
                        <h4 className="text-center ">
                            <span className="text_tb_line">
                                Forget Password
                            </span>
                        </h4>
                    </div>
                    <form>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-8 col-md-9 col-12">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="inputbox"
                                    required
                                />
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
                                    <span className="left_border"></span>{" "}
                                    Continue
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

export default ForgetPage;
