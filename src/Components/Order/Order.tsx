import React from 'react';

import Image from 'next/image';
import LeftArrow from '../../assets/img/left-arrow.svg';
import RightArrow from '../../assets/img/right-arrow.svg';
import Basket from '../../assets/img/basket.svg';
import TestCard from '../../assets/img/test-card.png'

import styles from './order.module.scss';


const Order: React.FC = () => {
  return (
    <section className={styles.order}>
      <div className={styles.container}>
        <h2>Оформление заказа</h2>
        <div className={styles['order-wrapper']}>
          <div className="order-image">
            <Image src={TestCard} width={140} height={184} alt="card" />
          </div>
          <div className={styles['order-name']}>Risen <br/>RSM40-8-410M</div>
          <div className="order-price">
            <div className={styles['order-price-string']}>Цена</div>
            <div className={styles['order-price-number']}>12 500 грн</div>
          </div>
          <div className="order-quantity">
            <div className={styles['order-quantity-string']}>Кол-во</div>
            <div className={styles['order-quantity-number']}>
              <span className={styles['order-quantity-arrow']}>
                <Image src={LeftArrow} alt="arrow" />
              </span>{' '}
              20{' '}
              <span className={styles['order-quantity-arrow']}>
                <Image src={RightArrow} alt="arrow" />
              </span>
            </div>
          </div>
          <div className={styles['order-basket']}>
            <Image src={Basket} alt="basket" />
          </div>
        </div>

        <div className={styles["order-info"]}>
          <h2>Общая сумма:</h2>
          <ul>
            <li className={styles['order-wrapper']}>
              <div>
                <div className={styles['item-name']}>Солнечная панель</div>
                <div className={styles['item-model']}>Risen RSM40-8-410M</div>
              </div>
              <div className={styles.price}>20000 грн</div>
            </li>

            <li className={styles['order-wrapper']}>
              <div>
                <div className={styles['item-name']}>Солнечная панель</div>
                <div className={styles['item-model']}>Risen RSM40-8-410M</div>
              </div>
              <div className={styles.price}>20000 грн</div>
            </li>
          </ul>
          <div className={styles.allprice}>
            <div className={styles['item-model']}>Итоговая сумма</div>
            <div className={styles.price}>40000 грн</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
