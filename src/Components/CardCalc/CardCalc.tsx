'use client';
import React from 'react';
import CardInCart from '@/widgets/CardInCart/CardInCart';
import Button from '@/shared/ui/Button/Button';

import styles from './cardcalc.module.scss';

const CardCalc: React.FC = () => {
  return (
    <section className={styles.order}>
      <div className={styles.container}>
        <h2>Оптимальное оборудование для вашего проекта:</h2>
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
        <Button customBtnClass={styles.order__button} onclick={() => {}}>
          В корзину
        </Button>
      </div>
    </section>
  );
};

export default CardCalc;
