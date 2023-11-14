'use client';
import React from 'react';
import { data } from '@/assets/constants/shopPage';
import classes from './ProductCard.module.scss';
import Id from '@/UI/Id/Id';

const ProductCard = ( {id} ) => {
  console.log(id);
	const items = data.filter((x) => x.id === Number(id));

	return (
		<div className={classes.wrapper}>
			{items.map((item, index) => (
				<Id item={item} index={index} />
			))}
		</div>
	);
};

export default ProductCard;
