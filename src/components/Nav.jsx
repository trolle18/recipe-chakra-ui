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
      gap={'1em'}
      border={'solid red 1px'}
      bg={'rgba(255, 255, 255, .2)'}
      >
        <Flex>
          <Link  to={'/'}>
            <HStack>
              <Icon as={GiKnifeFork}  color={'white'} h={{ base: '2rem', md: '2.5rem', lg: '3rem'}} w={'auto'} />
              <Heading 
              as={'h1'} 
              color={'white'}
              fontSize={{ base: '2rem', md: '2.5rem', lg: '3rem'}}
              fontWeight={'semibold'}
              >
                Recipes
              </Heading>
            </HStack>          
          </Link>
        </Flex>

        <VStack gap={'1em'}>
          <Search/>

          <HStack >
            <Categories/>
          </HStack>

          <NavLinkBtn variant={'white'} alignSelf={'flex-start'} left={'0'}>
            <NavLink to={'/favorites'} >
              <HStack>
                <IconComp as={IoHeart} variant={'small'}/>
                <Text fontSize={'.75rem'} margin={'0'} padding={'0'} >Favorites</Text>
              </HStack>
            </NavLink>
          </NavLinkBtn>          
        </VStack>            
      </VStack>    
    </>
  );
};
