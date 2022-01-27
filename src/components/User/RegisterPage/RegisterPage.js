import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import "./RegisterPage.css";

const RegisterPage = () => {
    const { createUserWithEmail, error, setError, user, setloading, loading } =
        useFirebase();
    const [regname, setRegname] = useState(" ");
    const [regemail, setEmail] = useState(" ");
    const [regpass, setPass] = useState(" ");

    const handleName = (e) => {
        setRegname(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePass = (e) => {
        setPass(e.target.value);
    };
    const handleRegistration = (e) => {
        e.preventDefault();
        if (user.email) {
            setError("Sorry You Are Already Login");
        } else {
            createUserWithEmail(regemail, regpass, regname);
        }
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
                    <form onSubmit={handleRegistration}>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-8 col-md-9 col-12">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="inputbox"
                                    onBlur={handleName}
                                    required
                                />
                            </div>
                            <div className="col-lg-8 col-md-9 col-12">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="inputbox"
                                    onBlur={handleEmail}
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
                                    onBlur={handlePass}
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
                                    <span className="left_border"></span>
                                    {loading ? "Loading..." : "Create Account"}
                                    <span className="right_border"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                    <p className="text-center mt_10 text-danger">{error}</p>
                    <p id="my-form-status" className="text-center mt_30">
                        Already have an account?
                        <Link to="/loginpage" className="ml_10">
                            ( login )
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
