'use client';
import React from 'react';
import { useRouter } from 'next/router';
type Props = {
  params: {
    id: string;
  };
};
const Product = ({ params: { id } }: Props) => {
  
  return <div>{id}</div>;
};

export default Product;
