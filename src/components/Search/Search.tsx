import { FC, useEffect, useState } from 'react';
import classes from './Search.module.css';
import useDebounce from 'hooks/useDebounce';

interface ISearchProps {
  placeholder: string;
  buttonText: string;
  setSearchQuery: (value: string) => void;
}

const Search: FC<ISearchProps> = ({
  placeholder,
  buttonText,
  setSearchQuery
}) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 3000);

  const handleInput = () => {
    setSearchQuery(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    if (inputValue === '') return;
    handleInput();
  }, [debouncedInputValue]);

  return (
    <div className={classes.searchContainer}>
      <input
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => handleInput()}>{buttonText}</button>
    </div>
  );
};

export default Search;
