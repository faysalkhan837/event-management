import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Page/Home/Home";
import SignUp from "../Page/SignUp/SignUp";
import Login from "../Page/Login/Login";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Details from "../Page/Details/Details";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../Page/ContactUs/ContactUs";
import AboutUs from "../Page/AboustUs/AboutUs";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('/data.json'),
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/data.json')

            },
            {
                path: '/contactUs',
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path:'/aboutUs',
                element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            }
        ]
    }
])