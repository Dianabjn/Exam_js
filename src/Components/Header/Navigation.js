import React from 'react';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={classes.nav}>
        <ul>
            <li>
                <a href="/">Users</a>
            </li>
            <li>
                <a href="/">Items</a>
            </li>
            <li>
                <a href="/">Extra</a>
            </li>
        </ul>
    </nav>
  );
};

export default Navigation;
