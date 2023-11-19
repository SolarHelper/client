import React from 'react';
import classes from './ProductCard.module.scss';
import Image from 'next/image';

type propsId = {
	id: string | string[];
};

const ProductCard = ({ id }: propsId) => {
	return (
		// Карточка товара
		<div className={classes.wrapper}>
			<div className={classes.itemWrapper}>
				<div className={classes.cardImage}>
					<Image src={'/svg/solar-panel.svg'} width={360} height={400} alt='' />
				</div>
				<div className={classes.cardInfo}>
					<h3 className={classes.title}>тип + модель</h3>
					<p className={classes.price}>Цена: 1200 ₴</p>
					<div className={classes.btnBlock}>
						<div className={classes.itemCounter}>
							<button>-</button>1<button>+</button>
							<button>КУПИТЬ</button>
						</div>
						<div className={classes.oneClick}>
							<input
								type='tel'
								name='phone'
								placeholder='+380931111111'
								pattern=''
							/>
							<button>ЗАКАЗАТЬ В 1 КЛИК</button>
						</div>
					</div>
					<div className={classes.techParameters}>
						<p>Характеристики :</p>
						<hr />
						<li>Бренд: </li>
						<li>Тип: </li>
						<li>Номинальная мощность, Вт: </li>
						<li>Номинальный ток, А: </li>
						<li>КПД: </li>
						<li>Клас защиты IP: </li>
						<li>Количество фотоэлементов в модуле, шт:</li>
						<li>Высота, мм: </li>
						<li>Ширина, мм:</li>
						<li>Глубина, мм: </li>
						<li>Вес, кг: </li>
						<li>Страна производитель: </li>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
