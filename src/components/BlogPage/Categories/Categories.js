import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Categories.css";
const Categories = (props) => {
    const { filterBlog } = props;
    const [BlogCategories, setBlogCategories] = useState([]);
    const [loading, setloading] = useState([true]);

    //fetch  ServerBlog
    const url = "https://coderchefserver.herokuapp.com/blog_categories";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((Blog) => {
                setBlogCategories(Blog);
                setloading(false);
            });
    }, []);
    return (
        <div className="categories_area ">
            <div className="right_text">
                <h3>CATEGORIES</h3>
            </div>
            <div className="row">
                <div className="col-md-6 col-4">
                    {loading ? (
                        <div className="text-center mt_30 mb_30">
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
                        BlogCategories.map((e) => (
                            <div className="categories_link" key={e._id}>
                                <i className="fal fa-long-arrow-right"></i>
                                <a
                                    href="#"
                                    onClick={() => filterBlog(e.categories)}
                                >
                                    {e.categories}
                                </a>
                            </div>
                        ))
                    )}
                </div>
                <div className="col-md-6 col-8">
                    <div className="d-flex justify-content-center">
                        <div className="ads160_600"></div>
                        <div className="ads336_280"></div>
                        <div className="ads320_100"></div>
                        <div className="ads200_200"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
