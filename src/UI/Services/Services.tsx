import React from 'react';
import classes from './Services.module.scss';
import Image from 'next/image';
interface ServiceProps {
	title: string;
	paragraph: string;
	image: string;
}

const Services = ({ infoPanel }: { infoPanel: ServiceProps[] }) => {
	return (
		<div className={classes.wrapper}>
			<h2 className={classes.title}></h2>

			<div className={classes.serviceItems}>
				{infoPanel.map((item, index) => (
					<div className={classes.serviceItemWrapper} key={index}>
						<div className={classes.serviceItem}>
							<Image
								className={classes.image}
								width={60}
								height={60}
								sizes='(max-width: 768px) 40px'
								src={item.image}
								alt=''
							/>
							<h3 className={classes.secondTitle}>
								{item.title.toUpperCase()}
							</h3>
							<p className={classes.paragraph}>{item.paragraph}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
