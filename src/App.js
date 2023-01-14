import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Recipe from "./page/Recipe";
import Login from "./page/Login";
import Register from "./page/Register";
import RecipeDetails from "./page/RecipeDetails";
import Logout from "./page/Logout";
import UserContext from "./context/userContext";
import Layout from "./page/Layout";
import Protected from "./page/Protected";
import ProtectedForm from "./page/ProtectedForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { user, setUser } = useContext(UserContext);
  // console.log(data)
  useEffect(() => {
    try {
      if (localStorage.getItem("token")) {
        const user = jwt_decode(localStorage.getItem("token"));
        // console.log(user)
        setUser(user);
      }
    } catch (error) {
      // console.log(error);
    }
  }, []);
  return (
    <Routes>
      <Route element={<Protected />}>
        <Route path="/" element={<Layout user={user} />}>
          <Route path="/" element={<Recipe />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
      </Route>
      <Route element={<ProtectedForm />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
