import { Link, NavLink } from "react-router-dom";
import Categories from "./Categories";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";
import { IoHeart } from "react-icons/io5";
import { Heading, HStack, Icon, Text, VStack, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export default function Nav() {

  return (
    <>
      <VStack className="nav-cntr">       
        <Flex>
          <Link  to={'/'} className="nav-cntr__logo">
            <HStack>
              <Icon as={GiKnifeFork}  color='white' h='2rem' w='2rem' />
              <Heading as='h1' color='white'>Recipes</Heading>
            </HStack>          
          </Link>
        </Flex>

        <VStack className="nav-cntr__navigation">
          <Search/>
          <HStack >
            <Categories/>
          </HStack>

          <Flex className='categories'>
            <NavLink className="fav-btn cat-sub-link"  to={'/favorites'} >
              <HStack>
                <Icon as={IoHeart}  color='white' />
                <Text color='white'>Favorites</Text>
              </HStack>
            </NavLink>
          </Flex>
        </VStack>      
            
      </VStack>
    
    </>
  );
};
