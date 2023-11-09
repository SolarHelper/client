import React from 'react';
import RangePrice from './RangePrice/RangePrice';
import classes from './Categories.module.scss';

const Categories = ({ visible, handleButton, filterValue }) => {
	return (
		<div className={classes.wrapper}>
			<div className={visible ? classes.visible : classes.notVisible}>
				<div className={classes.buttonBlock}>
					<p className={classes.categories}>Категории</p>
					<button onClick={handleButton} className={classes.btn}>
						Солнечные панели
					</button>
					<button onClick={handleButton} className={classes.btn}>
						Инверторы
					</button>
				</div>
				<RangePrice title={'Цена'} />
				{/* Чекбокс фильтрации по номинальной мощности */}
				<p className={classes.categories}>Мощность Вт.</p>
			</div>
		</div>
	);
};

export default Categories;
