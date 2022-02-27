import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "../../../hooks/useFirebase";
import "./AddProject.css";

const AddProject = () => {
    const { userrole } = useFirebase();
    const [projectData, setProjectData] = useState({
        project_title: "",
        project_categories: "",
        project_using: "",
        project_live_link: "",
        project_client_link: "",
        project_server_link: "",
        project_youtube_link: "",
        img1: "",
        description1: "",
        img2: "",
        description2: "",
        img3: "",
        description3: "",
    });
    //handle input
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setProjectData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    // submit project
    const submitProject = (e) => {
        e.preventDefault();
        if (userrole === "admin") {
            fetch("https://coderchefserver.herokuapp.com/project", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(projectData),
            }).then((res) => {
                setProjectData({
                    project_title: "",
                    project_categories: "",
                    project_using: "",
                    project_live_link: "",
                    project_client_link: "",
                    project_server_link: "",
                    project_youtube_link: "",
                    img1: "",
                    description1: "",
                    img2: "",
                    description2: "",
                    img3: "",
                    description3: "",
                });
                toast.success("Add project");
            });
        } else {
            toast.error("Sorry you are not admin");
        }
    };
    return (
        <div className="home_contact_area addProject_area section_top_gap">
            <div className="container">
                <div className="contact">
                    <div className="contact-text section_bottom_gap">
                        <h4 className="text-center ">
                            <span className="text_tb_line">Add project</span>
                        </h4>
                    </div>
                    <form onSubmit={submitProject}>
                        <div className="row">
                            <div className="col-md-8">
                                <input
                                    name="project_title"
                                    type="text"
                                    placeholder="Project Title"
                                    className="inputbox"
                                    value={projectData.project_title}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-4">
                                <input
                                    name="project_categories"
                                    type="text"
                                    placeholder="Project Categories"
                                    className="inputbox"
                                    value={projectData.project_categories}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    name="project_using"
                                    type="text"
                                    placeholder="Which code has been used in this project ?"
                                    className="inputbox"
                                    value={projectData.project_using}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    name="project_live_link"
                                    type="text"
                                    placeholder="Project Live Link"
                                    className="inputbox"
                                    value={projectData.project_live_link}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    name="project_client_link"
                                    type="text"
                                    placeholder="Project Client Link"
                                    className="inputbox"
                                    value={projectData.project_client_link}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    name="project_server_link"
                                    type="text"
                                    placeholder="Project Server Link"
                                    className="inputbox"
                                    value={projectData.project_server_link}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    name="project_youtube_link"
                                    type="text"
                                    placeholder="Project Youtube Link"
                                    className="inputbox"
                                    value={projectData.project_youtube_link}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    name="img1"
                                    type="text"
                                    placeholder="Project img 1 Link"
                                    className="inputbox"
                                    value={projectData.img1}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name="description1"
                                    className="inputbox"
                                    placeholder="Description 1"
                                    value={projectData.description1}
                                    required
                                    onChange={InputEvent}
                                ></textarea>
                            </div>
                            <div className="col-md-12">
                                <input
                                    name="img2"
                                    type="text"
                                    placeholder="Project img 2 Link"
                                    className="inputbox"
                                    value={projectData.img2}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name="description2"
                                    className="inputbox"
                                    placeholder="Description 2"
                                    value={projectData.description2}
                                    required
                                    onChange={InputEvent}
                                ></textarea>
                            </div>
                            <div className="col-md-12">
                                <input
                                    name="img3"
                                    type="text"
                                    placeholder="Project img 3 Link"
                                    className="inputbox"
                                    value={projectData.img3}
                                    required
                                    onChange={InputEvent}
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name="description3"
                                    className="inputbox"
                                    placeholder="Description 3"
                                    value={projectData.description3}
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
                                    project{" "}
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

export default AddProject;
