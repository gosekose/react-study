import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom"

const ProtectedRoute = (
    { element: Component }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (!isLoggedIn) {
        return <Route to="/" />;
    }

    return <Component />;
};

export default ProtectedRoute;