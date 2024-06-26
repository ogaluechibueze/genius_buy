
import { Box } from '@chakra-ui/react';
import ProductDetails from '@src/features/products/ProductDetails';
import { IProduct } from '@src/model';
import { client } from '@util/sanity.client';
import { groq } from 'next-sanity';
import React from 'react';

const query: string = groq`
    *[_type == "product" && slug.current == $slug][0] {
      ...,
      "id": _id,
      "slug": slug.current,
        "mainImage": mainImage.asset->url,
        category->{
            name,
            "id": _id,
            "image": image.asset->url,
            contact,
            address,
            email
        },
        "gallery": gallery[].asset->url
    }
`;

type Props = {
  params: {
    slug: string;
  };
};

async function ProductDetailsPage({ params: { slug } }: Props) {
  const product: IProduct = await client.fetch(query, { slug });

  return (
    <Box paddingTop={'3rem'}>
      <ProductDetails product={product} />
      </Box>
  );
}

export default ProductDetailsPage;

export async function generateStaticParams() {
  const query = groq`*[_type == "product"] {
    "slug": slug.current
  }`;

  const products: IProduct[] = await client.fetch(query);

  return products.map((product) => ({
    slug: product.slug,
  }));
}
