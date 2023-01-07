import { Link, NavLink } from "react-router-dom";
import Categories from "./Categories";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";
import { IoHeart } from "react-icons/io5";
import { Heading, HStack, Icon, Text, VStack, Flex } from "@chakra-ui/react";
import NavLinkBtn from "./NavLinkBtn";
import IconComp from "./IconComp";


export default function Nav() {

  return (
    <>
      <VStack
      minW={'50%'} maxW={'500px'}
      p={'.5em 2em'}
      borderRadius={'.25em'}
      gap={'1em'}
      boxShadow={'md'}
      bg={'rgba(255, 255, 255, .7)'}
      >
       
          <Link  to={'/'}>
            <Flex flexDir={'row'} >
              <Icon as={GiKnifeFork}  color={'black'} h={{ base: '2rem', md: '2.5rem', lg: '3rem'}} w={'auto'} />
              <Heading 
              as={'h1'} 
              color={'black'}
              fontSize={{ base: '2rem', md: '2.5rem', lg: '3rem'}}
              fontWeight={'semibold'}
              >
                Recipes
              </Heading>        
            </Flex>
          </Link>

        <VStack gap={'1em'}>
          <Search/>
          
          <HStack 
          w={'full'}
          justify={'space-between'}
          >
            <Categories/>
          </HStack>

          <NavLinkBtn variant={'white'} alignSelf={'flex-start'} left={'0'} color={'grey.800'}>
            <NavLink to={'/favorites'} >
              <HStack>
                <IconComp as={IoHeart} variant={'small'}/>
                <Text fontSize={'.75rem'} margin={'0'} padding={'0'}>Favorites</Text>
              </HStack>
            </NavLink>
          </NavLinkBtn>          
        </VStack>            
      </VStack>    
    </>
  );
};
