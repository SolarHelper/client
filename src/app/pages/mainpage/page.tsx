'use client';
import React from 'react';
import Banner from '@/app/components/MainPage/Banner/Banner';
import Specialists from '@/app/components/MainPage/Specialists/Specialists';
import Services from '@/app/components/MainPage/Services/Services';
import classes from './page.module.scss';
import { mock_api } from '@/assets/mock_api';

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
