import { FC } from 'react';
import { Link } from 'react-router-dom';
import strings from '../../resources';
import classes from './FooterInner.module.css';

const FooterInner: FC = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={classes.footerInner}>
      <div className={classes.column}>
        <Link to="/">
          <img
            src={strings.marvelLogo}
            alt="MarvelLogo"
            className={classes.marvelLogo}
          />
        </Link>
        <p>Data provided by Marvel. &copy; {getYear()} MARVEL</p>
        <p>developer.marvel.com</p>
      </div>
    </div>
  );
};

export default FooterInner;
