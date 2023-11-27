import React from 'react';
import classes from './Card.module.scss';
import Link from 'next/link';
import Button from '@/UI/Button/Button';
import ArrowButton from '@/UI/ArrowButton/ArrowButton';
import Image from 'next/image';

const Card = () => {
	return (
		<>
			{/* Карточка товара */}
			<div className={classes.item}>
				{/* Линк, переход в карточку товара подставить {id}*/}
				<Link className={classes.cardLink} href={`/shop/id`}>
					{/* Изображение товара */}
					<Image
						width={140}
						height={187}
						alt='Изображение карточки товара'
						className={classes.cardImage}
						src='/svg/solar-panel.svg'
						style={{
							width: '60%',
							height: '187px',
						}}
					/>
				</Link>
				{/* Блок: Название товара, Цена, Рейтинг */}
				<div className={classes.cardBlock}>
					<p className={classes.itemName}>lorem ipsum</p>
					<p className={classes.itemPriceCount}>price грн</p>
					<div className={classes.ratingWrapper}>
						<div className={classes.ratingStars}>
							<span>⭐⭐⭐⭐</span>
						</div>
					</div>
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
