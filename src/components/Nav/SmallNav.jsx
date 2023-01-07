import { Link, NavLink } from "react-router-dom";
// import BurgerMenu from "./BurgerMenu";
// import Categories from "./Categories";
import Search from "../Search";
// import { GiKnifeFork } from "react-icons/gi";
import { IoHeart } from "react-icons/io5";
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiKnifeFork, GiNoodles, GiSushis } from 'react-icons/gi';
import { Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import NavLinkBtn from "./NavLinkBtn";
import IconComp from "../IconComp";


export default function SmallNav() {
  return (
    <>
      <nav className="slim-nav-cntr">
      <HStack
          w={'full'}
          justify={'space-between'}
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

          <HStack
          w={'full'}
          justify={'flex-end'}
          >
             <NavLinkBtn variant="whiteRound">
              <NavLink to={'/cuisine/italian'} >
                  <IconComp as={FaPizzaSlice} />
                  <Text fontSize={'.75rem'} margin={'0em'} padding={'0em'}>Italian</Text>
              </NavLink>
            </NavLinkBtn>

            <NavLinkBtn  variant="whiteRound">
              <NavLink to={'/cuisine/american'} >
                  <IconComp as={FaHamburger} />
                  <Text fontSize={'.75rem'} margin={'0'} padding={'0'}>American</Text>
              </NavLink>
            </NavLinkBtn>   

            <NavLinkBtn variant="whiteRound">
              <NavLink to={'/cuisine/thai'} >
                  <IconComp as={GiNoodles} />
                  <Text fontSize={'.75rem'} margin={'0'} padding={'0'}>Thai</Text>
              </NavLink>
            </NavLinkBtn>   
            
            <NavLinkBtn variant="whiteRound">
              <NavLink to={'/cuisine/japanese'} >
                  <IconComp as={GiSushis} />
                  <Text fontSize={'.75rem'} margin={'0'} padding={'0'}>Japanese</Text>
              </NavLink>
            </NavLinkBtn>   

            <NavLinkBtn variant={'whiteRound'} left={'0'} >
              <NavLink to={'/favorites'} >
                <IconComp as={IoHeart} />
                <Text fontSize={'.75rem'} margin={'0'} padding={'0'}>Favorites</Text>
              </NavLink>
            </NavLinkBtn>
          </HStack>
          <Search/>
        </HStack>


         
        {/* <BurgerMenu/> */}
      </nav>  
      <div className="hidden" id="nav-overflow"></div>        
    </>
  );
};
