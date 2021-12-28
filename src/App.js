import React from "react";
import Home from "./components/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicePage from "./components/ServicePage/ServicePage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import ContactPage from "./components/ContactPage/ContactPage";
import LoginPage from "./components/User/LoginPage/LoginPage";
import Header from "./components/Share/Header/Header";
import Footer from "./components/Share/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import RegisterPage from "./components/User/RegisterPage/RegisterPage";
import ForgetPage from "./components/User/ForgetPage/ForgetPage";
import BlogPage from "./components/BlogPage/BlogPage";
const App = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="aboutpage" element={<AboutPage />}></Route>
                <Route path="servicepage" element={<ServicePage />}></Route>
                <Route path="projectpage" element={<ProjectPage />}></Route>
                <Route path="blogpage" element={<BlogPage />}></Route>
                <Route path="contactpage" element={<ContactPage />}></Route>
                <Route path="loginpage" element={<LoginPage />}></Route>
                <Route path="registerpage" element={<RegisterPage />}></Route>
                <Route path="forgetpage" element={<ForgetPage />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default App;
