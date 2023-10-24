import React from 'react';
import Image from 'next/image';
import classes from './ArrowButton.module.scss';
import { ArrowProps } from './ArrowButton.types';

const ArrowButton = ({ pathToImage }:ArrowProps) => {
  return (
    <button className={classes.arrow}>
      <Image src={pathToImage} alt="" width={9} height={10} />
    </button>
  );
};

export default ArrowButton;
