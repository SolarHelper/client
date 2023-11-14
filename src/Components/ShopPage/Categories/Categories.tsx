import React from 'react';
import classes from './Categories.module.scss';

type CategoriesProps = {
	visible: boolean;
	handleButton: () => void;
	filterValue: string;
};

const Categories = ({
	visible,
	handleButton,
	filterValue,
}: CategoriesProps) => {
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
				<div className={classes.rangePrice}>
					<p className={classes.rangePriceParagraph}>Цена</p>
					<div>
						<input
							className={classes.slider}
							type='range'
							id='price'
							name='price'
							min='0'
							max={100}
						/>
						<p>
							<span className={classes.rangeSpan}>от 0 до 100 грн</span>
						</p>
					</div>
				</div>
				{/* Чекбокс фильтрации по номинальной мощности */}
				<p className={classes.categories}>Мощность Вт.</p>
			</div>
		</div>
	);
};

export default Categories;
