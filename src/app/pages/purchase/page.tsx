'use client';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/shared/ui/Button/Button';

import YellowLogo from '../../../assets/img/yellow_check.jpg';

import styles from './purchase.module.scss';

export default function ThankYouForPurchase() {
  return (
    <section className={styles.thanks}>
      <div className={styles.container}>
        <div className={styles.thanks__img}>
          <Image src={YellowLogo} width={90} height={57} alt="logo" />
        </div>
        <h2 className={styles.thanks__title}>Спасибо!</h2>
        <h3 className={styles.thanks__subtitle}>
          Вы успешно оформили заказ. Мы свяжемся с вами в ближайшее время.
        </h3>
        <h3 className={styles.thanks__titleOrder}>Номер вашего заказа №3471</h3>
        <Link className={styles.thanks__link} href="#">
          {/* <button className={styles.thanks__btn}>Вернуться в магазин</button> */}
          <Button onclick={() => {}}>Вернуться в магазин</Button>
        </Link>
        <h3 className={styles.thanks__notification}>
          На вашу почту отправленно уведомление об оплате!
        </h3>
      </div>
    </section>
  );
}
