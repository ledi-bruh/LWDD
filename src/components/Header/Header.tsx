import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import strings from '../../resources';
import classes from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img
          src={strings.marvelLogo}
          alt="MarvelLogo"
          className={classes.marvelLogo}
        />
      </Link>
      <nav className={classes.navContainer}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : '')}
          to="/characters"
        >
          Characters
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : '')}
          to="/comics"
        >
          Comics
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
