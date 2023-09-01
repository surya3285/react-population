import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import BillProduct from "./BillProduct";
import Logout from "./Logout";
import SelectProduct from "./SelectProduct";
import { Homepage } from "./Homepage";

function Home() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav
            className="navbar bg-dark border-bottom border-body "
            data-bs-theme="dark"
          >
            <div class="container-fluid">
              <h1 className="navbar-brand"> Menu </h1>
              <Link
                to="/home"
                className="navbar-nav me-3 mb-2 mb-lg-0 nav-link "
              >
                Home
              </Link>

              <Link
                to="/purchase"
                className="navbar-nav me-3 mb-2 mb-lg-0 nav-link "
              >
                Purchase
              </Link>
              <Link
                to="/payment"
                className="navbar-nav me-3 mb-2 mb-lg-0 nav-link"
              >
                Payment
              </Link>
              <Link
                to="/logout"
                className="navbar-nav me-auto mb-2 mb-lg-0 nav-link"
              >
                Logout
              </Link>
            </div>
          </nav>

          <Routes>
            <Route exact path="/home" element={<Homepage />}></Route>
            <Route exact path="/purchase" element={<SelectProduct />}></Route>
            <Route exact path="/payment" element={<BillProduct />}></Route>
            <Route exact path="/logout" element={<Logout />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Home;
