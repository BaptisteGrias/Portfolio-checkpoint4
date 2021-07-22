import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from '../../styles/HomepageStyle/StyledNavbar';

const NavBar = () => {
  return (
    <StyledHeader>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default NavBar;
