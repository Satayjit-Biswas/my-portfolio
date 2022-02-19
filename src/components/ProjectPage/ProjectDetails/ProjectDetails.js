import React,{ useEffect,useState } from "react";
import "./ProjectDetails.css";
import { useParams } from "react-router-dom";


const ProjectDetails = () => {
    const {id} = useParams();
    const [GetProject,setGetProject] =useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/project/${id}`)
            .then(res => res.json())
            .then(data => setGetProject(data))
    },[id])
    const {project_title,project_categories,description1,description2,description3,img1,img2,img3,project_client_link,project_live_link,project_server_link,project_using,project_youtube_link} = GetProject;
    return (
        <div className="project_details sticky_top_gap">
            <div className="container">
                <div className="project_details_box">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ads728_90"></div>
                            <h3 className="">{project_title}</h3>
                            <div className="project_details_img my-3">
                                <img src={img1} alt="" srcSet="" />
                            </div>
                            <h5>Which has been used in the project :</h5>
                            <p>
                                {project_using}
                            </p>
                            <h5>Description This Project :</h5>
                            <p>
                                {description1}
                            </p>
                            <div className="ads728_90"></div>
                            <div className="project_details_img my-5">
                                <img src={img2} alt="" srcSet="" />
                            </div>
                            <p>
                                {description2}
                            </p>
                            <div className="ads728_90"></div>
                            <div className="project_details_img my-5">
                                <img src={img3} alt="" srcSet="" />
                            </div>
                            <p className="mb_20">
                                {description3}
                            </p>
                            <div className="ads728_90"></div>
                            <div className="project_link mb_10">
                                <h5>Project live Link :</h5>
                                <a target="blank" href={project_live_link}>
                                    {project_live_link}
                                </a>
                                <h5>Project Client Link :</h5>
                                <a target="blank" href={project_client_link}>
                                    {project_client_link}
                                </a>
                                <h5>Project Server Link :</h5>
                                <a target="blank" href={project_server_link}>
                                    {project_server_link}
                                </a>
                                <h5>Project Youtube Link :</h5>
                                <a target="blank" href={project_youtube_link}>
                                    {project_youtube_link}
                                </a>
                            </div>
                            <div className="ads728_90"></div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog_right_site ml_20 mb_10">
                                <div className="ads320_50"></div>
                                {/* <ProjectCategories></ProjectCategories> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
