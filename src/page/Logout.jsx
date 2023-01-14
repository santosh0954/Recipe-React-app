import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigation = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    // window.location = '/logout';
    navigation("/login");
  }, []);

  return null;
}

export default Logout;
