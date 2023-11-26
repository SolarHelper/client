'use client';
import React from 'react';
import Image from 'next/image';
import LeftArrow from '../../assets/img/left-arrow.svg';
import RightArrow from '../../assets/img/right-arrow.svg';
import Basket from '../../assets/img/basket.svg';
import TestCard from '../../assets/img/test-card.png';

import styles from './cardcalc.module.scss';

const CardCalc: React.FC = () => {
  return (
    <section className={styles.order}>
      <div className={styles.container}>
        <h2>Оптимальное оборудование для вашего проекта:</h2>
        <div className={styles.order__grid}></div>
        <button>В корзину</button>
      </div>
    </section>
  );
};

export default CardCalc;
