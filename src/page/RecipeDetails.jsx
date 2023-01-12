import React from 'react'
import Navigation from './../components/Navigation';
import Footer from './../components/Footer';
import { Link } from 'react-router-dom';

function RecipeDetails() {
  return (
    <>
    <Navigation /> 
    <main className="container p-4 my-4 bg-white shadow-sm rounded ">
    <div className="row mb-4">
      <div className="col-sm-4 col-md-3 mb-3">
      <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop" className="img-fluid img-thumbnail shadow" alt="..."/>
      </div>
      <div className="col-sm-8 col-md-9">
        <h2>Recipe One</h2>
        <span className="badge bg-primary rounded-pill shadow-sm">Author: Santosh Jha</span>
      </div>
    </div>
        <section className='mb-3'>
          <h3>Ingredients</h3>
          <hr />
        <ol className='list-group list-group-numbered list-group-flush text-warning' style={{maxWidth: "500px"}}>
          <li className='list-group-item d-table text-primary'>
            <span className='h6 d-table-cell'>Milk</span>
            <span className='d-table-cell text-danger'>200 ML</span>
          </li>
          <li className='list-group-item d-table text-primary'>
            <span className='h6 d-table-cell'>Milk</span>
            <span className='d-table-cell text-danger'>200 ML</span>
          </li>
          <li className='list-group-item d-table text-primary'>
            <span className='h6 d-table-cell'>Milk</span>
            <span className='d-table-cell text-danger'>200 ML</span>
          </li>
          <li className='list-group-item d-table text-primary'>
            <span className='h6 d-table-cell'>Milk</span>
            <span className='d-table-cell text-danger'>200 ML</span>
          </li>
         
        </ol>
        </section>
        <section>
          <h3>Process</h3>
          <hr />
          <ol className='list-group list-group-numbered list-group-flush'>
        <li className="list-group-item lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos odit illum vero corporis? Veniam aspernatur voluptatibus, eaque doloribus, adipisci dolor suscipit qui at distinctio provident itaque sint autem enim.
        </li>
        <li className="list-group-item lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos odit illum vero corporis? Veniam aspernatur voluptatibus, eaque doloribus, adipisci dolor suscipit qui at distinctio provident itaque sint autem enim.
        </li>
        <li className="list-group-item lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos odit illum vero corporis? Veniam aspernatur voluptatibus, eaque doloribus, adipisci dolor suscipit qui at distinctio provident itaque sint autem enim.
        </li>

          </ol>
        </section>
        <br />
        <Link to="/" className='btn btn-light shadow-sm border-light'>Go Back</Link>

    </main>
    <Footer />
  </>
  )
}

export default RecipeDetails