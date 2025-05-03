import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import LoadingSkeleton from "./LoadingSkeleton";

const ProtectedRoute = ({children}) => {

    const { authenticate, initialized } = useSelector((state) => state.auth);

    if (!initialized) {
        return <LoadingSkeleton />; 
    }

    return authenticate ? children : <Navigate to="/landing" replace />
}

export default ProtectedRoute;