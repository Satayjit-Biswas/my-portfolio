import React from "react";
import { Link } from "react-router-dom";
import "./ForgetPage.css";

const ForgetPage = () => {
    return (
        <div className="forget_area sticky_top_gap">
            <div className="container">
                <div class="contact">
                    <div class="contact-text section_bottom_gap">
                        <h4 class="text-center ">
                            <span className="text_tb_line">
                                Forget Password
                            </span>
                        </h4>
                    </div>
                    <form>
                        <div class="row justify-content-center align-items-center">
                            <div class="col-lg-8 col-md-9 col-12">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class="inputbox"
                                    required
                                />
                            </div>
                            <div class="col-12 text-center">
                                <p id="my-form-status"></p>
                                <button
                                    type="submit"
                                    class="button mt-3"
                                    value="Submit"
                                    id="my-form"
                                    className="custom_btn"
                                >
                                    <span class="left_border"></span> Continue
                                    <span class="right_border"></span>
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
