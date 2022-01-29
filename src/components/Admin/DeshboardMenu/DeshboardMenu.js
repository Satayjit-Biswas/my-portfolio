import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./DeshboardMenu.css";

const DeshboardMenu = () => {
    useEffect(() => {
        const click_drop_down = document.querySelector(
            ".DeshboardMenu_dropdown"
        );
        click_drop_down.addEventListener("click", () => {
            const add_drop_down_class =
                document.querySelector(".DeshboardMenu");
            add_drop_down_class.classList.toggle("show_drop_menu");
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
                    <a href="#" className="DeshboardMenu_dropdown">
                        Service
                    </a>
                    <div className="DeshboardMenu_dropdown_menu">
                        <ul>
                            <li>
                                <a href="#">All Service</a>
                            </li>
                            <li>
                                <Link to="addservice">Add Service</Link>
                            </li>
                            <li>
                                <a href="#">All Question</a>
                            </li>
                            <li>
                                <a href="#">Add Question</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">My project</a>
                </li>
                <li>
                    <a href="#">blog</a>
                </li>
            </ul>
        </div>
    );
};

export default DeshboardMenu;
