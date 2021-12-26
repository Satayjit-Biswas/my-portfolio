import React from "react";
import "./Header.css";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";

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
    };
    return (
        <header className="header_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-5">
                        <Link to="#">
                            <img src={logo} class="img-fluid logo" alt="" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-7 position-relative">
                        <ul className="menu">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/aboutPage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/servicePage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    Service
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/projectPage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    My project
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contactPage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/loginPage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    login
                                </Link>
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
