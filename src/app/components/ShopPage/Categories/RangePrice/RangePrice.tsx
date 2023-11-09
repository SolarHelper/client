import React, { useState } from 'react';
import classes from './RangePrice.module.scss';
import { TitleProps } from '@/app/types';
const RangePrice = ({ title }: TitleProps) => {
	const [max, setMax] = useState(100);
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
          max={max} 
        />
				<p>
					<span className={classes.rangeSpan}>от 0 до {max} грн</span>
				</p>
			</div>
		</div>
	);
};

export default RangePrice;
