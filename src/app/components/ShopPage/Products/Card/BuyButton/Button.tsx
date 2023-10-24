import React from 'react';
import Image from 'next/image';
import classes from './Button.module.scss';
const Button = () => {
  return (
    <button className={classes.btn}>
      В корзину
      <Image className={classes.image} src='/svg/shopCartIcon.svg' alt='' width={15} height={16}/>
    </button>
  );
};

export default Button;