import React from 'react';
import classes from './SearchInput.module.scss';
const SearchInput = () => {
  return (
    // Компонент поиска товара в странице shop
    <input className={classes.searchInput} type="text" placeholder='Поиск' />
  );
};

export default SearchInput;