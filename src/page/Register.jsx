import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Joi from "joi";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (e.target.name === "name") {
      setName(value);
    }
    if (e.target.name === "userId") {
      setUserId(value);
    }
    if (e.target.name === "password") {
      setPassword(value);
    }
    if (e.target.name === "password2") {
      if (e.target.value !== password) {
        setError({ password2: "Confirm password should match password." });
      } else {
        setError({ password2: null });
      }
      // console.log(password !== e.target.value);
      setPassword2(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = validateUser({ name, userId, password, password2 });
    if (!result.error) {
      const response = await axios.post("http://localhost:5000/api/users", {
        name,
        userId,
        password,
      });
      // console.log(response)
      if (response.data.error !== null) {
        setError((err) => ({ ...err, apiError: response.data.error }));
        setTimeout(() => setError({ apiError: null }), 2000);
      } else {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      }
      if (response.status === 200) {
        setName("");
        setUserId("");
        setPassword("");
        setPassword2("");
        setTimeout(() => navigate("/login"), 3000);
      }
      return;
    }
    const error = {};
    for (let item of result.error.details) {
      error[item.path[0]] = item.message;
    }
    setError(error);

    // Now register user
  };
  const validateUser = (user) => {
    const schema = Joi.object({
      name: Joi.string().trim().min(3).required(),
      userId: Joi.string().trim().min(3).required(),
      password: Joi.string().trim().required(),
      password2: Joi.ref("password"),
    });
    return schema.validate(user, { abortEarly: false });
  };

  return (
    <main
      className="container bg-white mt-4 shadow-sm border border-light px-3 rounded py-5"
      style={{ maxWidth: "400px" }}
    >
      {success ? (
        <div className="alert alert-success mb-4 shadow-sm py-2">
          User Register Successfully
        </div>
      ) : (
        ""
      )}
      {error.apiError ? (
        <div className="alert alert-danger mb-4 shadow-sm py-2">
          {error.apiError}
        </div>
      ) : (
        ""
      )}
      <h3 className="text-center">Register here</h3>
      <form method="Post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control border-warning"
            name="name"
            id="name"
            value={name}
            onChange={handleOnChange}
          />
          {error.name && (
            <div className="d-block invalid-feedback">{error.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control border-warning"
            name="userId"
            id="userId"
            value={userId}
            onChange={handleOnChange}
          />
          {error.userId && (
            <div className="d-block invalid-feedback">{error.userId}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control border-warning"
            name="password"
            id="password"
            value={password}
            onChange={handleOnChange}
          />
          {error.password && (
            <div className="d-block invalid-feedback">{error.password}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control border-warning"
            name="password2"
            id="password2"
            value={password2}
            onChange={handleOnChange}
          />
          {error.password2 && (
            <div className="d-block invalid-feedback">{error.password2}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-warning px-4 rounded-pill shadow-sm btn-block mb-3"
        >
          Submit
        </button>
        <br />
        <Link to="/login" className="btn btn-link">
          Go to Login page.
        </Link>
      </form>
    </main>
  );
}

export default Register;
