import React, { useEffect, useState } from "react";
import "./Alluser.css";
import Singleuserdata from "./Singleuserdata";
const Alluser = () => {
    const [userdata, setUserdata] = useState([]);
    const [loading, setloading] = useState([true]);
    //fetch  ServerUser
    const url = "http://localhost:5000/user";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUserdata(data);
                setloading(false);
            });
    }, []);
    return (
        <div className="alluser_page mt_20">
            <h4 className="text-center">
                <span className="text_tb_line">
                    All User ( {userdata.length} )
                </span>
            </h4>
            <div className="alluser_page_form">
                <table>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>role</th>
                    </tr>
                    {userdata.map((e) => (
                        <Singleuserdata key={e._id} user={e}></Singleuserdata>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Alluser;
