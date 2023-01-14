import { Link } from 'react-router-dom';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-dark-subtle shadow-sm">
      <div className="container-fluid container-md">
        <Link className="navbar-brand text-warning" to="/">
          <strong>Foodie </strong> 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* {console.log(props.user)} */}
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {!props.user.id ? (
            <Link className="btn btn-outline-warning  px-4  shadow-sm rounded-pill" aria-current="page" to="/login">
              Login
            </Link>
            ):
            (<Link className="btn btn-outline-warning  px-4  shadow-sm rounded-pill" aria-current="page" to="/logout">
              Logout
            </Link>)
          }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
