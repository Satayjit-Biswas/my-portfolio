import React, { useEffect } from "react";
import OurService from "../Home/OurService/OurService";
import "./ServicePage.css";

const ServicePage = () => {
    useEffect(() => {
        let accordion_show = document.querySelector(".accordion-collapse");
        accordion_show.classList.add("show");
        console.log(accordion_show);
        let accordion_remove = document.querySelector(".accordion-button");
        accordion_remove.classList.remove("collapsed");
        console.log(accordion_remove);
    }, []);

    return (
        <div className="service_area">
            <OurService></OurService>
            <div className="container">
                <div className="Question">
                    <h4 class="text-center section_bottom_gap">
                        <span className="text_tb_line">Some Question</span>
                    </h4>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Accordion Item #3
                            </button>
                            <div
                                id="collapse1"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2"
                                aria-expanded="false"
                            >
                                Accordion Item #3
                            </button>
                            <div
                                id="collapse2"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Accordion Item #3
                            </button>
                            <div
                                id="collapseThree"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div class="accordion-body">
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
