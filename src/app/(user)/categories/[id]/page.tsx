
import React from 'react'
import Hero from '../../../../components/Hero/Hero'
import AllProducts from '@src/features/products'
import { CustomBreadcrumb } from '../../../../components/CustomBreadcrumb';
import { defaultBreadcrumbItems } from '@src/helpers';
import Link from 'next/link';
import { groq } from 'next-sanity';
import { ICategory, IProduct } from '@src/model';
import { client } from '@util/sanity.client';
import { Text } from '@chakra-ui/react';


const query: string = groq`
    *[_type == "product" && references($id)] {
        ...,
        "id": _id,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{ name, "image": image.asset->url, contact, address, email},
    }
`;
export const revalidate = 60; // revalidate this page every 60 seconds

type Props = {
  params: {
    id: string;
  };
};


const CategoryPage = async ({ params: { id } }: Props) => {
  const products: IProduct[] = await client.fetch(query, { id });
  return (
    <>
    <div>
     <Hero heading={products[0].category!.name}
        description={`Best and Affordable Products in  ${products[0].category!.name}`}
        imageUrl={products[0].category!.image}
        btnLabel="view all Categories"
        btnLink="/categories"
        contact={''} 
        address={''} 
        email={''}/> 
</div>

     <CustomBreadcrumb items={[...defaultBreadcrumbItems, {
       name: products[0]!.category!.name,
       link: '#'
     }]}/>
     <AllProducts products={products}/>
    </>
  );
};

export default CategoryPage;

export async function generateStaticParams() {
  const query = groq`*[_type == "category"] {
    "id": _id
  }`;

  const categories: ICategory[] = await client.fetch(query);

  return categories.map((category) => ({
    id: category.id,
  }));
}
