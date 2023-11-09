'use client';
import React, { useState } from 'react';
import data from '../../../../../public/data/data.json';
import Image from 'next/image';
import classes from './page.module.scss';
import { ProductProps } from '@/app/types';

const Product = ({ params: { id } }: ProductProps) => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const items = data.filter(x => x.id === Number(id));

	return (
		<div className={classes.wrapper}>
			{items.map((item, index) => (
				<div className={classes.itemWrapper} key={`${item.id}${index}`}>
					<div className={classes.cardImage}>
						<Image src={item.photo} width={360} height={400} alt='' />
					</div>

					<div className={classes.cardInfo}>
						<h3 className={classes.title}>
							{item.type} {item.model}
						</h3>
						<p className={classes.price}>Цена: {item.price} ₴</p>
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
									minlength='13'
									maxlength='13'
								/>
								<button>ЗАКАЗАТЬ В 1 КЛИК</button>
							</div>
						</div>
						<div className={classes.techParameters}>
							<p>Характеристики :</p>
							<hr />
							<li>Бренд: {item.brand}</li>
							<li>Тип: {item.type}</li>
							<li>Номинальная мощность, Вт: {item.nominal_power_watt}</li>
							<li>Номинальный ток, А: {item.nominal_tok_amper}</li>
							<li>КПД: {item.efficiency}</li>
							<li>Клас защиты IP: {item.ip_class}</li>
							<li>
								Количество фотоэлементов в модуле, шт:{' '}
								{item.number_of_panels_in_set}
							</li>
							<li>Высота, мм: {item.height}</li>
							<li>Ширина, мм:{item.width}</li>
							<li>Глубина, мм: {item.depth_mm}</li>
							<li>Вес, кг: {item.weight_kg}</li>
							<li>
								Страна производитель: {item.country_of_registration_of_brand}
							</li>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Product;
