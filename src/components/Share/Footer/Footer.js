import React from "react";
import logo from "../../../assets/img/logo.png";
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            {/* <!--====== BACK TO TOP START ======--> */}
            <a href="#" className="back-to-top">
                <i className="fal fa-angle-up"></i>
            </a>
            {/* <!--====== BACK TO TOP ENDS ======--> */}
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-text text-center">
                        <div className="footer-img dark-footer-img">
                            <img src={logo} alt="" className="img-fluid" />
                        </div>
                        <div className="footer-icon">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                        <p className="mt_25">
                            Developer by
                            <span className="f_color pl_5">
                                Satayjit Biswas
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
