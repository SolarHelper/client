import React from 'react';
import classes from './Card.module.scss';
import Link from 'next/link';
import RatingStar from '@/UI/RatingStar/RatingStar';
import Button from '@/UI/Button/Button';
import ArrowButton from '@/UI/ArrowButton/ArrowButton';
import Image from 'next/image';
import { PropsCard } from '@/types';

const Card = ({ item }: PropsCard) => {
	return (
		<>
			{/* Карточка товара */}
			<div className={classes.item}>
				{/* Линк, переход в карточку товара */}
				<Link className={classes.cardLink} href={`/shop/${item.id}`}>
					{/* Изображение товара */}

					<Image
						width={140}
						height={187}
						alt='Изображение карточки товара'
						className={classes.cardImage}
						src={item.photo}
						style={{
							width: '60%',
							height: '187px',
						}}
					/>
				</Link>
				{/* Блок: Название товара, Цена, Рейтинг */}
				<div className={classes.cardBlock}>
					<p className={classes.itemName}>{item.model}</p>
					<p className={classes.itemPriceCount}>{item.price} грн</p>
					<RatingStar />
				</div>
				<div className={classes.btnBlock}>
					{/* Блок Счетчика товаров */}
					<div className={classes.counter}>
						<ArrowButton direction={'left'} />
						<span className={classes.count}>1</span>
						<ArrowButton direction={'right'} />
					</div>
					{/* Кнопка покупки товара */}
					<Button
						propsClass='btn'
						width={15}
						height={16}
						image='/svg/shopCartIcon.svg'
					>
						В корзину
					</Button>
				</div>
			</div>
		</>
	);
};

export default Card;
