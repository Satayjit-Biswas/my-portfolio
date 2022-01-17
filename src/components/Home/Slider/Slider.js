import React from "react";
import "./Slider.css";
import bg from "../../../assets/img/bg1.jpg";
import Typewriter from "typewriter-effect";

const Slider = () => {
    return (
        <div
            className="slider-area dark-slider-area"
            style={{
                backgroundImage: `url(${bg})`,
            }}
            id="home"
        >
            <div className="container">
                <div className="slider-text mt_50">
                    <h5>Hello I'm</h5>
                    <h2
                        className="btn-name text-white"
                        data-text="Satayjit Biswas"
                    >
                        Satayjit Biswas
                    </h2>
                    <div>
                        <span className="creative">And Junior</span>
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
                        className="custom_btn"
                        target="_blank"
                        href="https://drive.google.com/file/d/14QKggrA5L74HLjJxyQMGmwcFaKvQHtET/view?fbclid=IwAR0-kC-Vww0ipmUtRbT0D2u1l1fd92mPS-YkirWHS2Tkctsz-bI_40vUsi8"
                    >
                        <span className="left_border"></span>
                        view Resume
                        <span className="right_border"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Slider;
