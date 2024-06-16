'use client';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react'
import { BannerHeadingStyles, BannerStyles, BannerTextStyles } from './style';
import Link from 'next/link';

export const Banner = () => {
  return (
    <Flex {...BannerStyles}>

    <Box w={{ base: '100%', lg: '50%' }}>
    <Heading {...BannerHeadingStyles}>
            Online Shopping <br /> Made Easy
          </Heading>
          <Text {...BannerTextStyles}>
           Genius Buy connects you to all Top Shops around the world with Quality 
           Products and Best Affordable Prices. All sellers are reliable and trusted
          </Text>
          <Link href={'/products'}>
          <Button rounded={'full'} minW={'10rem'} bgColor={'brand.primary'} color={'white'} _hover={{bgColor: 'brand.primaryDark'}}>
            Shop Now
          </Button>
          </Link>
        </Box>
    <Box w={{ base: '100%', lg: '50%' }}>
    <Box mx={'2rem'} w={{base: '300px', lg: '600px'}}
    h={{base: '300px', lg: '500px'}}
    bg={'center / cover no-repeat url(shop2.jpg)'}/>
    </Box>
    </Flex>
  );
};

