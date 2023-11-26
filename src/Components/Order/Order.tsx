'use client';

import React from 'react';

import styles from './order.module.scss';
import CardInCart from '@/widgets/CardInCart/CardInCart';

const Order: React.FC = () => {
  return (
    <section className={styles.order}>
      <div className={styles.container}>
        <h2>Оформление заказа</h2>

        <div className={styles.order__grid}>
          <CardInCart
            containerClassName={styles.cartochka}
            productName="AAA"
            productPrice={12000}
            NumberOfProducts={123}
          />
          <CardInCart
            containerClassName={styles.cartochka}
            productName="ААА"
            productPrice={12000}
            NumberOfProducts={123}
          />
          <CardInCart
            containerClassName={styles.cartochka}
            productName="ААА"
            productPrice={12000}
            NumberOfProducts={123}
          />
          <CardInCart
            containerClassName={styles.cartochka}
            productName="ААА"
            productPrice={12000}
            NumberOfProducts={123}
          />
        </div>
        <div className={styles.order__info}>
          <h2>Итог</h2>
          <ul>
            <li className={styles.order__info__list}>
              <div>
                <div className={styles.order__info__name}>Солнечная панель</div>
                <div className={styles.order__info__model}>Risen RSM40-8-410M</div>
              </div>
              <div className={styles.price}>20000 грн</div>
            </li>
            <li className={styles.order__info__list}>
              <div>
                <div className={styles.order__info__name}>Солнечная панель</div>
                <div className={styles.order__info__model}>Risen RSM40-8-410M</div>
              </div>
              <div className={styles.price}>20000 грн</div>
            </li>
            <li className={styles.order__info__list}>
              <div>
                <div className={styles.order__info__name}>Солнечная панель</div>
                <div className={styles.order__info__model}>Risen RSM40-8-410M</div>
              </div>
              <div className={styles.price}>20000 грн</div>
            </li>
          </ul>
          <div className={styles.allprice}>
            <div className={styles.order__info__model}>Итоговая сумма</div>
            <div className={styles.price}>40000 грн</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
