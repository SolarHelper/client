'use client';
import ProductCard from '@/Components/ShopPage/ProductCard/ProductCard';
import React from 'react';
import { useParams } from 'next/navigation';

const Product = () => {
	const params = useParams();
	const { id } = params;
	return <ProductCard />;
};

export default Product;
