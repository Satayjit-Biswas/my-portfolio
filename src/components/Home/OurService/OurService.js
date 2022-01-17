import React, { Component } from "react";
import "./OurService.css";

export class OurService extends Component {
    render() {
        return (
            <div className="our-services section_top_gap" id="service">
                <div className="container">
                    <div className="service-text">
                        <h4 className="text-center section_bottom_gap">
                            <span className="text_tb_line">My Services</span>
                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box text-center">
                                <span>
                                    <i className="fal fa-laptop"></i>
                                </span>
                                <h3>Web Design</h3>
                                <p>
                                    am an expert web designer and developer.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box text-center">
                                <span>
                                    <i className="fal fa-pencil-paintbrush"></i>
                                </span>
                                <h3>Creative Design</h3>
                                <p>
                                    am an expert web designer and developer.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box text-center">
                                <span>
                                    <i className="fal fa-code"></i>
                                </span>
                                <h3>Web Development</h3>
                                <p>
                                    am an expert web designer and developer.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box text-center">
                                <span>
                                    <i className="far fa-mobile"></i>
                                </span>
                                <h3>Responsive Design</h3>
                                <p>
                                    am an expert web designer and developer.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box text-center">
                                <span>
                                    <i className="fas fa-headset"></i>
                                </span>
                                <h3>24/Support</h3>
                                <p>
                                    am an expert web designer and developer.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text .
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-box text-center">
                                <span>
                                    <i className="fal fa-cogs"></i>
                                </span>
                                <h3>Branding Identity</h3>
                                <p>
                                    am an expert web designer and developer.
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurService;
