import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "./Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;