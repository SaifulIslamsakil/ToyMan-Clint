import {  useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, lodder}= useContext(AuthContext)
    if(lodder){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;