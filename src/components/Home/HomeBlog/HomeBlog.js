import React from "react";
import OwlCarousel from "react-owl-carousel";
import img from "../../../assets/img/a.jpg";
import img2 from "../../../assets/img/img_5.jpg";
import img3 from "../../../assets/img/img_6.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./HomeBlog.css";

const HomeBlog = () => {
    const state = {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };
    return (
        <div className="home_blog_area section_top_gap position-relation">
            <div className="container">
                <div class="service-text">
                    <h4 class="text-center section_bottom_gap">
                        <span class="text_tb_line">Our Blog</span>
                    </h4>
                </div>
                <OwlCarousel
                    className="owl-theme"
                    dots={false}
                    margin={15}
                    responsive={state.responsive}
                    smartSpeed={1000}
                    nav
                >
                    <div class="item">
                        <div class="blog-box">
                            <div
                                class="blog-img"
                                style={{
                                    backgroundImage: `url(${img})`,
                                }}
                            ></div>
                            <div class="blog-details">
                                <span class="blog-date mr_5">
                                    25/12/21 by Admin
                                </span>
                                <div className="d-flex a">
                                    <span class="blog-date mr_10">
                                        Category :
                                    </span>
                                    <div className="tag">
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            React js
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                    </div>
                                </div>

                                <div class="blog-title">
                                    <h3 class="mt_15 mb_15">
                                        <a href="#">
                                            Bike Store e-commerce Website .
                                        </a>
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's ....
                                    </p>
                                    <div class="arrow mt_5 text-end">
                                        <a href="#">
                                            <i class="fal fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="blog-box">
                            <div
                                class="blog-img"
                                style={{
                                    backgroundImage: `url(${img})`,
                                }}
                            ></div>
                            <div class="blog-details">
                                <span class="blog-date mr_5">
                                    25/12/21 by Admin
                                </span>
                                <div className="d-flex a">
                                    <span class="blog-date mr_10">
                                        Category :
                                    </span>
                                    <div className="tag">
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            React js
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                    </div>
                                </div>

                                <div class="blog-title">
                                    <h3 class="mt_15 mb_15">
                                        <a href="#">
                                            Bike Store e-commerce Website .
                                        </a>
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's ....
                                    </p>
                                    <div class="arrow mt_5 text-end">
                                        <a href="#">
                                            <i class="fal fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="blog-box">
                            <div
                                class="blog-img"
                                style={{
                                    backgroundImage: `url(${img})`,
                                }}
                            ></div>
                            <div class="blog-details">
                                <span class="blog-date mr_5">
                                    25/12/21 by Admin
                                </span>
                                <div className="d-flex a">
                                    <span class="blog-date mr_10">
                                        Category :
                                    </span>
                                    <div className="tag">
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            React js
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                    </div>
                                </div>

                                <div class="blog-title">
                                    <h3 class="mt_15 mb_15">
                                        <a href="#">
                                            Bike Store e-commerce Website .
                                        </a>
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's ....
                                    </p>
                                    <div class="arrow mt_5 text-end">
                                        <a href="#">
                                            <i class="fal fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="blog-box">
                            <div
                                class="blog-img"
                                style={{
                                    backgroundImage: `url(${img})`,
                                }}
                            ></div>
                            <div class="blog-details">
                                <span class="blog-date mr_5">
                                    25/12/21 by Admin
                                </span>
                                <div className="d-flex a">
                                    <span class="blog-date mr_10">
                                        Category :
                                    </span>
                                    <div className="tag">
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            React js
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                    </div>
                                </div>

                                <div class="blog-title">
                                    <h3 class="mt_15 mb_15">
                                        <a href="#">
                                            Bike Store e-commerce Website .
                                        </a>
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's ....
                                    </p>
                                    <div class="arrow mt_5 text-end">
                                        <a href="#">
                                            <i class="fal fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="blog-box">
                            <div
                                class="blog-img"
                                style={{
                                    backgroundImage: `url(${img})`,
                                }}
                            ></div>
                            <div class="blog-details">
                                <span class="blog-date mr_5">
                                    25/12/21 by Admin
                                </span>
                                <div className="d-flex a">
                                    <span class="blog-date mr_10">
                                        Category :
                                    </span>
                                    <div className="tag">
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            React js
                                            <span class="right_border"></span>
                                        </a>
                                        <a
                                            href="#"
                                            class="custom_btn tag_bottom"
                                        >
                                            <span class="left_border"></span>
                                            html
                                            <span class="right_border"></span>
                                        </a>
                                    </div>
                                </div>

                                <div class="blog-title">
                                    <h3 class="mt_15 mb_15">
                                        <a href="#">
                                            Bike Store e-commerce Website .
                                        </a>
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's ....
                                    </p>
                                    <div class="arrow mt_5 text-end">
                                        <a href="#">
                                            <i class="fal fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default HomeBlog;
