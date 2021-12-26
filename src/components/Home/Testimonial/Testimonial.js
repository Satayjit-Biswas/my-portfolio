import React from "react";
import OwlCarousel from "react-owl-carousel";
import img from "../../../assets/img/a.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
import Rating from "@mui/material/Rating";

const Testimonial = () => {
    return (
        <div className="testimonial_area section_top_gap">
            <div className="container">
                <h4 class="text-center section_bottom_gap">
                    <span class="text_tb_line">Client Review</span>
                </h4>
                <OwlCarousel
                    className="owl-theme"
                    items={1}
                    loop
                    smartSpeed={1000}
                    margin={15}
                >
                    <div className="item">
                        <div class="client-review-box text-center">
                            <div class="client-img">
                                <img src={img} alt="client-img" />
                            </div>
                            <div class="client-name">Mr. Lari Cokko</div>
                            <div class="star">
                                <Rating
                                    name="half-rating-read"
                                    defaultValue={3.5}
                                    precision={0.5}
                                    readOnly
                                />
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div class="client-review-box text-center">
                            <div class="client-img">
                                <img src={img} alt="client-img" />
                            </div>
                            <div class="client-name">Mr. Lari Cokko</div>
                            <div class="star">
                                <Rating
                                    name="half-rating-read"
                                    defaultValue={5}
                                    precision={0.5}
                                    readOnly
                                />
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div class="client-review-box text-center">
                            <div class="client-img">
                                <img src={img} alt="client-img" />
                            </div>
                            <div class="client-name">Mr. Lari Cokko</div>
                            <div class="star">
                                <Rating
                                    name="half-rating-read"
                                    defaultValue={4.5}
                                    precision={0.5}
                                    readOnly
                                />
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonial;
