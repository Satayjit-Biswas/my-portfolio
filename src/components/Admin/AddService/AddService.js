import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "../../../hooks/useFirebase";

const AddService = () => {
    const { userrole } = useFirebase();
    const [serviceData, setServiceData] = useState({
        icon: "",
        title: "",
        description: "",
    });
    //handle input
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setServiceData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    // submit Service
    const submitService = (e) => {
        e.preventDefault();
        if (userrole == "admin") {
            fetch("http://localhost:5000/service", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(serviceData),
            }).then((res) => {
                setServiceData({
                    icon: "",
                    title: "",
                    description: "",
                });
                toast.success("Add Service");
            });
        } else {
            toast.error("Sorry you are not admin");
        }
    };

    return (
        <div className="home_contact_area section_top_gap">
            <div className="container">
                <div className="contact">
                    <div className="contact-text section_bottom_gap">
                        <h4 className="text-center ">
                            <span className="text_tb_line">Add Service</span>
                        </h4>
                    </div>
                    <form onSubmit={submitService}>
                        <div className="row">
                            <div className="col-md-6">
                                <input
                                    name="icon"
                                    type="text"
                                    placeholder="Icon Name"
                                    className="inputbox"
                                    value={serviceData.icon}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    name="title"
                                    type="text"
                                    placeholder="Service title"
                                    className="inputbox"
                                    value={serviceData.title}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name="description"
                                    className="inputbox"
                                    placeholder="Message"
                                    value={serviceData.description}
                                    required
                                    onChange={InputEvent}
                                ></textarea>
                            </div>
                            <div className="col-12 text-center">
                                <p id="my-form-status"></p>
                                <button
                                    type="submit"
                                    className="button mt-3"
                                    value="Submit"
                                    id="my-form"
                                    className="custom_btn"
                                >
                                    <span className="left_border"></span> ADD
                                    service{" "}
                                    <span className="right_border"></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddService;
