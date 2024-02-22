import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout"
import Home from "../Pages/Home/Home"
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddProducts from "../Pages/AddProducts/AddProducts"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import Shop from "../Pages/Shop/Shop";
import Detiles from "../Pages/Detiles/Detiles";

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
            },
            {
                path:"Shop",
                element:<Shop></Shop>
            },
            {
                path:"/Detils",
                element:<Detiles></Detiles>
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