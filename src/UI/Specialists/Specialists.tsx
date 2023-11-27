import React from 'react';
import classes from './Specialists.module.scss';
type SpecialistProps = {
	title: string;
	paragraph: string;
};

const Specialists = ({
	infoSpecialist,
}: {
	infoSpecialist: SpecialistProps[];
}) => {
	return (
		<div className={classes.wrapper}>
			<h2 className={classes.title}>Большой выбор специалистов</h2>

			<div className={classes.specialists}>
				{infoSpecialist.map((item, index) => (
					<div className={classes.text} key={`${item}${index}`}>
						<div className={classes.companies}>
							<h3 className={classes.titleSecond}>{item.title}</h3>
						</div>
						<div className={classes.projects}>
							<p className={classes.paragraph}>{item.paragraph}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Specialists;
