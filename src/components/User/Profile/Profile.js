import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/img/Man-Icon.png";
import useFirebase from "../../../hooks/useFirebase";
import "./Profile.css";

const Profile = () => {
    const { user, username, useremail, userrole } = useFirebase();
    const [admin, setadmin] = useState(false);
    useEffect(() => {
        if (userrole === "admin") {
            setadmin(true);
        }
    }, [userrole]);
    
    return (
        <div className="profile_area">
            <div className="container">
                <div className="profile_box">
                    <div className="profile_sub_box">
                        <div className="profile_sub_box_img">
                            <img
                                src={user.photoURL ? user.photoURL : img}
                                alt=""
                                srcSet=""
                            />
                        </div>
                        <div className="profile_sub_box_text">
                            {useremail ? (
                                <>
                                    <div className="user_name">
                                        <h5>Name :</h5>
                                        <p>{username}</p>
                                    </div>
                                    <div className="user_gmail">
                                        <h5>Email :</h5>
                                        <p>{useremail}</p>
                                    </div>
                                    <div className="user_role mb_40">
                                        <h5>role :</h5>
                                        <p>{userrole}</p>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center mt_20">
                                    <div
                                        className="spinner-border text-warning"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                            )}
                            {admin ? (
                                <Link to="/admin" className="custom_btn mr_15">
                                    <span className="left_border"></span>
                                    dashboard link
                                    <span className="right_border"></span>
                                </Link>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
