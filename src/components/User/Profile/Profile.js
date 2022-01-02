import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/img/Man-Icon.png";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile_area">
            <div className="container">
                <div className="profile_box">
                    <div className="profile_sub_box">
                        <div className="profile_sub_box_img">
                            <img src={img} alt="" srcset="" />
                        </div>
                        <div className="profile_sub_box_text">
                            <div className="user_name">
                                <h5>Name :</h5>
                                <p>Satayjit Biswas</p>
                            </div>
                            <div className="user_gmail">
                                <h5>Email :</h5>
                                <p>satayjitbiswas1@gmail.com</p>
                            </div>
                            <div className="user_role mb_40">
                                <h5>role :</h5>
                                <p>Admin</p>
                            </div>
                            <Link to="/admin" class="custom_btn mr_15">
                                <span class="left_border"></span>
                                dashboard link
                                <span class="right_border"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
