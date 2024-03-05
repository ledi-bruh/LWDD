import { FC } from 'react';
import { Link } from 'react-router-dom';
import strings from '../../resources';
import classes from './Footer.module.css';

const Footer: FC = () => {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className={classes.footer}>
      <div className={classes.column}>
        <Link to="/">
          <img
            src={strings.marvelLogo}
            alt="MarvelLogo"
            className={classes.marvelLogo}
          />
        </Link>
        <p>Data provided by Marvel. © {getYear()} MARVEL</p>
        <p>developer.marvel.com</p>
      </div>
    </footer>
  );
};

export default Footer;
