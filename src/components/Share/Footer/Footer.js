import React from "react";
import logo from "../../../assets/img/1up.png";
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
                            <a
                                href="https://www.facebook.com/coderchef.net"
                                target="_blank"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://twitter.com/satayjit_biswas"
                                target="_blank"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCNcSqV3wd5skkUPJ-_HQqzQ">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/satayjit-biswas/"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="https://github.com/Satayjit-Biswas"
                                target="_blank"
                            >
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
