import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Routes, Route, Link } from "react-router-dom";
import Recipe from "./components/Recipe";
import Login from "./page/Login";
import Register from "./page/Register";
import RecipeDetails from "./page/RecipeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Recipe />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
