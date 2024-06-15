'use client'
import 'swiper/swiper-bundle.css';
import { Box, ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import {theme} from '../theme';
import {Navbar} from '@src/components/Navbar/NavBar';
import { Footer } from '@src/components/Footer';
import AppContextProvider from '@src/context/AppContext';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        
      <title>GENIUS BUY</title>
      <meta title='description' content='buy anything online'></meta>
      <link rel='icon' type='image/png' sizes='32x32' href='shopping_cart.png'/>
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
            < Navbar/>
            {children}
            <Footer/>
            </AppContextProvider>
        </ChakraProvider>
        </CacheProvider>
        </body>
    </html>
  );
}
