'use client'
import React from 'react';
import Banner from '@/app/components/MainPage/Banner/Banner';
import Specialists from '@/app/components/MainPage/Specialists/Specialists';
import Services from '@/app/components/MainPage/Services/Services';
import classes from './page.module.scss';
import { useState } from 'react';
interface titleParams {
  title: string;
  paragraph: string;
  image:string,
}
interface specialistProps{
  title: string;
  paragraph: string;
}

const MainPage = () => {
  const [infoPanel,setInfoPanel] = useState<Array<titleParams>>([
    {
      image: "/tool.svg",
      title: "лучшие специалисты",
      paragraph: "Вам нужно только выбрать специалиста который устраивает вас по цене и срокам сборки."
    },
    {
      image: "/money.svg",
      title: "Цены ниже на 10-30%",
      paragraph: "Заказывая оборудование у нас, цена за готовый комплект оборудования + установку будет наиже рыночной в среднем на 20 %."
    },
    {
      image: "/calendar.svg",
      title: "экономим ваше время",
      paragraph: "При затрате 5 минут вашего времени вы получаете лучшие предложения от квалифицированых специалистов. "
    },
    {
      image: "/questions.svg",
      title: "Помощь с выбором",
      paragraph: "Поможем с выбором оборудования, объективно подберём лучшего специалиста и оборудование."
    },
  ]);
  const [infoSpecialist,setInfoSpecialist] = useState<Array<specialistProps>>([
    {
      title: "125",
      paragraph: "Компаний "
    },
    {
      title: "73",
      paragraph: "Крупных проектов"
    },
    {
      title: "120",
      paragraph: "Завершенных проектов"
    }
  ]);
 
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
      <Banner/>
      <Services infoPanel={infoPanel}/>
      <Specialists infoSpecialist={infoSpecialist}/>
      <Services infoPanel={infoPanel}/>
      </div>
    </div>
  );
};

export default MainPage;
