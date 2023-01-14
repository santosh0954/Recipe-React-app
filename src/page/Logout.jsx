import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigation = useNavigate();
  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
    // window.location = '/logout';
    navigation("/login");
  }, []);

  return null;
}

export default Logout;
