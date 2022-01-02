import React from "react";
import "./Projects.css";
import img from "../../../assets/img/img_5.jpg";
const Projects = () => {
    return (
        <div className="projects_area">
            <h4 class="text-center mb_30 mt_20">
                <span className="text_tb_line">All project</span>
            </h4>
            <div className="projects_area_box mb_20">
                <div className="project_item">
                    <div className="project_item_img1">
                        <a href="#">
                            <img src={img} alt="" />
                        </a>
                    </div>
                    <div className="project_item_text">
                        <div className="project_item_date">
                            <p>
                                Start Date :<span> 21/10/2021</span>
                            </p>
                            <p>
                                End Date :<span> 30/10/2021</span>
                            </p>
                        </div>
                        <h3 class="mt_15 mb_15">
                            <a href="#">Bike Store e-commerce Website .</a>
                        </h3>
                        <p>
                            This is an amazing bike store website. There are
                            many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in so....
                        </p>
                        <div className="post_read_more mt_20 mb_10">
                            <a href="#" className="custom_btn">
                                <span class="left_border"></span>
                                details
                                <span class="right_border"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project_item">
                    <div className="project_item_img1">
                        <a href="#">
                            <img src={img} alt="" />
                        </a>
                    </div>
                    <div className="project_item_text">
                        <div className="project_item_date">
                            <p>
                                Start Date :<span> 21/10/2021</span>
                            </p>
                            <p>
                                End Date :<span> 30/10/2021</span>
                            </p>
                        </div>
                        <h3 class="mt_15 mb_15">
                            <a href="#">Bike Store e-commerce Website .</a>
                        </h3>
                        <p>
                            This is an amazing bike store website. There are
                            many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in so....
                        </p>
                        <div className="post_read_more mt_20 mb_10">
                            <a href="#" className="custom_btn">
                                <span class="left_border"></span>
                                details
                                <span class="right_border"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project_item">
                    <div className="project_item_img1">
                        <a href="#">
                            <img src={img} alt="" />
                        </a>
                    </div>
                    <div className="project_item_text">
                        <div className="project_item_date">
                            <p>
                                Start Date :<span> 21/10/2021</span>
                            </p>
                            <p>
                                End Date :<span> 30/10/2021</span>
                            </p>
                        </div>
                        <h3 class="mt_15 mb_15">
                            <a href="#">Bike Store e-commerce Website .</a>
                        </h3>
                        <p>
                            This is an amazing bike store website. There are
                            many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in so....
                        </p>
                        <div className="post_read_more mt_20 mb_10">
                            <a href="#" className="custom_btn">
                                <span class="left_border"></span>
                                details
                                <span class="right_border"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;