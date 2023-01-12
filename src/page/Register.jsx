import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className='container bg-white mt-4 shadow-sm border border-light px-3 rounded py-5' style={{maxWidth: '400px'}}>
    <h3 className='text-center'>Register here</h3>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control border-warning" id="name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User Id</label>
        <input type="text" className="form-control border-warning" id="userId"/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control border-warning" id="password"/>
      </div>
      <div className="mb-3">
        <label htmlFor="password2" className="form-label">Confirm Password</label>
        <input type="password" className="form-control border-warning" id="password2"/>
      </div>
      <button type="submit" className="btn btn-warning px-4 rounded-pill shadow-sm btn-block mb-3">Submit</button>
      <br />
      <Link to="/login" className='btn btn-link'>Go to Login page.</Link>
    </form>
    </main>
  )
}

export default Register;