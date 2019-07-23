import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const activeStyle = {
  color: 'mediumvioletred',
};

const Nav = () => (
  <ul className={styles.nav}>
    <li>
      <NavLink
        to="/"
        exact
        activeStyle={activeStyle}
        className={styles.navlink}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/pets" activeStyle={activeStyle} className={styles.navlink}>
        Pets
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={activeStyle} className={styles.navlink}>
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
