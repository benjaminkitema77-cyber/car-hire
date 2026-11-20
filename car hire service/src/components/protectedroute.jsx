import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { authorisation } from "../context/authorisation";

function ProtectedRoute({ children }) {
  const { user } = useContext(authorisation);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;