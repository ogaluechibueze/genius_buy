import { Box, Button, Card, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { heroCardStyles } from './style';
import Link from 'next/link';

interface IHeroProps{
heading: string;
description: string;
imageUrl: string;
btnLabel: string;
btnLink: string;
contact: string;
address: string;
email: string;
}

const Hero = ({heading, description, imageUrl, btnLabel, btnLink, contact, address, email}: IHeroProps) => {
  return (
   <Card {...heroCardStyles}>
    <Box mx={'2rem'} w={{base: '100%', lg: '50%'}}>
   <Heading size={{base: '1x', lg: '2x1'}}>{heading}</Heading>
   <Text py={'1rem'}>{description}</Text>
   <Link href={btnLink}></Link>
   <Button rounded={'full'} minW={'10rem'} bgColor={'brand.primary'} color={'white'} _hover={{bgColor: 'brand.primaryDark'}} > {btnLabel} </Button>
   <Text fontWeight={'bold'} py={'1rem'}>{contact}</Text>
   <Text fontWeight={'bold'} py={'1rem'}>{address}</Text>
   <Text fontWeight={'bold'} py={'1rem'}>{email}</Text>
    </Box>

    <Box mx={'2rem'} w={{base: '100%', lg: '50%'}} mt={'1rem'}>
    <Image src={imageUrl} alt={heading} objectFit={'cover'} maxW={'100%'} rounded={'mg'}/>
    </Box>
   </Card>
  );
};

export default Hero
