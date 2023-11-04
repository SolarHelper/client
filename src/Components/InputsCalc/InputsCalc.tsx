'use client';

import React from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import styles from './inputsCalc.module.scss';
import './reactSelect.scss';

type TOptions = {
  value: string;
  label: string;
}

const animatedComponents = makeAnimated();

const InputsCalc:React.FC = () => {

  const options: TOptions[] = [
    { value: 'тип', label: 'Тип' },
    { value: 'категория', label: 'Категория' },
    { value: 'модель', label: 'Модель' }
  ]

  return (
    <section className={styles.calc}>
      <div className={styles.container}>
        <div className={styles.calc__wrapper}>
          <div className={styles.calc__energy}>
            <h3 className={styles.calc__title}>Общее количество энергии</h3>
            <div className={styles.calc__energy__wrapper}>
              <input className={styles.energyInput}
                type="text" 
                placeholder='34'
              />
              <span className={styles.spantext}>кВт/сут</span>
            </div>
          </div>
          <div className={styles.calc__equipment}>
            <h3 className={styles.calc__title}>Производитель</h3>
            <Select
              classNamePrefix='selectInput'
              noOptionsMessage={() => "No more options"}
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[options[0], options[1]]}
              isMulti
              options={options} 
            />
          </div>
        </div>
        <button className={styles.calc__btn}>Расчитать</button>
      </div>
    </section>
  )
}

export default InputsCalc