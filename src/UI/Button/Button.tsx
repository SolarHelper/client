import React from 'react';
import Image from 'next/image';
import classes from './Button.module.scss';

interface ButtonProps {
	children: string;
	width?: number;
	height?: number;
	src?: string;
	image?: string;
	propsClass: string;
};

const Button = ({
	children,
	image,
	propsClass,
}: ButtonProps) => {
	return (
		<button className={classes[propsClass]}>
			{children}
			<Image
				className={classes.image}
				src={image}
				alt='Изображение'
        width={9}
        height={10}
			/>
		</button>
	);
};

export default Button;
