import React from 'react';
import Image from 'next/image';
import classes from './Button.module.scss';
import { ButtonProps } from './types';

const Button = ({children,width, height, image, propsClass}:ButtonProps) => {
  
  return (
    <button className={classes[propsClass]}>
      {children}
      <Image 
        className={classes.image} 
        src={image} 
        width={width} 
        height={height}
        alt=''
      />
    </button>
  );
};

export default Button;