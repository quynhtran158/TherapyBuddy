import React from "react";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.css';


class Navbar extends React.Component {
  render() {
    return (
        <header>
          <nav className="navbar navbar-expand-md fixed-top navbar-wrapper" id="navbar-all"> 
            <a className="navbar-brand" href="#">
            TherapyBuddy
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Community
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Career
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Contact 
                  </a>
                </li>
              </ul>
              <div className="navbar-collapse">
                <div className="search-bar">
                  <input type="text" placeholder="Search"/>
                </div>
                <div>
                  <div className="log-in">
                    <img width="60" height="60" src="https://img.icons8.com/nolan/96/2AF598/009EFD/user-default.png" alt="user-default"/>
                  </div>
                </div>
              </div>
            </div>
          </nav>
     </header>
    );
  }
}

export default Navbar;
