'use client';
import React from 'react';
import data from '../../../../public/data/data.json';
import classes from './page.module.scss';
import { ProductProps } from '@/types';
import Id from '@/Components/ShopPage/Id/Id';

const Product = ({ params: { id } }: ProductProps) => {
	const items = data.filter((x) => x.id === Number(id));

	return (
		<div className={classes.wrapper}>
			{items.map((item, index) => (
				<Id item={item} index={index} />
			))}
		</div>
	);
};

export default Product;
