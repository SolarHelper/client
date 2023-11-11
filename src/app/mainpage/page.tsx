'use client';
import React from 'react';
import Banner from '@/Components/MainPage/Banner/Banner';
import Specialists from '@/Components/MainPage/Specialists/Specialists';
import Services from '@/Components/MainPage/Services/Services';
import classes from './page.module.scss';
import { mock_api } from '@/assets/constants/mock_api';

const serviceInfo = mock_api.getServiceInfo();
const specialistList = mock_api.getSpecialist();

const MainPage = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Banner />
				<Services infoPanel={serviceInfo} />
				<Specialists infoSpecialist={specialistList} />
				<Services infoPanel={serviceInfo} />
			</div>
		</div>
	);
};

export default MainPage;
