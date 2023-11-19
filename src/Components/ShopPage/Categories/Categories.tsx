import React from 'react';
import classes from './Categories.module.scss';

type CategoriesProps = {
	visible: boolean;
};

const Categories = ({ visible }: CategoriesProps) => {
	return (
		<div className={classes.wrapper}>
			<div className={visible ? classes.visible : classes.notVisible}>
				<div className={classes.buttonBlock}>
					<p className={classes.categories}>Категории</p>
					<button className={classes.btn}>Солнечные панели</button>
					<button className={classes.btn}>Инверторы</button>
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
				<p className={classes.categories}>Мощность Вт.</p>
			</div>
		</div>
	);
};

export default Categories;
