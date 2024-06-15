import { Box, Card, CardBody, CardHeader, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react'
import SellerHero from '@src/components/SellerHero/SellerHero';
import { AppContext } from '@src/context/AppContext'
import React, { useContext } from 'react'




const DeliveryInformation = () => {
  
  const {
    state: { checkout },
  } = useContext(AppContext);
  return (
    <Card  borderWidth="1px" borderColor="gray.200" shadow="none">
          <CardHeader>
            <Heading size="md">Seller's Information</Heading>
          </CardHeader>
          
          <CardBody>
          {checkout.map((item) => (
            <Stack key={item.category?.id} spacing="2rem">
              <Box>
                <FormLabel fontWeight={'bold'}>SHOP NAME</FormLabel>
                <Text>{item.category?.name}</Text>
              </Box>

              <Box>
                <FormLabel fontWeight={'bold'}>ADDRESS</FormLabel>
                <Text>{item.category?.address}</Text>
              </Box>

              <Box>
                <FormLabel fontWeight={'bold'}>PHONE NUMBER</FormLabel>
                <Text>{item.category?.contact}</Text>
              </Box>

              <Box>
                <FormLabel fontWeight={'bold'}>EMAIL</FormLabel>
                <Text>{item.category?.email}</Text>
              </Box>
            </Stack>
            ))}
          </CardBody>
        </Card>

  );
};

export default DeliveryInformation
