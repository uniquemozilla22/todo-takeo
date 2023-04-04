import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedPage = ({ user, children }) => {
  if (!user.loggedIn) {
    return (
      <Navigate to="/login" state={{ alert: "You need To Login First" }} />
    );
  }
  return children;
};

export default ProtectedPage;
