import { Card, CardHeader, Heading, CardBody, Stack, Flex, Input, Button, Divider, RadioGroup, Radio, Box, Text } from '@chakra-ui/react';
import { AppContext } from '@src/context/AppContext';
import { calculateItemsTotal, formatNumber } from '@src/helpers';
import React, { useEffect, useState,useContext } from 'react'

const PaymentDetails = () => {

    const [subTotal, setSubTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  const {
    state: { checkout },
  } = useContext(AppContext);

  useEffect(() => {
    const subTotal = calculateItemsTotal(checkout);
    const tax = 0.1 * subTotal;
    setSubTotal(subTotal);
    setTax(tax);
  }, [checkout]);

  return (

        <Card borderWidth="1px" borderColor="gray.200" shadow="none" p="2rem">
          <CardHeader>
            <Heading size={'md'}>Payment Details</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing={'2rem'}>
             

              <Box>
                <Heading size={'xs'} my={'1rem'}>
                  Payment Option
                </Heading>
                <RadioGroup>
                  <Stack>
                    <Text>Contact The Seller For The Best Option Of Payment</Text>
                  </Stack>
                </RadioGroup>
              </Box>
            </Stack>
            <Divider mt={'1rem'} />

            <Box>
              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Sub Total</Text>
                <Text fontWeight="bold">₦{formatNumber(subTotal)}</Text>
              </Flex>

              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Tax(10%)</Text>
                <Text fontWeight="bold">₦{formatNumber(tax)}</Text>
              </Flex>

              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Coupon Discount</Text>
                <Text fontWeight="bold">-₦{formatNumber(tax)}</Text>
              </Flex>

              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Shipping Cost</Text>
                <Text fontWeight="bold">-₦{formatNumber(0)}</Text>
              </Flex>
              <Divider />
              <Flex justify="space-between" align="center" my="1rem">
                <Text fontWeight="bold">Total</Text>
                <Text fontWeight="bold">₦{formatNumber(subTotal)}</Text>
              </Flex>
            </Box>

            <Button
              bgColor="brand.primary"
              color="white"
              w="100%"
              rounded="full"
              _hover={{
                bgColor: 'brand.primaryDark',
              }}
              _active={{
                bgColor: 'brand.primaryDark',
              }}
            >
              Pay ₦{formatNumber(subTotal)}
            </Button>
          </CardBody>
        </Card>
    

  )
}

export default PaymentDetails
