import React from "react";
import HomeContact from "../Home/HomeContact/HomeContact";
import "./ContactPage.css";

const ContactPage = () => {
    return (
        <div className="sticky_top_gap">
            <div className="contact_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-6">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="contact_address_box">
                                    <div className="contact_address_sub_box">
                                        <div className="contact_address_icon">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact_address_text">
                                            <h5>Address :</h5>
                                            <p>Mirpur 11 , Dhaka , BD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-6">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="contact_address_box">
                                    <div className="contact_address_sub_box">
                                        <div className="contact_address_icon">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="contact_address_text">
                                            <h5>Gmail :</h5>
                                            <p>
                                                <a href="mailto:satayjitbiswas1@gmail.com">
                                                    satayjitbiswas1@gmail.com
                                                </a>
                                            </p>
                                            <p>
                                                <a href="mailto:satayjitbiswas1@gmail.com">
                                                    satayjitbiswas2@gmail.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-6">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="contact_address_box">
                                    <div className="contact_address_sub_box">
                                        <div className="contact_address_icon">
                                            <i className="fal fa-mobile"></i>
                                        </div>
                                        <div className="contact_address_text">
                                            <h5>Call Me :</h5>
                                            <p>
                                                <a href="tel:01783100136">
                                                    +8801783100136
                                                </a>
                                            </p>
                                            <p>
                                                <a href="tel:01887829710">
                                                    +8801887829710
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 col-6">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="contact_address_box">
                                    <div className="contact_address_sub_box">
                                        <div className="contact_address_icon">
                                            <i className="fal fa-share-alt"></i>{" "}
                                        </div>
                                        <div className="contact_address_text">
                                            <h5>Social Media :</h5>
                                            <p>
                                                <a href="#">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-skype"></i>
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
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HomeContact></HomeContact>
            </div>
        </div>
    );
};

export default ContactPage;
