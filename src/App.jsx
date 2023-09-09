import { lazy, Suspense } from "react";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Consumer, Data } from "./resources/Context/Context";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import "./Styles/Style.css";

const Home = lazy(() => import("./Pages/Home/Home"));
const Menu = lazy(() => import("./Pages/Menu/Menu"));
const Plate = lazy(() => import("./Pages/Plate/Plate"));
const Details = lazy(() => import("./Pages/Details/Details"));
const ReserveTable = lazy(() => import("./Pages/ReserveTable/ReserveTable/"));

export default function App() {
  return (
    <Data>
      <Consumer>
        {({ loading }) => {
          return (
            <Router>
              <Navbar />
              <Routes>
                <Route path="/wok-of-fame/" element={<LazyManager />}>
                  <Route exact path="/wok-of-fame/" element={<Home />} />
                  <Route exact path="/wok-of-fame/menu" element={<Menu />} />
                  <Route path="/wok-of-fame/plate" element={<Plate />} />
                  <Route
                    exact
                    path="/wok-of-fame/details"
                    element={<Details />}
                  />
                  <Route
                    exact
                    path="/wok-of-fame/reserve"
                    element={<ReserveTable />}
                  />
                </Route>
                <Route
                  path="*"
                  element={
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "1rem",
                        padding: "2rem",
                      }}
                    >
                      <span
                        className="text-danger"
                        style={{
                          fontSize: "3rem",
                          fontWeight: 500,
                        }}
                      >
                        Looks like you've lost 👀
                      </span>
                      <Link
                        onClick={() => window.scrollTo({ top: 0 })}
                        to="/wok-of-fame/"
                        className="btn btn-lg btn-outline-danger"
                      >
                        Take me home
                      </Link>
                    </div>
                  }
                />
              </Routes>
              <Footer />
            </Router>
          );
        }}
      </Consumer>
    </Data>
  );
}

function LazyManager() {
  return (
    <Suspense fallback={<div className="fallBack">⌛</div>}>
      <Outlet />
    </Suspense>
  );
}
