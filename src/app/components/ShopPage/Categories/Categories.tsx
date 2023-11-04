import React from 'react';
import FilterInput from './FilterInput/FilterInput';
import RangePrice from './RangePrice/RangePrice';
import classes from './Categories.module.scss';
import Link from 'next/link';
const Categories = ({buttonHandler, visible}) => {
  
  return (
    <div className={classes.wrapper}
    >
      <Link href='#' onClick={buttonHandler}/>
      <div className={visible ? classes.visible: classes.notVisible}>
        
        <h1 className={classes.title}>Категории</h1>
        {/* Блок фильтров */}
        {/* Чекбокс фильтрации Инверторы,Панели */}
        <FilterInput title={'Наши продукты'} />
        {/* Фильтрация по цене */}
        <RangePrice title={'Цена'} />
        {/* Чекбокс фильтрации по номинальной мощности */}
        <FilterInput title={'Номинальная мощность, Вт'} />
      </div>
    </div>
  );
};

export default Categories;