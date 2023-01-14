import { Navigate, Outlet } from "react-router-dom";

function ProtectedForm() {
  const token = localStorage.getItem("token");
  // console.log(!token)

  if (token) {
    return <Navigate replace to="/" />;
  }
  return <Outlet />;
}

export default ProtectedForm;
