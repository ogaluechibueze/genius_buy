import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';


export const AppLogo = () => {
  return (
   
    <Link href={'/'}>
     <Flex align={'center'} paddingLeft={'2rem'}>
     <Image src={'/genius.png'} alt='' boxSize="100px"
                      bgSize="contain" paddingBottom={'0.7rem'} />
     <Box mx={'0.5rem'}>
      <Text color={'gray.800'} fontWeight={"bold"} fontSize={'20'}>
        {'   '}
    <Text as={'span'} color={'brand.primaryDark'}>BUY</Text>
    </Text>
    </Box>
    </Flex>
    </Link>
   
  );
};

