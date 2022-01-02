import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
    return (
        <div className="error_page sticky_top_gap">
            <div className="container">
                <div className="error_page_box">
                    <div>
                        <h4>404</h4>
                        <h5>page not found</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
