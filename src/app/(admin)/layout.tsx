'use client'
import 'swiper/swiper-bundle.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <title>GENIUS <br/> BUY</title>
      <meta title='description' content='buy anything online'></meta>
      <link rel='icon' type='image/png' sizes='32x32' href='shopping_cart.png'/>
      </head>
      <body>
        {children}
        </body>
    </html>
  );
}
