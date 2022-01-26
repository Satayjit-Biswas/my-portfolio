import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import "./ForgetPage.css";

const ForgetPage = () => {
    const { setError, resetInPass, error, user } = useFirebase();
    const [resetemail, setResetEmail] = useState(" ");

    const handleresetemail = (e) => {
        setResetEmail(e.target.value);
    };
    const handleResetWithEmail = (e) => {
        e.preventDefault();
        if (user.email) {
            setError("Sorry You Are Already Login");
        } else {
            resetInPass(resetemail);
        }
    };
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
                    <form onSubmit={handleResetWithEmail}>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-8 col-md-9 col-12">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="inputbox"
                                    onBlur={handleresetemail}
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
                                <p className="text-center mt_10 text-danger">
                                    {error}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPage;
