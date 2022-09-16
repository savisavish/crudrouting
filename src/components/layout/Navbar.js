import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Dropdown from '../pages/Dropdown';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
   // alert("hi")
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/covid">Covid Tracker</NavLink>
            </li>
            <li className="nav-item dropdown" onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
              <a className="nav-link dropdown-toggle" onClick={closeMobileMenu} href="#">Hooks</a>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">SignUp</NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="btn btn-outline-light" to="/users/add">Add User</NavLink>
      </nav>
    </div>
  )
}
export default Navbar;
