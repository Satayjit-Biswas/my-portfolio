import React from "react";
import Home from "./components/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicePage from "./components/ServicePage/ServicePage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import ContactPage from "./components/ContactPage/ContactPage";
import LoginPage from "./components/User/LoginPage/LoginPage";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="aboutPage" element={<AboutPage />}></Route>
                <Route path="servicePage" element={<ServicePage />}></Route>
                <Route path="projectPage" element={<ProjectPage />}></Route>
                <Route path="contactPage" element={<ContactPage />}></Route>
                <Route path="loginPage" element={<LoginPage />}></Route>
            </Routes>
        </div>
    );
};

export default App;
