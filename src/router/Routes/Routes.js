import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import DetailsService from "../../pages/Service/DetailsService";
import Home from "../../pages/Home/Home/Home";
import AllServices from "../../pages/Home/Services/AllServices";
import SignUp from "../../pages/Login/SignUp/SignUp";
import Login from "../../pages/Login/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
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
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <DetailsService></DetailsService>,
                loader: ({params}) => fetch(`https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/services/${params.id}`)
            }
        ]
    }
])