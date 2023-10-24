import React from 'react';
import Image from 'next/image';
import classes from './RatingStart.module.scss';

const RatingStar = () => {
  return (
    <div className={classes.ratingWrapper}>
      <div className={classes.ratingStars}>
        <Image className={classes.star} src="/svg/star.svg" alt="" width={18} height={17} />
      </div>
    </div>
  );
};

export default RatingStar;
