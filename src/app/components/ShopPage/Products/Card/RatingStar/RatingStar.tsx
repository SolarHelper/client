import React from 'react';
import classes from './RatingStart.module.scss';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const RatingStar = () => {
  return (
    <div className={classes.ratingWrapper}>
      <div className={classes.ratingStars}>
        <Stack spacing={1}>
          <Rating name="half-rating-read" defaultValue={4} precision={1} readOnly />
        </Stack>
      </div>
    </div>
  );
};

export default RatingStar;
