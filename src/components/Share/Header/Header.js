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
                        <Link to="/">
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
                                    to="/aboutpage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/servicepage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    Service
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/projectpage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    My project
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/blogpage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contactpage"
                                    class="nav-link"
                                    onClick={() => current()}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/loginpage"
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
