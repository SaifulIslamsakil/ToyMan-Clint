import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout"
import Home from "../Pages/Home/Home"
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddProducts from "../Pages/AddProducts/AddProducts"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"AddProducts",
                element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            }
        ]
    },
    {
        path:"/Register",
        element:<Register></Register>
    },
    {
        path:"/login",
        element:<Login></Login>
    },

])

export default Routes