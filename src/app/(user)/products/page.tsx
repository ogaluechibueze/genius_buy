
import { usePagination } from '@mantine/hooks';
import Hero from '@src/components/Hero/Hero';
import { AllProducts } from '@src/features/products';
import { IProduct } from '@src/model';
import { client } from '@util/sanity.client';
import { groq } from 'next-sanity';
import { useState } from 'react';

const getAllProductsQueries: string = `
    *[_type == "product"] {
        "id": _id,
        name,
        description,
        price,   
        rating,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
    }
`;

const getProductsAsync = () => {
  return client.fetch(groq`${getAllProductsQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds



export default async function ProductsPage() {
  const products: IProduct[] = await getProductsAsync();
  
  return (
    <>
      <Hero 
        heading="Best and Quality Products"
        description="Affordability, Durability, Fast and Convenient Delivery, Free Shipping and more"
        imageUrl="/product.jpg"
        btnLabel="View All Shops"
        btnLink="/categories" 
        contact={''} 
        address={''} 
        email={''} />
      <AllProducts products={products} />
    </>
  );
}
