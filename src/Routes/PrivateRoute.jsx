import { useContext } from "react";
import { AuthContext } from "../Component/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";


const PrivateRoute = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loding){
        return <TbFidgetSpinner className="animate-spin m-auto"/>
    }
    if (user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;