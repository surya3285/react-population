import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Purchase from "./Purchase";

function RouterDemo() {
  return (
    <div>
      <div className="container">
        <Router>
          <nav className="container col d-flex navbar navbar-expand-lg navbar-light bg-dark">
            <Link
              className="nav-link badge bg-primary px-3 py-2 m-4"
              to="/purchase"
            >
              Purchase
            </Link>

            <Link
              className="nav-link badge bg-primary px-3 py-2 m-4"
              to="/about"
            >
              About
            </Link>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/purchase" element={<Purchase />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </div>
      <main></main>
      <footer className="container col d-flex navbar navbar-expand-lg navbar-light bg-dark">
        <div className="text-white ">Footer</div>
      </footer>
    </div>
  );
}

export default RouterDemo;
