import React from "react";
import OwlCarousel from "react-owl-carousel";
import img from "../../../assets/img/a.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Testimonial = () => {
    return (
        <div className="testimonial_area">
            <div className="container">
                <OwlCarousel className="owl-theme" dots={false} margin={15} nav>
                    <div class="client-review-box text-center">
                        <div class="client-img">
                            <img
                                src="img/aaahhgjh.jpg"
                                alt=""
                                class="img-fluid"
                            />
                        </div>
                        <div class="client-name">Mr. Lari Cokko</div>
                        <div class="star">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonial;
