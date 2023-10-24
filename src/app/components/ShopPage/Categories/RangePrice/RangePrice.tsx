import React, { useState } from 'react';
import classes from './RangePrice.module.scss';
const RangePrice = () => {
  return (
    // Компонент фильтрации по цене
    <div className={classes.rangePrice}>
      <input className={classes.rangeInput} type="range" min="0" max="100" step="1" value="50"></input>
      <span>50</span>
    </div>
  );
};

export default RangePrice;