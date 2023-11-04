import React from 'react';
import classes from './FilterInput.module.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const FilterInput = ({ title }) => {
  return (
    // Фильтрация товаров по наименованию (Солнечные панели, Инверторы)
    <div className={classes.inputWrapper}>
      <p className={classes.filterTitle}>{title}</p>
      <div className={classes.solarPanelInput}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Елементы фильтрации" />
        </FormGroup>
      </div>
    </div>
  );
};

export default FilterInput;
