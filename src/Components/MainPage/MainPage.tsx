import React from 'react';
import { specialist } from '@/assets/constants/mainPage';
import { serviceInfo } from '@/assets/constants/mainPage';
import classes from './MainPage.module.scss';
import Specialists from '@/UI/Specialists/Specialists';
import Services from '@/UI/Services/Services';
import { description } from '@/assets/constants/mainPage';

const MainPage = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<div className={classes.banner}>
					<div className={classes.bannerContent}>
						{description.map((item) => (
							<>
								<h1 className={classes.title}>{item.title}</h1>
								<button className={classes.bannerBtn}>Оставить заявку</button>
								<div className={classes.wrapperParagraph}>
									<p className={classes.paragraph}>{item.paragraphOne}</p>
									<p className={classes.paragraph}>{item.paragraphTwo}</p>
									<p className={classes.paragraph}>{item.paragraphThree}</p>
								</div>
							</>
						))}
					</div>
				</div>
				<Services infoPanel={serviceInfo} />
				<Specialists infoSpecialist={specialist} />
				<Services infoPanel={serviceInfo} />
			</div>
		</div>
	);
};

export default MainPage;
