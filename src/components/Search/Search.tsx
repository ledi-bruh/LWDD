import { FC } from 'react';
import classes from './Search.module.css';

interface ISearchProps {
  placeholder: string;
  buttonText: string;
}

const Search: FC<ISearchProps> = ({ placeholder, buttonText }) => {
  return (
    <div className={classes.searchContainer}>
      <input placeholder={placeholder}></input>
      <button>{buttonText}</button>
    </div>
  );
};

export default Search;
