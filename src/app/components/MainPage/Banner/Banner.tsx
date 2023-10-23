import React from 'react';
import classes from './Banner.module.scss';
const Banner = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.bannerContent}>
        <h1 className={classes.title}>Получите лучшее предложение по установке солнечного оборудования
        </h1>
        <button className={classes.bannerBtn}>Оставить заявку</button>
        <div className={classes.wrapperParagraph}>
          <p className={classes.paragraph}>
            Подберите оборудование которое вам подходит 
          </p>
          <p className={classes.paragraph}>
            Выберите инсталятора
          </p>
          <p className={classes.paragraph}>
            Сделайте заказ и ожидайте звонка менеджера
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;