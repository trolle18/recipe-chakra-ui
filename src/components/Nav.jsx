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
      <VStack >
        <Flex>
          <Link  to={'/'}>
            <HStack>
              <Icon as={GiKnifeFork}  color={'white'} h={'2rem'} w={'2rem'} />
              <Heading as={'h1'} color={'white'}>Recipes</Heading>
            </HStack>          
          </Link>
        </Flex>

        <VStack>
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
