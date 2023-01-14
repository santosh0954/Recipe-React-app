import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import config from "../config.json";

function RecipeDetails() {
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState([]);
  const params = useParams();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const datas = await axios.get(config.apiUrl + "/recipe/" + params.id);
        setData(datas.data);
        setLoading(false);
        //  console.log(data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading || data.data === undefined) {
    return <Loading />;
  }

  const { recipe, ingredients, processes } = data.data;

  return (
    <>
      <main className="container p-4 my-4 bg-white shadow-sm rounded ">
        <div className="text-end">
          <Link to="/" className="btn btn-light shadow-sm  border-light mb-4">
            Go Back
          </Link>
        </div>
        <div className="row mb-4">
          <div className="col-sm-4 col-md-3 mb-4">
            <img
              src={`../${recipe.imageUrl}`}
              className="img-fluid img-thumbnail shadow"
              alt={recipe.name}
            />
          </div>
          <div className="col-sm-8 col-md-9">
            <h2>{recipe.name}</h2>
            <p className="text-muted">Author: {data.user[0].name}</p>
            <span className="badge text-bg-warning rounded-pill shadow-sm">
              Posted on: {new Date(recipe.createdAt).toDateString()}
            </span>
          </div>
        </div>
        <section className="mb-3">
          <h3>Ingredients</h3>
          <hr />
          <table className="table text-warning" style={{ maxWidth: "400px" }}>
            <tbody>
              {ingredients.map((ingre) => (
                <tr className="text-primary" key={ingre.id}>
                  <td className="h6">{ingre.item}</td>
                  <td className="text-danger">
                    {ingre.amount} {ingre.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section>
          <h3>Process</h3>
          <hr />
          <ol className="list-group list-group-numbered list-group-flush">
            {processes.map((step) => (
              <li className="list-group-item lead" key={step.id}>
                {step.step}
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}

export default RecipeDetails;
