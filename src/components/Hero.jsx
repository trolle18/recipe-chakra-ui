import { Flex } from "@chakra-ui/react";
import Nav from "./Nav";


export default function Hero() {
  return (
    <>
      <Flex
        w={'full'}
        h={{ base: '60vh', md: '50vh', lg: '40vh'}}
        maxH={{ base: '400px', md: '500px', lg: '600px'}}
        // maxH={'500px'}    
        backgroundImage={
          'url(https://images.unsplash.com/photo-1653233797663-376044b096d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>

        <Flex
          // border={'solid red 1px'}
          h={'full'}
          w={'full'}
          // px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          >
            <Flex
            // border={'solid red 1px'}
            m={'auto'}
            justify={'center'}
            alignItems={'center'}
            verticalAlign={'middle'}
            >
            <Nav/> 
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
