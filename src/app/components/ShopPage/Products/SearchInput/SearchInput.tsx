import React from 'react';
import classes from './SearchInput.module.scss';
import Image from 'next/image';
const SearchInput = () => {
  return (
    // Инпут поиска по товарам
    <div className={classes.searchWrapper}>
      <input className={classes.searchInput}  type="text" placeholder='Поиск' />
      <Image className={classes.searchImage} src='/svg/search.svg' alt='' width={20} height={20}/>
    </div>
  );
};

export default SearchInput;