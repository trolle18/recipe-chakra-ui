import { Button, Flex, Image, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Nav from "./Nav";


export default function Hero() {
  return (
    <>
      <Flex
        w={'full'}
        h={'50vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1653233797663-376044b096d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>

        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>

          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Nav/>
            {/* <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Show me more
              </Button>              
            </Stack>             */}
          </Stack>

        </VStack>
      </Flex>
    </>
  );
};
