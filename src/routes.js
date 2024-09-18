import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/Login";
import { useAuth } from "./utils/AuthContext";
import {Profile} from "./pages/Profile";

const Routes = () => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated)
    return createBrowserRouter([

        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/",
            element: <Login />
        },
        {
            element: <ProtectedRoute isAuthenticated={isAuthenticated}/>,
            children: [
                {
                    path: "/profile",
                    element: <Profile />
                },
            ]
        },
    ]);
}
export default Routes;
