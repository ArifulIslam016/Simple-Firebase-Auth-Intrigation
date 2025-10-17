import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Profile from "../Components/Profiles/Profile";


export const router=createBrowserRouter(
    [
        {
            path:'/',
            Component:Root,
            children:[
                {
                    index: true,
                    Component: Home
                },
                {
                    path:'/register',
                    Component:Register
                },
                {
                    path:'/login',
                    Component: Login
                },
                {
                    path:'/Profile',
                    Component:Profile
                }
            ]

        }
    ]
)
