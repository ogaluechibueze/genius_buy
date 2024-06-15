import { Flex,Text } from '@chakra-ui/react';
import { colors } from '@src/app/theme';
import { IRating } from '@src/model';
import { color } from 'framer-motion';
import React from 'react';
import ReactStar from 'react-stars';

interface IRatingProps{
  rating: IRating;
}

const Rating = ({rating}: IRatingProps) => {
  return (
   <Flex>
   <ReactStar count={5} value={rating.rate} half={true} size={18} color2={colors.brand.primary} edit={false}/>
   <Text>({rating.count})</Text>
   </Flex>
  )
}

export default Rating
