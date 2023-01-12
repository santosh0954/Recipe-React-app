import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Card from "./Card";

function Recipe() {
  const recipeList = [
    {
      id: 1,
      title: "Recipe One",
      author: "Santosh Jha",
      imageUrl: "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop"
    },
    {
      id: 2,
      title: "Recipe Two",
      author: "Santosh Jha",
      imageUrl: "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop"
    },
    {
      id: 3,
      title: "Recipe Three",
      author: "Santosh Jha",
      imageUrl: "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop"
    },
    {
      id: 4,
      title: "Recipe Four",
      author: "Santosh Jha",
      imageUrl: "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop"
    },
  ];
  return (
    <>
      <Navigation />
      <div className="container text-center py-5">
        <h2 className="mb-5 text-start border-bottom pb-4 text-dark">
          Popular Recipe
        </h2>
        <div className="row">
          {recipeList.map((item) => (
            <section className="col-md-6 col-lg-4 mb-4" key={item.id} >
              <Card{...item} />
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Recipe;
