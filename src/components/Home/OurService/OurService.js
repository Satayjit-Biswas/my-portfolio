import React, { useEffect, useState } from "react";
import "./OurService.css";
const OurService = () => {
    const [loading, setLoading] = useState(true);
    const [HomeService, setHomeService] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then((res) => res.json())
            .then((data) => {
                setHomeService(data);
                setLoading(false);
            });
    }, []);
    return (
        <div className="our-services section_top_gap" id="service">
            <div className="container">
                <div className="service-text">
                    <h4 className="text-center section_bottom_gap">
                        <span className="text_tb_line">My Services</span>
                    </h4>
                </div>
                <div className="row">
                    {loading ? (
                        <div className="text-center">
                            <div
                                className="spinner-border text-warning"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    ) : (
                        HomeService.map((e) => (
                            <div key={e._id} className="col-lg-4 col-md-6">
                                <div className="service-box text-center">
                                    <span>
                                        <i className={e.icon}></i>
                                    </span>
                                    <h3>{e.title}</h3>
                                    <p>{e.description}</p>
                                </div>
                            </div>
                        ))
                    )}
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="service-box text-center">
                            <span>
                                <i className="fal fa-cogs"></i>
                            </span>
                            <h3>Branding Identity</h3>
                            <p>
                                am an expert web designer and developer.
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text .
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default OurService;
