import React from "react";
import "./HomeContact.css";

const HomeContact = () => {
    return (
        <div className="home_contact_area section_top_gap">
            <div className="container">
                <div class="contact">
                    <div class="contact-text section_bottom_gap">
                        <h4 class="text-center ">
                            <span className="text_tb_line">Contact me</span>
                        </h4>
                    </div>
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <input
                                    name="name :"
                                    type="text"
                                    placeholder="Your Name"
                                    class="inputbox"
                                    required
                                />
                            </div>
                            <div class="col-md-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class="inputbox"
                                    required
                                />
                            </div>
                            <div class="col-12">
                                <textarea
                                    name="Message :"
                                    class="inputbox"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <div class="col-12 text-center">
                                <p id="my-form-status"></p>
                                <button
                                    type="submit"
                                    class="button mt-3"
                                    value="Submit"
                                    id="my-form"
                                    className="custom_btn"
                                >
                                    <span class="left_border"></span> Send
                                    Message <span class="right_border"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;
