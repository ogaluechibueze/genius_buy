import { Box, Card, CardBody, CardHeader, Flex, Heading, Stack, Image, Text } from '@chakra-ui/react'
import { AppContext } from '@src/context/AppContext'
import { formatNumber, getSubstring } from '@src/helpers'
import { useState, useContext } from 'react';


const ReviewItems = () => {
    const [subTotal, setSubTotal] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);

    const {
        state: { checkout },
      } = useContext(AppContext);
  return (
    <Card borderWidth="1px" borderColor="gray.200" shadow="none">
          <CardHeader>
            <Heading size="md">Review Items</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              {checkout.map((item) => (
                <Flex key={item.id} align="center" justify="space-between">
                  <Flex align="center">
                    <Image
                      src={item.mainImage} alt=''
                      boxSize="100px"
                      bgSize="contain"
                    />
                    <Box mx="1rem">
                      <Text
                        fontWeight="bold"
                        fontSize={{ base: 'sm', lg: 'lg' }}
                        maxW="500px"
                      >
                        {item.name}
                      </Text>
                      <Text color="gray.500">
                        {getSubstring(item.description, 50)}
                      </Text>
                    </Box>
                  </Flex>
                  <Box textAlign="right">
                    <Text fontWeight="bold" fontSize={{ base: 'md', lg: 'lg' }}>
                    ₦{formatNumber(item.price)}
                    </Text>
                    <Text fontSize={{ base: 'sm', lg: 'md' }}>
                      Quantity: {item.count}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Stack>
          </CardBody>
        </Card>
  );
};
export default ReviewItems