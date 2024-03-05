import { FC } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/characters">Characters</Link>
        <Link to="/comics">Comics</Link>
      </nav>
    </header>
  );
};

export default Header;
