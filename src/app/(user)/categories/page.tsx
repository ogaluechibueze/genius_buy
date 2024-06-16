
import Hero from '@src/components/Hero/Hero';
import AllCategories from '@src/features/categories';
import { ICategory } from '@src/model';
import { client } from '@util/sanity.client';
import { groq } from 'next-sanity';

const getAllCategoriesQueries = `
    *[_type == "category"] {
        "id": _id,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        contact,
        address,
        email,
    }
`;

const getCategoriesAsync = () => {
  return client.fetch(groq`${getAllCategoriesQueries}`);
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function AllCategoriesPage() {
  const categories: ICategory[] = await getCategoriesAsync();

  return (
    <>
      <Hero
        heading="Our Top Shops"
        description="We've got all your favorite Shops"
        imageUrl="/store.png"
        btnLabel="View All Products"
        btnLink="/products"
        contact={''} 
        address={''}
        email={''}/>
      <AllCategories categories={categories} />
    </>
  );
}
