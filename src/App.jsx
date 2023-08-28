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

const Test = lazy(() => import("./Pages/Test"));

export default function App() {
  return (
    <Data>
      <Consumer>
        {({ loading }) => {
          return (
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<LazyManager />}>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/menu" element={<Menu />} />
                  <Route path="/plate" element={<Plate />} />
                  <Route exact path="/test" element={<Test />} />
                  <Route exact path="/details" element={<Details />} />
                  <Route exact path="/reserve" element={<ReserveTable />} />
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
                      <Link to="/" className="btn btn-lg btn-outline-danger">
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
