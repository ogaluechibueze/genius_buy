
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { CartSectionStyles, DesktopNavStyles, LogoSectionStyles, navbarStyles } from './Style';
import { AppLogo } from '../AppLogo';
import { navItems } from '@src/helpers';
import { Search } from '../Search/Search';
import { Wishlist } from '../Wishlist/Wishlist';
import { Cart } from '../Cart/Cart';
import { Image} from '@chakra-ui/react';


export const DesktopNav = () => {
  return (
   <Flex {...DesktopNavStyles}>
   <Stack {...LogoSectionStyles} color={'brand.primary'} fontWeight={'bold'}>
    <Box> <AppLogo/></Box>
    
    {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <Link href={navItem.href}>{navItem.label}</Link>
          </Box>
        ))}
  
    <Box>
      <Search/>
      </Box>
   </Stack>

   <Stack {...CartSectionStyles}>
   { /*<Box> <Wishlist /> </Box>*/}
    {/*<Box> <Cart /> </Box>*/}
   </Stack>
   </Flex>
  );
};
