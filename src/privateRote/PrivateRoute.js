import { Navigate, Outlet } from "react-router-dom";
import DasBoardPage from "../pages/dasBoardPage";
import Home from "../pages/Home";

function PrivateRoute({ componet: componet, isAuthenticated, ...rest }) {
  return isAuthenticated ? <Home /> : <Navigate to="/loginPage" />;
}
export default PrivateRoute;
