import React, { useState } from "react";
import Home from "./components/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
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
import PostDetails from "./components/BlogPage/PostDetails/PostDetails";
import ProjectDetails from "./components/ProjectPage/ProjectDetails/ProjectDetails";
import Dashboard from "./components/Admin/Dashboard";
import Profile from "./components/User/Profile/Profile";
import AddService from "./components/Admin/AddService/AddService";
import Alluser from "./components/Admin/Alluser/Alluser";
import AllService from "./components/Admin/AllService/AllService";
import AllQuestion from "./components/Admin/AllQuestion/AllQuestion";
import AddQuestion from "./components/Admin/AddQusetion/AddQuestion";
import AllProject from "./components/Admin/AllProject/AllProject";
import AddProject from "./components/Admin/AddProject/AddProject";
import AllBlog from "./components/Admin/AllBlog/AllBlog";
import AddBlog from "./components/Admin/AddBlog/AddBlog";
import useFirebase from "./hooks/useFirebase";
import AllBlogCategories from "./components/Admin/AllBlogCategories/AllBlogCategories";
import AllProjectCategories from "./components/Admin/AllProjectCategories/AllProjectCategories";
const App = () => {
    const { userrole } = useFirebase();

    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="servicepage" element={<ServicePage />}></Route>
                <Route path="projectpage" element={<ProjectPage />}></Route>
                <Route
                    path="projectpage/projectdetails/:id"
                    element={<ProjectDetails />}
                ></Route>
                <Route path="blogpage" element={<BlogPage />}></Route>
                <Route
                    path="blogpage/postdetails/:id"
                    element={<PostDetails />}
                ></Route>
                <Route path="postdetails/:id" element={<PostDetails />}></Route>
                <Route path="contactpage" element={<ContactPage />}></Route>
                <Route path="loginpage" element={<LoginPage />}></Route>
                <Route path="registerpage" element={<RegisterPage />}></Route>
                <Route path="forgetpage" element={<ForgetPage />}></Route>
                {/* Deshbord  */}
                {userrole === "admin" ? (
                    <Route path="admin" element={<Dashboard />}>
                        {/* service  */}
                        <Route
                            path="allservice"
                            element={<AllService />}
                        ></Route>
                        <Route
                            path="addservice"
                            element={<AddService />}
                        ></Route>
                        <Route
                            path="allquestion"
                            element={<AllQuestion />}
                        ></Route>
                        <Route
                            path="addquestion"
                            element={<AddQuestion />}
                        ></Route>
                        {/* service  */}
                        <Route
                            path="allproject"
                            element={<AllProject />}
                        ></Route>
                        <Route
                            path="addproject"
                            element={<AddProject />}
                        ></Route>
                        <Route
                            path="allprojectcategories"
                            element={<AllProjectCategories />}
                        ></Route>
                        {/* blog  */}
                        <Route path="allblog" element={<AllBlog />}></Route>
                        <Route path="addblog" element={<AddBlog />}></Route>
                        <Route
                            path="allblogcategories"
                            element={<AllBlogCategories />}
                        ></Route>

                        {/* user  */}
                        <Route path="alluser" element={<Alluser />}></Route>
                    </Route>
                ) : (
                    <Route path="*" element={<ErrorPage />}></Route>
                )}

                <Route path="profile" element={<Profile />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default App;
