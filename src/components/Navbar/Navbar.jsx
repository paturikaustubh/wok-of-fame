import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const [navTransition, setNavTransition] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 50) {
      setNavTransition(true);
    } else setNavTransition(false);

    if (window.scrollY > 350) {
      setShowButton(true);
    } else setShowButton(false);
  };

  return (
    <div className="nav-holder" id="nav-holder">
      <nav className={`navbar headding ${navTransition ? "scroll" : ""}`}>
        <div className="container">
          <Link
            to="/wok-of-fame/"
            className={`navbar-brand ${
              navTransition ? "text-white" : "text-danger"
            } font-weight-bold`}
            style={{ fontSize: "2rem", color: "black" }}
          >
            Wok Of Fame
          </Link>
          <button
            className={`bg-transparent barbutt d-md-none d-flex ${
              navTransition ? "text-white" : "text-danger"
            }`}
            style={{
              border: "none",
              scale: "180%",
              outline: "none",
            }}
            onClick={() => setShowSidebar(true)}
          >
            <i className="fa fa-bars outline-none" aria-hidden="true" />
          </button>
          <div className="d-sm-none d-none d-md-flex">
            <Link
              to="/wok-of-fame/menu"
              className={`nav-item nav-link btn btn-link ${
                navTransition ? "text-white" : "text-danger"
              } btn-lg ml-auto`}
            >
              Menu
            </Link>
            <Link
              to="/wok-of-fame/reserve"
              className={`nav-item nav-link btn btn-link ${
                navTransition ? "text-white" : "text-danger"
              } btn-lg`}
            >
              Reserve a Table
            </Link>
            <Link
              to="/wok-of-fame/plate"
              className={`nav-item nav-link btn btn-link ${
                navTransition ? "text-white" : "text-danger"
              } btn-lg`}
            >
              Plate
            </Link>
          </div>
        </div>
      </nav>

      <button
        className={`go-up ${showButton ? "scale" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆️
      </button>
      <div className="d-md-none d-flex">
        <Sidebar open={showSidebar} setOpen={setShowSidebar} />
      </div>
    </div>
  );
}

export default Navbar;
