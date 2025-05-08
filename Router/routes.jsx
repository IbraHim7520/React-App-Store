import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import AppDetails from "../Pages/AppDetails"
import AllApps from "../Pages/AllApp"
import ErrorPage from "../Pages/ErrorPage"
import Faq from "../Pages/Faq"

const Router = createBrowserRouter([
    {
       path:'/',
       Component:Root,
       children:[
        {index:true,
        loader: ()=> fetch('apps.json'),
        Component:Home
        },
        {path:'/app-apps', Component:AllApps},
        {path:'/app-details/:id',    
        Component:AppDetails},
        {path:'/*', Component:ErrorPage},
        {path:"/all-apps",Component:AllApps},
        {path:"/faq", Component:Faq}
       ]
    },
    {
        path:'/user-login',
        Component:Login
    },
    {
        path:'/user-signup',
        Component:Signup
    },
    {
        path:"/*",
        Component:ErrorPage
    }
])
export default Router;