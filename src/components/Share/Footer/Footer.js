import React from "react";
import logo from "../../../assets/img/logo.png";
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            {/* <!--====== BACK TO TOP START ======--> */}
            <a href="#" class="back-to-top">
                <i class="fal fa-angle-up"></i>
            </a>
            {/* <!--====== BACK TO TOP ENDS ======--> */}
            <footer class="footer-area">
                <div class="container">
                    <div class="footer-text text-center">
                        <div class="footer-img dark-footer-img">
                            <img src={logo} alt="" class="img-fluid" />
                        </div>
                        <div class="footer-icon">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                        <p class="mt_25">
                            Developer by
                            <span class="f_color pl_5">Satayjit Biswas</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
