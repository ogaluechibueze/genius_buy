import { IconButton, Box, IconButtonProps } from '@chakra-ui/react';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

const btnStyles: IconButtonProps = {
  rounded:'full',
  borderColor:'brand.primary',
  borderWidth: '1px',
  color:'brand.primaryDark',
  bgColor:'white',
  mx:'1',
  'aria-label': '',
};


export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Box m="1.5rem">
      <IconButton
      {...btnStyles}
        icon={<FaChevronLeft />}
        aria-label="Prev"
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        {...btnStyles}
        icon={<FaChevronRight />}
        aria-label="Next"
        onClick={() => swiper.slideNext()}
      />
    </Box>
  );
};
