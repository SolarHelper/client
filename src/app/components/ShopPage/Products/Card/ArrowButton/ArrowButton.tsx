import React from 'react';
import Image from 'next/image';
import classes from './ArrowButton.module.scss';
import { ArrowProps } from '@/app/types';

const ArrowButton = ({ direction }: ArrowProps) => {
	return (
		<button className={classes.arrow}>
			{direction === 'right' ? (
				<Image
					src='/svg/arrowRight.svg'
					alt='количество товаров'
					width={9}
					height={10}
				/>
			) : (
				<Image
					src='/svg/arrowLeft.svg'
					alt='количество товаров'
					width={9}
					height={10}
				/>
			)}
		</button>
	);
};

export default ArrowButton;
