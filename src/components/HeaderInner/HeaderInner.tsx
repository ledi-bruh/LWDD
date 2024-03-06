import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import strings from '../../resources';
import classes from './HeaderInner.module.css';

const HeaderInner: FC = () => {
  return (
    <div className={classes.headerInner}>
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
    </div>
  );
};

export default HeaderInner;
