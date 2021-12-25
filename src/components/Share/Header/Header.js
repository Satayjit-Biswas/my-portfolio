import React from "react";
import "./Header.css";
import logo from "../../../assets/img/logo.png";

const Header = () => {
    // add sticky when you scrolling
    window.onscroll = function () {
        myFunction();
    };
    function myFunction() {
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            document.querySelector(".header_area").classList.add("sticky");
        } else {
            document.querySelector(".header_area").classList.remove("sticky");
        }
    }
    // Offcanvas toggle
    const current = () => {
        const addclass = document.querySelector(".header_area");
        addclass.classList.toggle("current");
        const hidden = document.querySelector("body");
        hidden.classList.toggle("overflow-hidden");
    };
    return (
        <header className="header_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-5">
                        <a href="#">
                            <img src={logo} class="img-fluid logo" alt="" />
                        </a>
                    </div>
                    <div className="col-md-9 col-7 position-relative">
                        <ul className="menu">
                            <li className="nav-item">
                                <a
                                    href="#"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    Service
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    My project
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    login
                                </a>
                            </li>
                        </ul>
                        <div className="Offcanvas" onClick={() => current()}>
                            <span></span>
                            <span className="middle"></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
