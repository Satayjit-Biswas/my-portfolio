import React, { useEffect } from "react";
import "./Header.css";
import logo from "../../../assets/img/1up.png";
import { Link } from "react-router-dom";
import img from "../../../assets/img/Man-Icon.png";
import $ from "jquery";
import useFirebase from "../../../hooks/useFirebase";
const Header = () => {
    const { user, logOut } = useFirebase();
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

    useEffect(() => {
        if (user.email) {
            const login_icon = document.querySelector(".login_icon");
            login_icon.addEventListener("click", () => {
                const login_icon_menu = document.querySelector(".login_menu");
                login_icon_menu.classList.toggle("d-none");
            });
            $(document).mouseup(function (e) {
                if (
                    $(e.target).closest(".login_menu,.login_icon").length === 0
                ) {
                    $(".login_menu").addClass("d-none");
                }
            });
        }
    }, [user.email]);
    return (
        <header className="header_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 logo col-5">
                        <Link to="/">
                            <img src={logo} className="img-fluid logo" alt="" />
                        </Link>
                    </div>
                    <div className="col-md-9 col-7 position-relative">
                        <ul className="menu">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link"
                                    onClick={() => current()}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/servicepage"
                                    className="nav-link"
                                    onClick={() => current()}
                                >
                                    Service
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/projectpage"
                                    className="nav-link"
                                    onClick={() => current()}
                                >
                                    My project
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/blogpage"
                                    className="nav-link"
                                    onClick={() => current()}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contactpage"
                                    className="nav-link"
                                    onClick={() => current()}
                                >
                                    Contact
                                </Link>
                            </li>
                            {user.email ? (
                                <li className="nav-item">
                                    <div className="login_icon">
                                        <img
                                            src={
                                                user.photoURL
                                                    ? user.photoURL
                                                    : img
                                            }
                                            alt=""
                                        />
                                        <ul className="login_menu d-none">
                                            <li className="nav-item">
                                                <Link
                                                    to="/profile"
                                                    className="nav-link"
                                                    onClick={() => current()}
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            <li
                                                className="nav-item"
                                                onClick={logOut}
                                            >
                                                <Link
                                                    to="/loginpage"
                                                    className="nav-link"
                                                    onClick={() => current()}
                                                >
                                                    logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link
                                        to="/loginpage"
                                        className="nav-link"
                                        onClick={() => current()}
                                    >
                                        login
                                    </Link>
                                </li>
                            )}
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
