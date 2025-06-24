import { Navigate } from "react-router-dom";
import useSession from "../hooks/useSession";

const ProtectedRoute = ({ children }) => {
  const { session, loading } = useSession();

  if (loading) return <p>Session Loading...</p>

  return session ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
