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
      <Flex
      m={'0'}
      p={{base:'.5em', md: '1em'}}
      >
      <HStack
          w={'full'}
          justify={'space-between'}
          >
        <Link  to={'/'}>
          <Flex flexDir={'row'} >
          <Icon as={GiKnifeFork}  color={'black'} h={{ base: '1rem', md: '1.5rem', lg: '1.75rem'}} w={'auto'} />
          <Heading 
          as={'h1'} 
          m={'0'}
          color={'black'}
          fontSize={{ base: '1rem', md: '1.5rem', lg: '1.75rem'}}
          fontWeight={'semibold'}
          >
            Recipes
          </Heading>        
          </Flex>
        </Link>

          <HStack
          w={'full'}
          alignSelf={'center'}
          justify={'flex-end'}
          gap={{base: '1em', md: '1em'}}
          >
            <NavLinkBtn variant={{ base: 'plainRound', md: 'whiteRound'}} >
              <NavLink to={'/cuisine/italian'} aria-label="italian">
                <IconComp as={FaPizzaSlice} />
                <Text 
                fontSize={'.75rem'}
                m={'0'} 
                p={'0'}
                display={{ base: 'none', md: 'block'}}
                >
                  Italian
                </Text>
              </NavLink>
            </NavLinkBtn>

            <NavLinkBtn variant={{ base: 'plainRound', md: 'whiteRound'}} >
              <NavLink to={'/cuisine/american'} aria-label="american">
                <IconComp as={FaHamburger} />
                <Text 
                fontSize={'.75rem'}
                m={'0'} 
                p={'0'}
                display={{ base: 'none', md: 'block'}}
                >
                  American
                </Text>
              </NavLink>
            </NavLinkBtn>   

            <NavLinkBtn variant={{ base: 'plainRound', md: 'whiteRound'}} >
              <NavLink to={'/cuisine/thai'} aria-label="thai">
                <IconComp as={GiNoodles} />
                <Text 
                fontSize={'.75rem'}
                m={'0'} 
                p={'0'}
                display={{ base: 'none', md: 'block'}}
                >
                  Thai
                </Text>
              </NavLink>
            </NavLinkBtn>   
            
            <NavLinkBtn variant={{ base: 'plainRound', md: 'whiteRound'}} >
              <NavLink to={'/cuisine/japanese'} aria-label="japanese">
                <IconComp as={GiSushis} />
                <Text 
                fontSize={'.75rem'}
                m={'0'} 
                p={'0'}
                display={{ base: 'none', md: 'block'}}
                >
                Japanese
                </Text>
              </NavLink>
            </NavLinkBtn>   

            <NavLinkBtn variant={{ base: 'plainRound', md: 'whiteRound'}} >
              <NavLink to={'/favorites'} aria-label="favorites">
                <IconComp as={IoHeart} />
                <Text 
                fontSize={'.75rem'}
                m={'0'} 
                p={'0'}
                display={{ base: 'none', md: 'block'}}
                >
                  Favorites
                </Text>
              </NavLink>
            </NavLinkBtn>
          </HStack>

          <Flex maxW={'33%'}>
            <Search/>
          </Flex>
          
        </HStack>


         
        {/* <BurgerMenu/> */}
      </Flex>  
      {/* <div className="hidden" id="nav-overflow"></div>         */}
    </>
  );
};
