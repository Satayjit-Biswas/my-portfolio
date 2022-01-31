import React from "react";

const Singleuserdata = (props) => {
    const { name, email, role } = props.user;
    console.log(props);
    return (
        <tr>
            <td>{name}</td>
            <td className="User_email">{email} </td>
            <td>{role}</td>
        </tr>
    );
};

export default Singleuserdata;
