'use client';
import { Box, SlideOptions } from '@chakra-ui/react';
import { ProductCard } from '@src/components/ProductCard';
import { SectionHeading } from '@src/components/SectionHeading';
import { SwiperNavButtons } from '@src/components/SwiperNavButtons';
import { IProduct } from '@src/model';
import { title } from 'process';
import React, { CSSProperties } from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';


const SliderStyles: CSSProperties ={
boxSizing:'border-box',
maxWidth: '350px'
};

interface FeaturedProductProps{
  title: string
  products: IProduct[];
}

const FeaturedProducts = ({title, products}: FeaturedProductProps) => {
  const SliderSettings: SwiperOptions ={
    modules:[Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView:'auto',
    speed: 1000,
    autoplay:{
      delay: 5000,
      disableOnInteraction:false
    }
  }
  return (
    <Box w={{base:'100%', lg:'90%', mx:'auto'}} p={'2rem'}>
    <SectionHeading title={title}/>
     <Swiper {...SliderSettings} style={{width:'100%', height:'100%'}}>
      {products?.map(products => <SwiperSlide key={products.id} style={SliderStyles}>
      <ProductCard product={products}/> 
      </SwiperSlide>)}
      <SwiperNavButtons/>
     </Swiper>
    </Box>
  );
};

export default FeaturedProducts
