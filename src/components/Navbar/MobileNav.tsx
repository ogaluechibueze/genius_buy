import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { AppLogo } from '../AppLogo';
import { Search } from '../Search/Search';

import React from 'react'
import { MobileSearchRapper, mobileNavContainerStyles } from './Style';
import { NavMenu } from './NavMenu';
import { Wishlist } from '../Wishlist/Wishlist';
import { Cart } from '../Cart/Cart';

export const MobileNav = () => {
  return (
  <>
    <Flex {...mobileNavContainerStyles}>
      <Box>
        <NavMenu/>
        </Box>
      <AppLogo/>
      <Stack direction={'row'} spacing={1}>
        
         {/* <Wishlist />*/}
        
          {/*<Cart />*/}
        
      </Stack>
    </Flex>
    <Box {...MobileSearchRapper}>
      <Search/>
    </Box>
  </>
  );
};

