import "./../App.css";
import { Link } from "react-scroll";
export default function Nav({ ubicacion }) {
  return (
    <nav
      className="navbar navbar-expand-lg text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            className="nav-app-name"
            src="https://i.ibb.co/XkShTtw/morsa.png"
            alt="logo"
          />
        </a>
        {ubicacion === "home" ? (
          <>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    smooth={true}
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="portfolio"
                  >
                    Portafolio
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    smooth={true}
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="about"
                  >
                    Sobre mí
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    smooth={true}
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    to="contact"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <button
              className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">
                    <i className="fa-solid fa-arrow-left"></i> Back
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
