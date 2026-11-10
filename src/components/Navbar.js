
import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LandscapeIcon from "@mui/icons-material/Landscape";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import { AuthContext } from "../context/AuthContext";

import "../styles/navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    setMenuOpen(false);
    navigate("/");
  }

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">

        <div className="logo-design">
          <LandscapeIcon className="logo-mountain" />
          <FlightTakeoffIcon className="logo-plane" />
        </div>

        <div className="logo-text">
          <h2>MOLIN</h2>
          <p>Memories Of Life In Nature</p>
        </div>

      </Link>

      <div className={menuOpen ? "navbar-links show-menu" : "navbar-links"}>

        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={() => setMenuOpen(false)}
        >
          <HomeIcon />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/destinations"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={() => setMenuOpen(false)}
        >
          <PlaceIcon />
          <span>Destinations</span>
        </NavLink>

        <NavLink
          to="/trip-finder"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={() => setMenuOpen(false)}
        >
          <SearchIcon />
          <span>Trip Finder</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={() => setMenuOpen(false)}
        >
          <InfoOutlinedIcon />
          <span>About</span>
        </NavLink>

      </div>

      <div className="navbar-actions">

        {currentUser ? (

          <>
            <Link to="/profile" className="profile-button">
              <PersonIcon />
            </Link>

            <button
              className="signup-button"
              onClick={handleLogout}
            >
              <LogoutIcon />
              <span>Logout</span>
            </button>
          </>

        ) : (

          <>
            <Link to="/signup" className="signup-button">
              <PersonAddAlt1Icon />
              <span>Sign Up</span>
            </Link>

            <div className="navbar-divider"></div>

            <Link to="/profile" className="profile-button">
              <PersonIcon />
            </Link>
          </>

        )}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;

