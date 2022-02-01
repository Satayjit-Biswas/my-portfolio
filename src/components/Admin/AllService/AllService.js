import React, { useEffect, useState } from "react";

const AllService = () => {
    const [allService, setUserService] = useState([]);
    const [loading, setloading] = useState([true]);
    //fetch  ServerUser
    const url = "http://localhost:5000/service";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((Service) => {
                setUserService(Service);
                setloading(false);
            });
    }, []);
    return (
        <div className="alluser_page mt_20">
            <h4 className="text-center">
                <span className="text_tb_line">
                    All Service ( {allService.length} )
                </span>
            </h4>
            <div className="alluser_page_form">
                <table>
                    <tr>
                        <th>Service Title</th>
                        <th>description</th>
                        <th>Edit</th>
                    </tr>
                    {allService.map((e) => (
                        <tr>
                            <td>{e.title}</td>
                            <td>{e.description}</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default AllService;
