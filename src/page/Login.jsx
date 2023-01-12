import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <main className='container bg-white mt-5 shadow-sm border border-light px-3 rounded py-5' style={{maxWidth: '400px'}}>
    <h3 className='text-center'>Login</h3>
    <form>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User Id</label>
        <input type="text" className="form-control border-warning" id="userId"/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control border-warning" id="password"/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe"/>
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit" className="btn btn-warning px-4 shadow-sm rounded-pill mb-3">Login</button>
      <br />
      <Link to="/register" className='btn btn-link'>Go to Register page.</Link>
    </form>
    </main>
  )
}

export default Login