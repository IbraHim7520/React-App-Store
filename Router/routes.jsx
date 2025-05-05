import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Login from "../Pages/Login"
import Signup from  "../Pages/Signup"
import { Component } from "react";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        Component:Root,
        children: [
            {index:'/home', Component:Home}
        ]
    },
    {
        path:'/user-login',
        Component:Login
    },
    {
        path: "/user-signup",
        Component:Signup
    }
])
export default Router;