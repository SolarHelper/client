'use client';
import React, { useState } from 'react';
import classes from './Shop.module.scss';
import SearchInput from '@/UI/SearchInput/SearchInput';
import Card from '@/UI/Card/Card';
import Button from '@/UI/Button/Button';
import Categories from '@/Components/ShopPage/Categories/Categories';
import { data } from '@/assets/constants/shopPage';
import { Item } from '@/types';
import Sort from '@/UI/Sort/Sort';

const Shop = () => {
	const [visible, setVisible] = useState<boolean>(false);
	const [filterValue, setFilterValue] = useState<string>('');
	const filteredProduct = data.filter((item) => item.class === filterValue);
	const buttonHandler = (): void => {
		setVisible((prev) => !prev);
	};
	const handleButton = (e: { target: { innerText: string } }) => {
		if (e.target.innerText === 'Солнечные панели') {
			setFilterValue('Солнечная панель');
		} else {
			setFilterValue('Инвертор');
		}
	};
	return (
		<div className={classes.wrapper}>
			{/* Верхняя шапка изображение солнечной панели*/}
			<div className={classes.headerImage}>
				<h1 className={classes.title}>Наши продукты</h1>
			</div>

			<div className={classes.mainWrapper}>
				<Categories
					visible={visible}
					handleButton={handleButton}
					filterValue={filterValue}
				/>
				{/* Карточки товара */}
				<div className={classes.products}>
					{/* Поиск по товару */}
					<SearchInput />
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
						<Sort />
					</div>

					{/* Блок карточек товара */}
					<div className={classes.cards}>
						{/* Карточка товара */}
						{filterValue
							? filteredProduct.map((item: Item) => (
									<Card key={item.id} item={item} />
							  ))
							: data.map((item: Item) => <Card key={item.id} item={item} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
