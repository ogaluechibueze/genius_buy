import { Box, Card, CardBody, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import Rating from './Rating';
import { IProduct } from '@src/model';
import { getSubstring } from '@src/helpers';

interface IProductCardProps{
  product: IProduct;
}

export const ProductCard = ({product}: IProductCardProps) => {
  return (
    <Card w={'xs'} pos={'relative'} m={'0.5rem'}>
    <CardBody>
     {/*<AddToWishlistButton product={product}/>*/}
     <Link  key={product.id} href={`/products/${product.slug}`} _hover={'pointer'}>
      <Box boxSize={'200px'} bg={`center / contain no-repeat url(${product.mainImage})`} mx={'auto'} borderRadius={'lg'}/>
      </Link>
      <Stack mt='6' spacing='3'>
        <Flex justify={'space-between'} align={'center'}>
        <Heading size='sm'>{getSubstring(product.name,20)}</Heading>
        <Flex color={'brand.primaryDark'} fontWeight={'bold'}>
        <Text fontSize={'small'}>₦</Text>
        <Text fontSize={'large'}>{product.price}</Text>
        </Flex>
        </Flex>
        
        <Text>
          {getSubstring(product.description,30)}
        </Text>

       <Rating rating={product.rating}/> 
       {/*<AddToCartButton product={product}/>*/}
      </Stack>
    </CardBody>
  </Card>
  );
};
