import { BoxProps, ButtonProps, FlexProps, HeadingProps, TextProps } from "@chakra-ui/react";


export const BannerStyles: FlexProps = {
    justify:'center', align:'center', gap:2, 
    flexDir:{base: 'column', lg: 'row' }, 
    w:{base: '100%', lg: '90%'}, mx:'auto', p:'2rem',
};

export const BannerHeadingStyles: HeadingProps = {
    size:{ base: 'xl', lg: '3xl' },
            lineHeight:"4rem",
            color:"brand.primary",
};

export const BannerTextStyles: TextProps = {
    fontSize:{ base: 'md', lg: 'lg' }, py:"1rem", maxW:"600px",
};

export const BannerBtnStyles: ButtonProps = {
    rounded: 'full', minW: '10rem', bgColor: 'brand.primary', color: 'white',
    _hover:{bgColor: 'brand.primaryDark'}
};

export const BannerImageBoxStyles: BoxProps = {
    my: '2rem', w:{base: '300px', lg: '600px'},
    h:{base: '300px', lg: '500px'},
    bg:'center / cover no-repeat url(mockup.svg)',
};