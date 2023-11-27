import React from 'react';
import Image from 'next/image';
import classes from './ArrowButton.module.scss';

type ArrowProps = {
	direction: string;
};

const ArrowButton = ({ direction }: ArrowProps) => {
	return (
		<button className={classes.arrow}>
			{direction === 'right' ? (
				<Image
					src='/svg/arrow.svg'
					alt='количество товаров'
					width={9}
					height={10}
          style={{ transform:'rotate(-180deg)'}}
				/>
			) : (
				<Image
					src='/svg/arrow.svg'
					alt='количество товаров'
					width={9}
					height={10}
				/>
			)}
		</button>
	);
};

export default ArrowButton;
