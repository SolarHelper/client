import React, { useState } from 'react';
import classes from './RangePrice.module.scss';
import { Slider } from '@mui/material';
const RangePrice = ({title}) => {
  const [value, setValue] = React.useState<number[]>([0, 100]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    // Компонент фильтрации по цене
    <div className={classes.rangePrice}>
      <p className={classes.rangePriceParagraph}>{title}</p>
      <Slider
        className={classes.slider}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText=''
      />
      <span className={classes.rangeSpan}>от {value[0]} до {value[1]} грн</span>
    </div>
  );
};

export default RangePrice;