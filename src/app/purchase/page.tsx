import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import GreenLogo from '../../assets/img/green_check.svg';
import HomeSVG from '../../assets/img/HomeSVG.svg';
import Solar from '../../assets/img/Solar.svg';

import styles from './purchase.module.scss';

export default function ThankYouForPurchase() {
  return (
    <section className={styles.thanks}>
      <div className={styles.container}>
        <h2>Шапка навигации</h2>
        <h2>Компонент с картинкой+текст</h2>
        <div className={styles.thanks__img}>
          <Image src={GreenLogo} width={139} height={102} alt="greenlogo" />
        </div>
        <h2 className={`${styles.firstTitle} ${styles.thanks__title}`}>Спасибо за ваш заказ</h2>
        <h2 className={`${styles.secondTitle} ${styles.thanks__title}`}>Мы скоро свяжемся с вами</h2>

  
            <div className={styles.thanks__home}>
                <Link href='/'>
                    <Image src={HomeSVG} alt="home" />
                    <span className={styles.thanks__home__text}>На главную</span>
                </Link>
            </div>
            <div className={styles.thanks__equipment}>
                <Link href='#'>
                    <Image src={Solar} alt="solar" />
                    <span className={styles.thanks__home__text}>Оборудование</span>
                </Link>
            </div>

        

      </div>
    </section>
  );
}
