import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import img from "../../../assets/img/a.jpg";
import img2 from "../../../assets/img/img_5.jpg";
import img3 from "../../../assets/img/img_6.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./HomeBlog.css";
import { useLocation, useNavigate } from "react-router-dom";

const HomeBlog = () => {
    const state = {
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    };
    const [Recentblog, setRecentBlog] = useState([]);
    const [loading, setloading] = useState([true]);

    //fetch  Serverblog
    const url = "https://coderchefserver.herokuapp.com/blog";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((blog) => {
                setRecentBlog(blog.slice(-6));
                setloading(false);
            });
    }, []);
    const navigate = useNavigate();
    const location = useLocation();
    const BlogDetals = (id) => {
        navigate(`/postdetails/${id}`);
    };
    return (
        <div className="home_blog_area section_top_gap position-relation">
            <div className="container">
                <div className="service-text">
                    <h4 className="text-center section_bottom_gap">
                        <span className="text_tb_line">Recent Blog</span>
                    </h4>
                </div>
                <OwlCarousel
                    className="owl-theme"
                    dots={false}
                    margin={15}
                    responsive={state.responsive}
                    smartSpeed={1000}
                    nav
                >
                    {Recentblog.map((e) => (
                        <div className="item" key={e._id}>
                            <div className="blog-box">
                                <div
                                    className="blog-img"
                                    style={{
                                        backgroundImage: `url(${e.blog_img})`,
                                    }}
                                ></div>
                                <div className="blog-details">
                                    <span className="blog-date mr_5">
                                        {e.blog_date}
                                    </span>
                                    <div className="d-flex a">
                                        <span className="blog-date mr_10">
                                            Category :
                                        </span>
                                        <div className="tag">
                                            <a
                                                href="#"
                                                className="custom_btn tag_bottom"
                                                onClick={() =>
                                                    BlogDetals(e._id)
                                                }
                                            >
                                                <span className="left_border"></span>
                                                {e.blog_categories}
                                                <span className="right_border"></span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="blog-title">
                                        <h3 className="mt_10 mb_10">
                                            <a
                                                href="#"
                                                onClick={() =>
                                                    BlogDetals(e._id)
                                                }
                                            >
                                                {e.blog_title.substring(0, 60)}
                                                ...
                                            </a>
                                        </h3>
                                        <p>
                                            {e.blog_conclusion.substring(
                                                0,
                                                120
                                            )}
                                            ...
                                        </p>
                                        <div className="arrow mt_5 text-end">
                                            <a
                                                href="#"
                                                onClick={() =>
                                                    BlogDetals(e._id)
                                                }
                                            >
                                                <i className="fal fa-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default HomeBlog;
