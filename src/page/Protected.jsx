import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  // console.log(!token)

  if (!token) {
    return <Navigate replace to="/login" />;
  }
  return <Outlet />;
}

export default Protected;
