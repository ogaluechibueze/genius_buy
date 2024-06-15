import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const navbarStyles: BoxProps = {
    pos:"fixed",  w:"100%", bgColor:"white", mb:"1rem", zIndex:10
};

export const DesktopNavStyles: FlexProps ={
    justify: 'space-between',
    align: 'center',
    px: '2rem',
    py: '1rem',
    borderBottomWidth: '1px',
    borderColor: 'gray.100',
    display: {base:'none', lg:'flex'},
}

export const LogoSectionStyles: StackProps ={
    direction:'row', gap:6, flex:1 , alignItems:'center',
};

export const CartSectionStyles: StackProps ={
    direction:'row', spacing:2,
};

export const mobileNavContainerStyles: FlexProps={
justify: 'space-between',
align: 'center',
px:'2rem',
py: '1rem',
borderBottom: '1px',
borderColor: 'gray.200',
display: {base:'flex', lg:'none'},
};

export const MobileSearchRapper: BoxProps={
    px:'2rem', py:'0.5rem', mb:'1rem', display: {base:'block', lg:'none'}
}