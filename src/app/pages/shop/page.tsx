'use client';
import React, { useState} from 'react';
import classes from './page.module.scss';
import SearchInput from '@/app/components/ShopPage/Products/SearchInput/SearchInput';
import Card from '@/app/components/ShopPage/Products/Card/Card';
import Button from '@/app/components/ShopPage/Products/Card/BuyButton/Button';
import Categories from '@/app/components/ShopPage/Categories/Categories';
import data from '../../../../public/data/data.json';
import { Item } from '@/app/components/ShopPage/Products/Card/types';
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
              <Button propsClass='filter' width={25} height={26} image="/svg/filter.svg">
                Фильтрация
              </Button>
              
            </div>
            <Button propsClass='sortBy' width={25} height={26} image="/svg/filter.svg">
              Сортировка
            </Button>
          </div>
          
          {/* Блок карточек товара */}
          <div className={classes.cards}>
            {/* Карточка товара */}
            
           { data.map((item:Item)=>(
            <Card key={item.id} item={item}/>
          ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
