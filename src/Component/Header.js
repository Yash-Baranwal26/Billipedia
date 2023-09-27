import React from "react";
import { Outlet,Link} from "react-router-dom";

export default function Header(props) {
  const showMenu = () => {
    document.getElementsByClassName("inv")[0].classList.toggle("show");
  };

  return (
   
    <div>
      <div
        className="container-fluid bg-black text-white pb-3 pt-2 header b-red"
      >
        <div className="row">
          <div className="col-md-3 display-5">
            <span className="text-danger">Billi</span>pedia
          </div>
          <div className="col-md-9">
            <div className="drps pt-3" onClick={showMenu}>
              ☰
            </div>
            <div className="nav justify-content-end topnav pt-2 text-uppercase">
              <nav className="nav inv">
                <li>
                  <Link to="/" className="nav-link">
                    India
                  </Link>
                </li>
                <li>
                  <Link to="/america" className="nav-link">
                    America
                  </Link>
                </li>
                <li>
                  <Link to="/unitedKingdom" className="nav-link">
                    United Kingdom
                  </Link>
                </li>
                <li>
                  <Link to="/china" className="nav-link">
                    China
                  </Link>
                </li>
              </nav>
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
