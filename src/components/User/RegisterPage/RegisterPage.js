import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
    const [regname, setRegname] = useState(" ");
    const [regemail, setEmail] = useState(" ");
    const [regpass, setPass] = useState(" ");
    const [error, setError] = useState(" ");
    const [loading, setloading] = useState(false);

    const handleName = (e) => {
        setRegname(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePass = (e) => {
        setPass(e.target.value);
    };
    return (
        <div className="register_area sticky_top_gap">
            <div className="container">
                <div className="contact">
                    <div className="contact-text section_bottom_gap">
                        <h4 className="text-center ">
                            <span className="text_tb_line">Create Account</span>
                        </h4>
                    </div>
                    <form>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-8 col-md-9 col-12">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="inputbox"
                                    required
                                />
                            </div>
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
                                    <span className="left_border"></span> Create
                                    Account
                                    <span className="right_border"></span>
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
