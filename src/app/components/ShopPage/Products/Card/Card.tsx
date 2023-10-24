import React from 'react';
import classes from './Card.module.scss';
import Link from 'next/link';
import RatingStar from './RatingStar/RatingStar';
import Image from 'next/image';
import Button from './Button/Button';

const Card = () => {
  return (
    <>
      {/* Карточка товара */}
      <div className={classes.item}>
        {/* Линк, переход в карточку товара */}
        <Link className={classes.cardLink} href="">
          {/* Изображение товара */}
          <img className={classes.cardImage} src="/image/panel.jpg" />
        </Link>
        {/* Блок: Название товара, Цена, Рейтинг */}
        <div className={classes.cardBlock}>
          <p className={classes.itemName}>Risen RSM40-8-410M</p>
          <p className={classes.itemPriceCount}>5700 грн</p>
          <RatingStar />
        </div>
        <div className={classes.btnBlock}>
        {/* Счетчик товаров */}
          <div className={classes.counter}>
            <button className={classes.arrowLeft}>
              <Image src='/svg/arrowLeft.svg' alt='' width={9} height={10}/>
            </button>
            <span className={classes.count}>1</span>
            <button className={classes.arrowRight}>
              <Image src='/svg/arrowRight.svg' alt='' width={9} height={10}/>
            </button>
          </div>
          {/* Кнопка покупки товара */}
          <Button/>
        </div>
      </div>
    </>
  );
};

export default Card;
