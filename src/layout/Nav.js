import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <div className='Wrapper'>
      <div className='row'>
        <div className='nav-items'>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to='/'
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to='/allmovies'
              >
                ALL MOVIES
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to='/createmovie'
              >
                CREATE MOVIE
              </NavLink>
            </li>
          </ul>

          {/** THIS IS THE LOGIN, REG BUTTON AND LOGO */}

          <div className='button-component'>
            <h1 id='logo-text'>
              TOBS<span> - </span>MOVIES
            </h1>
            <div id='btnAll'>
              <Link to='./login'>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #fff",
                    marginRight: "7px",
                    cursor: "pointer",
                  }}
                >
                  LOGIN
                </button>
              </Link>

              <Link to='./register'>
                <button
                  style={{
                    backgroundColor: "#A90909",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  REGISTER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
