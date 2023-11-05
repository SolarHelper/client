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
        <div className={styles.order__grid}>
          <div className={styles.order__wrapper}>
            <div className={styles.order__image}>
              <Image
                className={styles.order__image__img}
                src={TestCard}
                priority={false}
                width={88}
                height={120}
                alt="card"
              />
            </div>
            <div className={styles.order__wrapper__info}>
              <div className={styles.order__price}>12 500 грн</div>
              <div className={styles.order__name}>Risen RSM40-8-410M</div>
              <div className={styles.order__quantity}>
                <span className={styles.order__quantity__arrow}>
                  <Image
                    className={styles.order__quantity__arrow__img}
                    width={16}
                    height={11.68}
                    src={LeftArrow}
                    alt="arrow"
                  />
                </span>
                <span className={styles.order__quantity__number}>20</span>
                <span className={styles.order__quantity__arrow}>
                  <Image
                    className={styles.order__quantity__arrow__img}
                    width={16}
                    height={11.68}
                    src={RightArrow}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
            <div className={styles.order__basket}>
              <Image
                className={styles.order__basket__img}
                src={Basket}
                width={20}
                height={22}
                alt="basket"
              />
            </div>
          </div>
          <div className={styles.order__wrapper}>
            <div className={styles.order__image}>
              <Image
                className={styles.order__image__img}
                src={TestCard}
                priority={false}
                width={88}
                height={120}
                alt="card"
              />
            </div>
            <div className={styles.order__wrapper__info}>
              <div className={styles.order__price}>12 500 грн</div>
              <div className={styles.order__name}>Risen RSM40-8-410M</div>
              <div className={styles.order__quantity}>
                <span className={styles.order__quantity__arrow}>
                  <Image
                    className={styles.order__quantity__arrow__img}
                    width={16}
                    height={11.68}
                    src={LeftArrow}
                    alt="arrow"
                  />
                </span>
                <span className={styles.order__quantity__number}>20</span>
                <span className={styles.order__quantity__arrow}>
                  <Image
                    className={styles.order__quantity__arrow__img}
                    width={16}
                    height={11.68}
                    src={RightArrow}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
            <div className={styles.order__basket}>
              <Image
                className={styles.order__basket__img}
                src={Basket}
                width={20}
                height={22}
                alt="basket"
              />
            </div>
          </div>
          <div className={styles.order__wrapper}>
            <div className={styles.order__image}>
              <Image
                className={styles.order__image__img}
                src={TestCard}
                priority={false}
                width={88}
                height={120}
                alt="card"
              />
            </div>
            <div className={styles.order__wrapper__info}>
              <div className={styles.order__price}>12 500 грн</div>
              <div className={styles.order__name}>Risen RSM40-8-410M</div>
              <div className={styles.order__quantity}>
                <span className={styles.order__quantity__arrow}>
                  <Image
                    className={styles.order__quantity__arrow__img}
                    width={16}
                    height={11.68}
                    src={LeftArrow}
                    alt="arrow"
                  />
                </span>
                <span className={styles.order__quantity__number}>20</span>
                <span className={styles.order__quantity__arrow}>
                  <Image
                    className={styles.order__quantity__arrow__img}
                    width={16}
                    height={11.68}
                    src={RightArrow}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
            <div className={styles.order__basket}>
              <Image
                className={styles.order__basket__img}
                src={Basket}
                width={20}
                height={22}
                alt="basket"
              />
            </div>
          </div>
          <div className={styles.order__wrapper}>
            <div className={styles.order__image}>
              <Image
                className={styles.order__image__img}
                src={TestCard}
                priority={false}
                width={88}
                height={120}
                alt="card"
              />
            </div>
            <div className={styles.order__wrapper__info}>
              <div className={styles.order__price}>12 500 грн</div>
              <div className={styles.order__name}>Risen RSM40-8-410M</div>
              <div className={styles.order__quantity}>
                <span className={styles.order__quantity__arrow}>
                  <Image
                    className={styles.order__quantity__arrow__img}
                    width={16}
                    height={11.68}
                    src={LeftArrow}
                    alt="arrow"
                  />
                </span>
                <span className={styles.order__quantity__number}>20</span>
                <span className={styles.order__quantity__arrow}>
                  <Image
                    className={styles.order__quantity__arrow__img}
                    width={16}
                    height={11.68}
                    src={RightArrow}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
            <div className={styles.order__basket}>
              <Image
                className={styles.order__basket__img}
                src={Basket}
                width={20}
                height={22}
                alt="basket"
              />
            </div>
          </div>
        </div>
        <button>В корзину</button>
      </div>
    </section>
  );
};

export default CardCalc;
