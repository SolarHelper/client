import React from 'react';
import classes from './Select.module.scss';
const Select = () => {
	return (
		<select className={classes.filterProduct} name='select'>
			<option value='value2'>От дешевых к дорогим </option>
			<option value='value3'>От дорогих к дешевым</option>
			<option value='value1'>По рейтингу</option>
			<option value='value1'>Новинки</option>
		</select>
	);
};

export default Select;
