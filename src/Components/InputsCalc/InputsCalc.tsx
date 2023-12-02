'use client';
import React from 'react';
import makeAnimated from 'react-select/animated';
import dynamic from 'next/dynamic';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';

import styles from './inputsCalc.module.scss';
import './reactSelect.scss';

type TOptions = {
  value: string;
  label: string;
};

const animatedComponents = makeAnimated();

const InputsCalc: React.FC = () => {
  const Select = dynamic(() => import('react-select').then((mod) => mod.default), { ssr: false });
  const options: TOptions[] = [
    { value: 'тип', label: 'Тип' },
    { value: 'категория', label: 'Категория' },
    { value: 'модель', label: 'Модель' },
  ];

  return (
    <section className={styles.calc}>
      <div className={styles.container}>
        <div className={styles.calc__wrapper}>
          <div className={styles.calc__energy}>
            <h3 className={styles.calc__title}>Общее количество энергии</h3>
            <Input
              customClassName={styles.energyInput}
              value={''}
              placeholder="34"
              onchange={() => {}}>
              кВт/&nbsp;сут
            </Input>
          </div>
          <div className={styles.calc__equipment}>
            <h3 className={styles.calc__title}>Производитель</h3>
            <Select
              classNamePrefix="selectInput"
              noOptionsMessage={() => 'No more options'}
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[options[0], options[1], options[2]]}
              isMulti
              options={options}
            />
          </div>
        </div>
        <Button customBtnClass={styles.calc__btn} onclick={() => {}}>
          Расчитать
        </Button>
      </div>
    </section>
  );
};

export default InputsCalc;
