import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import "./LoginPage.css";

const LoginPage = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className="login_area sticky_top_gap">
            <div className="container">
                <div className="contact">
                    <div className="contact-text section_bottom_gap">
                        <h4 className="text-center ">
                            <span className="text_tb_line">Log In</span>
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
                            <div className="col-lg-8 col-md-9 col-12">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Password"
                                    className="inputbox"
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
                                    <span className="left_border"></span> Log in{" "}
                                    <span className="right_border"></span>
                                </button>
                                <p className="mt_25 mb_5">
                                    <span>Login</span>
                                    <span
                                        className="login_icon"
                                        onClick={signInUsingGoogle}
                                    >
                                        <i className="fab fa-google"></i>
                                    </span>
                                    <span className="login_icon">
                                        <i className="fab fa-facebook"></i>
                                    </span>
                                </p>
                                <p id="my-form-status">
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
