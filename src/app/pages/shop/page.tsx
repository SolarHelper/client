'use client';
import React, { useState, useEffect } from 'react';
import classes from './page.module.scss';
import SearchInput from '@/app/components/ShopPage/Products/SearchInput/SearchInput';
import Card from '@/app/components/ShopPage/Products/Card/Card';
import Button from '@/app/components/ShopPage/Products/Card/BuyButton/Button';
import Categories from '@/app/components/ShopPage/Categories/Categories';

const Shop = () => {
  const [visible, setVisible] = useState(false);
  const buttonHandler = () =>{
    setVisible(!visible);
  }
  return (
    <div className={classes.wrapper}>
      {/* Верхняя шапка изображение солнечной панели*/}
      <div className={classes.headerImage}>
        <h1 className={classes.title}>Наши продукты</h1>
      </div>

      <div className={classes.mainWrapper}>
        <Categories visible={visible} buttonHandler={buttonHandler}/>
        {/* Карточки товара */}
        <div className={classes.products}>
          {/* Поиск по товару */}
          <SearchInput />
          
          <div className={classes.buttonBlock}>
            <div className={classes.button} onClick={buttonHandler}>
              <Button width={25} height={26} image="/svg/filter.svg">
                Фильтрация
              </Button>
              
            </div>
            <Button width={25} height={26} image="/svg/filter.svg">
              Сортировка
            </Button>
          </div>
          
          {/* Блок карточек товара */}
          <div className={classes.cards}>
            {/* Карточка товара */}
            
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
