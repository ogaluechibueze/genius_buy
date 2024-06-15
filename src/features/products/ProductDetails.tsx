'use client'
import { Box, Button, Divider, Grid, GridItem, Heading,Link as ChakraLink, Image, Stack, Text, Flex } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { IProduct } from '@src/model';
import Rating from '@src/components/Rating';
import { Quantity } from '@src/components/Quantity';
import AddToCartButton from '@src/components/AddToCartButton';
import { CustomBreadcrumb } from '@src/components/CustomBreadcrumb';
import { defaultBreadcrumbItems, getSubstring } from '@src/helpers';
import Link from 'next/link';
import { AppContext } from '@src/context/AppContext';


interface IProductDetailsProps{
    product: IProduct;
};



 const ProductDetails = ({product}: IProductDetailsProps) => {
  const {isAdded, resetItems, addItem} = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
   
  return (
    <>
    <CustomBreadcrumb items = {[...defaultBreadcrumbItems,
      {
        name: product.category!.name,
        link: '/categories/${product.category?.id}',
      },
      {
        name: getSubstring(product.name,20),
        link: `/products/${product.slug}`,
      }
    ]}/> 
    <Grid templateColumns={{base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)'}}
    w={{base: '100%', lg: '90%'}}
    mx={'auto'} p={'2rem'} gap={'20'}>

    <GridItem p={'1rem'}>
    <Image src={product.mainImage} alt={product.name} mx={'auto'}/>
    </GridItem>

    <GridItem p={'1rem'}>

    <Heading>{product.name}</Heading>

    <Text>{getSubstring(product.description,500)}</Text>

    <Rating rating={product.rating}/>

    <Flex color={'brand.primaryDark'} fontWeight={'bold'} fontSize={'large'}>
        <Text fontSize={'small'}>₦</Text>
        <Text fontSize={'large'}>{product.price}</Text>
        </Flex>

    <Divider my={'1rem'}/>
    <Quantity 
     setQuantity={(_valueAsString, valueAsNumber) =>
      setQuantity(valueAsNumber)
    }
    disabled={isAdded('cart', product.id)} />
    <Divider my={'1rem'}/>

    <Box>
    <Link href="/checkout">
              <Button
                variant="outline"
                bgColor="brand.primary"
                color="white"
                borderRadius="50px"
                size="sm"
                w="160px"
                mr="1rem"
                my="0.5rem"
                _hover={{ bgColor: 'none' }}
               
                onClick={() => {
                  resetItems('checkout');
                  addItem('checkout', product, quantity);
                }}
              >
                Buy Now
              </Button>
            </Link>
            {/*<AddToCartButton product={product} count={quantity}/>*/}
           </Box>

    <Stack py="2rem">
            {/*<Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Free Delivery</Text>
              <ChakraLink textDecor="underline" color="gray.500">
                Enter Your postal Code for Delivery Availability
              </ChakraLink>
            </Box>*/}

            <Box borderWidth={1} borderColor="gray.100" p="1rem">
              <Text fontWeight="bold">Return Delivery</Text>
              <Text color="gray.500">
                Free 7 Days Delivery Returns After Purchase
                 {/*<ChakraLink textDecor="underline">Details</ChakraLink>*/} 
              </Text>
            </Box>
          </Stack>
    
    </GridItem>
    </Grid>  
    </>
  );
};

export default ProductDetails
