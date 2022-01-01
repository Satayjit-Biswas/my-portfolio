import React from "react";
import ProjectCategories from "../ProjectCategories/ProjectCategories";
import img from "../../../assets/img/bg1.jpg";
import "./ProjectDetails.css";
const ProjectDetails = () => {
    return (
        <div className="project_details sticky_top_gap">
            <div className="container">
                <div className="project_details_box">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ads728_90"></div>
                            <h3 className="">Bike Store e-commerce Website</h3>
                            <div className="project_details_img my-3">
                                <img src={img} alt="" srcset="" />
                            </div>
                            <h5>Which has been used in the project :</h5>
                            <p>
                                Bootstrap 5.x , Fontawesome , React , Node.js,
                                Firebase ,Mongodb
                            </p>
                            <h5>Description This Project :</h5>
                            <p>
                                This is an amazing bike store website. There are
                                many variations of passages of Lorem Ipsum
                                available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text. All the Lorem Ipsum generators on the
                                Internet tend to repeat predefined chunks as
                                necessary, making this the first true generator
                                on the Internet. It uses a dictionary of over
                                200 Latin words, combined with a handful of
                                model sentence structures, to generate Lorem
                                Ipsum which looks reasonable. The generated
                                Lorem Ipsum is therefore always free from
                                repetition, injected humour, or
                                non-characteristic words etc.
                            </p>
                            <div className="ads728_90"></div>
                            <div className="project_details_img my-5">
                                <img src={img} alt="" srcset="" />
                            </div>
                            <p>
                                This is an amazing bike store website. There are
                                many variations of passages of Lorem Ipsum
                                available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text. All the Lorem Ipsum generators on the
                                Internet tend to repeat predefined chunks as
                                necessary, making this the first true generator
                                on the Internet. It uses a dictionary of over
                                200 Latin words, combined with a handful of
                                model sentence structures, to generate Lorem
                                Ipsum which looks reasonable. The generated
                                Lorem Ipsum is therefore always free from
                                repetition, injected humour, or
                                non-characteristic words etc.
                            </p>
                            <div className="ads728_90"></div>
                            <div className="project_details_img my-5">
                                <img src={img} alt="" srcset="" />
                            </div>
                            <p className="mb_20">
                                This is an amazing bike store website. There are
                                many variations of passages of Lorem Ipsum
                                available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text. All the Lorem Ipsum generators on the
                                Internet tend to repeat predefined chunks as
                                necessary, making this the first true generator
                                on the Internet. It uses a dictionary of over
                                200 Latin words, combined with a handful of
                                model sentence structures, to generate Lorem
                                Ipsum which looks reasonable. The generated
                                Lorem Ipsum is therefore always free from
                                repetition, injected humour, or
                                non-characteristic words etc.
                            </p>
                            <div className="ads728_90"></div>
                            <div className="project_link mb_10">
                                <h5>Project live Link :</h5>
                                <a href="#">
                                    https://bike-store-a5d20.web.app/
                                </a>
                                <h5>Project Client Link :</h5>
                                <a href="https://bike-store-a5d20.web.app/">
                                    https://bike-store-a5d20.web.app/
                                </a>
                                <h5>Project Server Link :</h5>
                                <a href="https://github.com/Satayjit-Biswas/P.hero-Project-12-Server-Site-Bike-Store">
                                    https://github.com/Satayjit-Biswas/P.hero-Project-12-Server-Site-Bike-Store
                                </a>
                                <h5>Project Youtube Link :</h5>
                                <a href="https://github.com/Satayjit-Biswas/P.hero-Project-12-Server-Site-Bike-Store">
                                    https://github.com/Satayjit-Biswas/P.hero-Project-12-Server-Site-Bike-Store
                                </a>
                            </div>
                            <div className="ads728_90"></div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_site ml_20 mb_10">
                                <div className="ads320_50"></div>
                                <ProjectCategories></ProjectCategories>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
