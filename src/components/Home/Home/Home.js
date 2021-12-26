import React from "react";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import Counter from "../Counter/Counter";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeBlog from "../HomeBlog/HomeBlog";
import HomeContact from "../HomeContact/HomeContact";
import OurService from "../OurService/OurService";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <HomeAbout></HomeAbout>
            <OurService></OurService>
            <Counter></Counter>
            <HomeBlog></HomeBlog>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
