import { Link } from "react-router-dom";
import "./style.scss";
import AppIcon from "../../assets/Images/apple-touch-icon.png";

const Index = () => {
  return (
    <nav className="navbar navbar-expand-lg btnColorr px-3 py-4">
      <img src={AppIcon} className="sizing" alt="app-icon" />

      <button
        className="navbar-toggler togglerColor"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to={"#"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to={"/top-stories"}>
              Top Stories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to={"/read-later"}>
              Read Later
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to={"/current-news"}>
              Current News
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to={"/old-news"}>
              Old News
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link text-white dropdown-toggle"
              to={"#"}
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to={"/health"}>
                  Health
                </Link>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <Link className="dropdown-item" to={"/entertainment"}>
                  Entertainment
                </Link>
              </li>
              <hr className="dropdown-divider" />

              <li>
                <Link className="dropdown-item" to={"/business"}>
                  Business
                </Link>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <Link className="dropdown-item" to={"/technology"}>
                  Technology
                </Link>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <Link className="dropdown-item" to={"/general"}>
                  General
                </Link>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <Link className="dropdown-item" to={"/science"}>
                  Science
                </Link>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <Link className="dropdown-item" to={"/sports"}>
                  Sports
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* <form #myForm="ngForm" (ngSubmit)="newsSearch()">
      <div className="d-flex justify-content-between input-field">
        <div className="col-9 d-flex align-items-center py-2">
          <span className="mx-3">
            <i className="fa-solid fa-magnifying-glass mute-color"></i>
          </span>
          <input
            className="w-75 input-area"
            type="text"
            placeholder="Search for a topic..."
            name="task"
            [(ngModel)]="form.searchInput"
            #task="ngModel"
          />
        </div>
      </div>
    </form> */}
        <form>
          <div className="d-flex justify-content-between input-field">
            <div className="col-9 d-flex align-items-center py-2">
              <span className="mx-3">
                <i className="fa-solid fa-magnifying-glass mute-color"></i>
              </span>
              <input
                className="w-75 input-area"
                type="text"
                placeholder="Search for a topic..."
                name="task"
              />
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Index;
