import React from "react";
import bg from "../../../assets/img/counterimg.jpg";
import "./Counter.css";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const Counter = () => {
    return (
        <div
            className="counter-area"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="counter-box text-center">
                                <i className="fal fa-user"></i>
                                <VisibilitySensor
                                    partialVisibility
                                    offset={{ bottom: 200 }}
                                >
                                    {({ isVisible }) => (
                                        <div style={{ height: 75 }}>
                                            {isVisible ? (
                                                <CountUp
                                                    duration={0.75}
                                                    start={0}
                                                    end={6}
                                                />
                                            ) : null}
                                        </div>
                                    )}
                                </VisibilitySensor>
                                <h3>Happy Clients</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter-box text-center">
                                <i className="fal fa-handshake"></i>
                                <VisibilitySensor
                                    partialVisibility
                                    offset={{ bottom: 200 }}
                                >
                                    {({ isVisible }) => (
                                        <div style={{ height: 75 }}>
                                            {isVisible ? (
                                                <CountUp
                                                    duration={0.75}
                                                    start={0}
                                                    end={12}
                                                />
                                            ) : null}
                                        </div>
                                    )}
                                </VisibilitySensor>
                                <h3>Project Done</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter-box text-center">
                                <i className="fal fa-comment-alt-smile"></i>
                                <VisibilitySensor
                                    partialVisibility
                                    offset={{ bottom: 200 }}
                                >
                                    {({ isVisible }) => (
                                        <div style={{ height: 75 }}>
                                            {isVisible ? (
                                                <CountUp
                                                    duration={0.75}
                                                    start={0}
                                                    end={5}
                                                />
                                            ) : null}
                                        </div>
                                    )}
                                </VisibilitySensor>
                                <h3>Total Review</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="counter-box text-center">
                                <i className="fal fa-history"></i>
                                <VisibilitySensor
                                    partialVisibility
                                    offset={{ bottom: 200 }}
                                >
                                    {({ isVisible }) => (
                                        <div style={{ height: 75 }}>
                                            {isVisible ? (
                                                <CountUp
                                                    duration={1.5}
                                                    start={0}
                                                    end={120}
                                                />
                                            ) : null}
                                        </div>
                                    )}
                                </VisibilitySensor>
                                <h3>Working Hours</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
