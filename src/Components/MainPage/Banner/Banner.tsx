import React from 'react';
import classes from './Banner.module.scss';
import description from '../../../../public/data/description.json';

const Banner = () => {
	return (
		<div className={classes.wrapper}>
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
	);
};

export default Banner;
