import React, { useState } from 'react';
import classes from './RangePrice.module.scss';
const RangePrice = ({title}) => {
  return (
    // Компонент фильтрации по цене
    <div className={classes.rangePrice}>
      <p className={classes.rangePriceParagraph}>{title}</p>
      <input className={classes.rangeInput} type="range" min="0" max="100" step="1" value="50"></input>
      <span className={classes.rangeSpan}>от 50 до 200 грн</span>
    </div>
  );
};

export default RangePrice;