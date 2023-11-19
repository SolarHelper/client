import React from 'react';
import Image from 'next/image';
import classes from './Button.module.scss';

type ButtonProps = {
	children: string;
	width?: number;
	height?: number;
	src?: string;
	image?: string;
	propsClass: string;
};

const Button = ({
	children,
	width,
	height,
	image,
	propsClass,
}: ButtonProps) => {
	return (
		<button className={classes[propsClass]}>
			{children}
			<Image
				className={classes.image}
				src={image}
				width={width}
				height={height}
				alt='Изображение'
			/>
		</button>
	);
};

export default Button;
