import React from 'react';
import classes from './RatingStart.module.scss';

const RatingStar = () => {
	return (
		<div className={classes.ratingWrapper}>
			<div className={classes.ratingStars}>
        <span>⭐⭐⭐⭐</span>
			</div>
		</div>
	);
};

export default RatingStar;
