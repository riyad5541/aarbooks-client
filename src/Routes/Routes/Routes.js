import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import SingleCategory from "../../Pages/SingleCategory/SingleCategory";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/category/:id',
                element:<SingleCategory></SingleCategory>,
                loader:({ params }) =>
                fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
])

export default router;