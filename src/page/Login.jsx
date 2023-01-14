import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/authService";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "userId") {
      setUserId(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jwt = await login(userId, password);
      console.log(jwt);
      if (!jwt.data.error) {
        localStorage.setItem("token", jwt.data);
        setUserId("");
        setPassword("");
        window.location = "/";

      }
      setError({ message: jwt.data.error });
    } catch (ex) {
      if (ex.response && ex.response.status === 403) {
        setError(ex.response.data.error[0]);
        // console.log(error);
      }
    }
  };
 

  return (
    <main
      className="container bg-white mt-5 shadow-sm border border-light px-3 rounded py-5"
      style={{ maxWidth: "400px" }}
    >
      {error.message && (
        <div className="alert alert-danger mb-3 py-2 shadow-sm text-capitalize">
          <strong>Error!</strong> &nbsp; {error.message}
        </div>
      )}
      <h3 className="text-center">Login</h3>
      <form method="Post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control border-warning"
            id="userId"
            onChange={handleChange}
            name="userId"
            value={userId}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control border-warning"
            id="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-warning px-4 shadow-sm rounded-pill mb-3"
        >
          Login
        </button>
        <br />
        <Link to="/register" className="btn btn-link">
          Go to Register page.
        </Link>
      </form>
    </main>
  );
}

export default Login;
