import { Flex } from "@chakra-ui/react";
import Nav from "./Nav/Nav";
// import heroImg from "../../public/data/heroImg.avif"

export default function Hero() {
  return (
    <>
      <Flex
      w={'full'}
      h={{ base: '60vh', md: '50vh', lg: '40vh'}}
      maxH={{ base: '400px', md: '500px', lg: '400px'}}
      backgroundImage={ 'url(/data/heroImg.avif)' }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      >

        <Flex h={'full'}w={'full'} bgGradient={'linear(to-r, blackAlpha.600, transparent)'} >
          <Flex m={'auto'} justify={'center'} alignItems={'center'} verticalAlign={'middle'} >
            <Nav/> 
          </Flex>
        </Flex>

      </Flex>
    </>
  );
};
