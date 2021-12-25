import React from "react";
import "./Slider.css";
import bg from "../../../assets/img/bg1.jpg";
import Typewriter from "typewriter-effect";

const Slider = () => {
    return (
        <div
            class="slider-area dark-slider-area"
            style={{
                backgroundImage: `url(${bg})`,
            }}
            id="home"
        >
            <div class="container">
                <div class="slider-text mt_50">
                    <h5>Hello I'm</h5>
                    <h2 class="btn-name text-white" data-text="Satayjit Biswas">
                        Satayjit Biswas
                    </h2>
                    <div>
                        <span class="creative">And Junior</span>
                        <span>
                            <Typewriter
                                options={{
                                    strings: ["Full stack developer"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 175,
                                }}
                            />
                        </span>
                    </div>
                    <a
                        class="custom_btn"
                        target="_blank"
                        href="https://drive.google.com/file/d/14QKggrA5L74HLjJxyQMGmwcFaKvQHtET/view?fbclid=IwAR0-kC-Vww0ipmUtRbT0D2u1l1fd92mPS-YkirWHS2Tkctsz-bI_40vUsi8"
                    >
                        <span class="left_border"></span>
                        view Resume
                        <span class="right_border"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
