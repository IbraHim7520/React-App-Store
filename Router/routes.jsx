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
            {
            index:true,
             loader: ()=>fetch("apps.json"),
             Component:Home
            },
            {path:'/*', element:<p>There is no page</p>}
        ]
    },
    {
        path:'/user-login',
        Component:Login
    },
    {
        path: "/user-signup",
        Component:Signup
    },
    {
        path:'/*',
        element: <p>This is a error page</p>
    }
])
export default Router;