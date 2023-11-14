import React from 'react';
import Banner from '@/UI/Banner/Banner';
import { specialist } from '@/assets/constants/mainPage';
import { serviceInfo } from '@/assets/constants/mainPage';
import classes from './MainPage.module.scss';
import Specialists from '@/UI/Specialists/Specialists';
import Services from '@/UI/Services/Services';

const MainPage = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Banner />
				<Services infoPanel={serviceInfo} />
				<Specialists infoSpecialist={specialist} />
				<Services infoPanel={serviceInfo} />
			</div>
		</div>
	);
};

export default MainPage;
