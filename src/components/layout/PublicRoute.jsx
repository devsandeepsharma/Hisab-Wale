import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import LoadingSkeleton from "./LoadingSkeleton";

const PublicRoute = ({ children }) => {
    const { authenticate, initialized } = useSelector((state) => state.auth);

    if (!initialized) {
        return <LoadingSkeleton /> 
    }

    return authenticate ? <Navigate to="/" replace /> : children;
}

export default PublicRoute;