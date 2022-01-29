import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import DeshboardHome from "./DeshboardHome/DeshboardHome";
import DeshboardMenu from "./DeshboardMenu/DeshboardMenu";

const Dashboard = () => {
    useEffect(() => {
        const click_toggle = document.querySelector(".dashboard_toggle");
        click_toggle.addEventListener("click", () => {
            const addclass = document.querySelector(".dashboard_left_side");
            addclass.classList.toggle("click_toggle");
        });
    }, []);

    return (
        <div className="dashboard_area sticky_top_gap">
            <div className="dashboard_left_side ">
                <div className="dashboard_toggle">
                    <i className="far fa-angle-right"></i>
                </div>
                <div className="dashboard_menu">
                    <div className="dashboard_member_address">
                        <h5>
                            Name : <span>Satayjit biswas</span>
                        </h5>
                        <h5>
                            Role :<span>Admin</span>
                        </h5>
                    </div>
                    <div className="DeshboardMenu_icon">
                        <i className="fal fa-home"></i>
                    </div>
                    <DeshboardMenu></DeshboardMenu>
                </div>
            </div>
            <div className="container">
                <div className="dashboard_right_side">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
