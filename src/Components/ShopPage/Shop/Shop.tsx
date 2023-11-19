'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import classes from './Shop.module.scss';
import Card from '@/Components/ShopPage/Card/Card';
import Button from '@/UI/Button/Button';
import Categories from '@/Components/ShopPage/Categories/Categories';

const Shop = () => {
	const [visible, setVisible] = useState<boolean>(false);
	const buttonHandler = (): void => {
		setVisible((prev) => !prev);
	};
	return (
		<div className={classes.wrapper}>
			{/* Верхняя шапка изображение солнечной панели*/}
			<div className={classes.headerImage}>
				<h1 className={classes.title}>Наши продукты</h1>
			</div>
			<div className={classes.mainWrapper}>
				<Categories visible={visible} />
				<div className={classes.products}>
					{/* Поиск по товару */}
					<div className={classes.searchWrapper}>
						<input
							className={classes.searchInput}
							type='text'
							placeholder='поиск'
						/>
						<Image
							className={classes.searchImage}
							src='/svg/search.svg'
							alt='search'
							width={20}
							height={20}
						/>
					</div>
					<div className={classes.buttonBlock}>
						<div className={classes.button} onClick={buttonHandler}>
							<Button
								propsClass='filter'
								width={25}
								height={26}
								image='/svg/filter.svg'
							>
								Фильтрация
							</Button>
						</div>
						<div className={classes.sortBy}>
							<span>Сортировка:</span>
							<select className={classes.filterProduct} name='select'>
								<option value='value2'>От дешевых к дорогим </option>
								<option value='value3'>От дорогих к дешевым</option>
								<option value='value1'>По рейтингу</option>
								<option value='value1'>Новинки</option>
							</select>
						</div>
					</div>
					<div className={classes.cards}>
						{/* Карточка товара */}
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
