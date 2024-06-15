import { ButtonProps, InputGroupProps, InputProps } from '@chakra-ui/react';

export const inputGroup: InputGroupProps = {
  w: { base: '100%', lg: '32rem' },
  size: 'sm',
};

export const SearchInputStyles: InputProps = {
  type:'text', placeholder:'search...', focusBorderColor:'brand.primaryLight', borderWidth:'1px', borderColor:'gray.400',
};