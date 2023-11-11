import React, { useState } from 'react';
import classes from './RangePrice.module.scss';
import { TitleProps } from '@/types';
const RangePrice = ({ title }: TitleProps) => {
	return (
		// Cлайдер цен
		<div className={classes.rangePrice}>
			<p className={classes.rangePriceParagraph}>{title}</p>
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
	);
};

export default RangePrice;
