import React from 'react';
import classes from './FilterInput.module.scss';
const FilterInput = ({ title }) => {
  return (
    // Фильтрация товаров по наименованию (Солнечные панели, Инверторы)
    <div className={classes.inputWrapper}>
      <p className={classes.filterTitle}>{title}</p>
      <div className={classes.solarPanelInput}>
        <input
          className={classes.solarInput}
          type="checkbox"
          name="filterCheck"
          value="panel"
          id="panel"
        />
        <label for="panel">Солнечные панели</label>
      </div>
      <div className={classes.inverterInput}>
        <input
          className={classes.inverterInput}
          type="checkbox"
          name="filterCheck"
          value="inverter"
          id="inverter"
        />
        <label for="inverter">Инверторы</label>
      </div>
    </div>
  );
};

export default FilterInput;
