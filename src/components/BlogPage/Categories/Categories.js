import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Categories.css";
const Categories = (props) => {
    const { filterBlog } = props;
    const [BlogCategories, setBlogCategories] = useState([]);
    const [loading, setloading] = useState([true]);

    //fetch  ServerBlog
    const url = "http://localhost:5000/blog_categories";
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
                <div className="col-6">
                    {BlogCategories.map((e) => (
                        <div className="categories_link" key={e._id}>
                            <i className="fal fa-long-arrow-right"></i>
                            <a
                                href="#"
                                onClick={() => filterBlog(e.categories)}
                            >
                                {e.categories}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="col-6">
                    <div className="ads160_600"></div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
