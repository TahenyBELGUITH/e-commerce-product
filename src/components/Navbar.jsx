import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCartCheck } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import '../styles/navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <h3>
        <span>Techie</span>
        Taheny
      </h3>
      <ul className="list">
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <BsCartCheck />
        <BiUserCircle />
      </ul>
    </div>
  );
}

export default Navbar;
