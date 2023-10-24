'use client';
import React from 'react';
import classes from './page.module.scss';
import FilterInput from '@/app/components/ShopPage/Categories/FilterInput/FilterInput';
import RangePrice from '@/app/components/ShopPage/Categories/RangePrice/RangePrice';
import SearchInput from '@/app/components/ShopPage/Products/SearchInput/SearchInput';
import Card from '@/app/components/ShopPage/Products/Card/Card';

const Shop = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.headerImage}>
        <h1 className={classes.title}>Наши продукты</h1>
      </div>
      <div className={classes.mainWrapper}>
        <div className={classes.categories}>
          <h1 className={classes.title}>
            Категории
          </h1>
          <FilterInput 
            title={'Наши продукты'} 
          />
          <RangePrice />
          <FilterInput 
            title={'Номинальная мощность, Вт'} 
          />
        </div>

        <div className={classes.products}>
          <SearchInput />
          <div className={classes.cards}>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
