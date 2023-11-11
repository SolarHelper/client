'use client';
import React, { useState } from 'react';
import classes from './page.module.scss';
import SearchInput from '@/UI/SearchInput/SearchInput';
import Card from '@/Components/ShopPage/Products/Card/Card';
import Button from '@/UI/BuyButton/Button';
import Categories from '@/Components/ShopPage/Categories/Categories';
import data from '../../../public/data/data.json';
import { Item } from '@/types';

const Shop = () => {
	const [visible, setVisible] = useState(false);
	const [filterValue, setFilterValue] = useState('');
	const filteredProduct = data.filter((item) => item.class === filterValue);
	const buttonHandler = (): void => {
		setVisible((prev) => !prev);
	};
	const handleButton = (e) => {
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
