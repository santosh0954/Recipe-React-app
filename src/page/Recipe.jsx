import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import UserContext from "../context/userContext";
import Loading from "../components/Loading";
import config from "../config.json";

function Recipe() {
  const { user } = useContext(UserContext);
  // console.log(user);

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState([]);

  useEffect(() => {
    fetchRecipe(config.apiUrl + "/recipe");
  }, []);

  const fetchRecipe = async (url) => {
    setLoading(true);
    const recipesItem = await fetch(url);
    const res = await recipesItem.json();

    setRecipes(res.data.recipes);
    setLoading(false);
    // console.log(res);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container text-center py-5">
      <h2 className="mb-5 text-start border-bottom pb-4 text-dark">
        Popular Recipe
      </h2>
      <div className="row">
        {recipes.map((item) => (
          <section className="col-md-6 col-lg-4 mb-4" key={item.id}>
            <Card {...item} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
