import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./DeshboardMenu.css";

const DeshboardMenu = () => {
    useEffect(() => {
        const click_Service = document.querySelector(".Service_menu");
        click_Service.addEventListener("click", () => {
            const add_drop_down_class =
                document.querySelector(".Service_drop_menu");
            add_drop_down_class.classList.toggle("show_drop_menu");
            const icon_rotate = document.querySelector(".Service_menu");
            icon_rotate.classList.toggle("rotate");
        });
        const click_user = document.querySelector(".user_menu");
        click_user.addEventListener("click", () => {
            const add_drop_down_class =
                document.querySelector(".user_drop_menu");
            add_drop_down_class.classList.toggle("show_drop_menu");
            const icon_rotate = document.querySelector(".user_menu");
            icon_rotate.classList.toggle("rotate");
        });
        const click_project = document.querySelector(".project_menu");
        click_project.addEventListener("click", () => {
            const add_drop_down_class =
                document.querySelector(".project_drop_menu");
            add_drop_down_class.classList.toggle("show_drop_menu");
            const icon_rotate = document.querySelector(".project_menu");
            icon_rotate.classList.toggle("rotate");
        });
    }, []);
    return (
        <div className="DeshboardMenu">
            <ul>
                <li>
                    <a href="#">Deshboard</a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#" className="DeshboardMenu_dropdown Service_menu">
                        Service
                    </a>
                    <div className="DeshboardMenu_dropdown_menu Service_drop_menu">
                        <ul>
                            <li>
                                <Link to="allservice">All Service</Link>
                            </li>
                            <li>
                                <Link to="addservice">Add Service</Link>
                            </li>
                            <li>
                                <Link to="allquestion">All Question</Link>
                            </li>
                            <li>
                                <Link to="addquestion">Add Question</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#" className="DeshboardMenu_dropdown project_menu">
                        My project
                    </a>
                    <div className="DeshboardMenu_dropdown_menu project_drop_menu">
                        <ul>
                            <li>
                                <Link to="allproject">All project</Link>
                            </li>
                            <li>
                                <Link to="addproject">Add project</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">blog</a>
                </li>
                <li>
                    <a href="#" className="DeshboardMenu_dropdown user_menu">
                        User
                    </a>
                    <div className="DeshboardMenu_dropdown_menu user_drop_menu">
                        <ul>
                            <li>
                                <Link to="alluser">All User</Link>
                            </li>
                            <li>
                                <a href="#">Make Admin</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default DeshboardMenu;
