import React from 'react';
import classes from './Card.module.scss';
import Link from 'next/link';
import RatingStar from './RatingStar/RatingStar';
import Button from './BuyButton/Button';
import ArrowButton from './ArrowButton/ArrowButton';
import { PropsCard } from './types';
const Card: React.FC<PropsCard> = ({item}, key) => {
  
  return (
    <>
      {/* Карточка товара */}
      <div className={classes.item}>
        {/* Линк, переход в карточку товара */}
        <Link className={classes.cardLink} href="">
          {/* Изображение товара */}
            
          <img className={classes.cardImage} src={item.photo} />
        </Link>
        {/* Блок: Название товара, Цена, Рейтинг */}
        <div className={classes.cardBlock}>
          <p className={classes.itemName}>{item.model}</p>
          <p className={classes.itemPriceCount}>{item.price} грн</p>
          <RatingStar />
        </div>
        <div className={classes.btnBlock}>
          {/* Блок Счетчика товаров */}
          <div className={classes.counter}>
            <ArrowButton pathToImage={'/svg/ArrowLeft.svg'} />
            <span className={classes.count}>1</span>
            <ArrowButton pathToImage={'/svg/ArrowRight.svg'} />
          </div>
          {/* Кнопка покупки товара */}
          <Button width={15} height={16} image='/svg/shopCartIcon.svg'>Купить</Button>
        </div>
      </div>
    </>
  );
};

export default Card;
