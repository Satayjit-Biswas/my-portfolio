import React from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
    return (
        <div className="register_area sticky_top_gap">
            <div className="container">
                <div class="contact">
                    <div class="contact-text section_bottom_gap">
                        <h4 class="text-center ">
                            <span className="text_tb_line">Create Account</span>
                        </h4>
                    </div>
                    <form>
                        <div class="row justify-content-center align-items-center">
                            <div class="col-lg-8 col-md-9 col-12">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    class="inputbox"
                                    required
                                />
                            </div>
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
                                    <span class="left_border"></span> Create
                                    Account
                                    <span class="right_border"></span>
                                </button>
                                <p id="my-form-status" className="mt_30">
                                    Already have an account?
                                    <Link to="/loginpage" className="ml_10">
                                        ( login )
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

export default RegisterPage;
