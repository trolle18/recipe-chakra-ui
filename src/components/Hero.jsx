import { Flex } from "@chakra-ui/react";
import Nav from "./Nav/Nav";

export default function Hero() {
  return (
    <>
      <Flex
      w={'full'}
      h={'full'}
      backgroundImage={ 'url(/data/heroImg.avif)' }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      >
        <Flex 
        h={'full'} 
        w={'full'}
        m={'auto'}
        p={{ base: '2em 0', sm: '2.25em 0', md: '2.5em 0' }}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'} 
        >
          <Flex m={'auto'}>
            <Nav/> 
          </Flex>
        </Flex>
      </Flex>
    </>
  )
};
