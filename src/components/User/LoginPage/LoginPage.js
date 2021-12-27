import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div className="login_area sticky_top_gap">
            <div className="container">
                <div class="contact">
                    <div class="contact-text section_bottom_gap">
                        <h4 class="text-center ">
                            <span className="text_tb_line">Log In</span>
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
                            <div class="col-lg-8 col-md-9 col-12">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Password"
                                    class="inputbox"
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
                                    <span class="left_border"></span> Log in{" "}
                                    <span class="right_border"></span>
                                </button>
                                <p id="my-form-status" className="mt_30">
                                    <Link to="/forgetpage" className="mr_10">
                                        Forgotten Password ?
                                    </Link>
                                    <Link to="/registerpage">
                                        Create New Account
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
