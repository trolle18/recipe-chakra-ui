import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHeart } from "react-icons/io5";
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiKnifeFork, GiNoodles, GiSushis } from 'react-icons/gi';
import { Flex, Heading, HStack, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import Search from "../Search";
import NavLinkBtn from "./NavLinkBtn";
import IconComp from "../IconComp";


export default function SmallNav() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
        const response = await fetch("/data/navData.json");
        const data = await response.json();
        setData(data);             
    }       
      getData();        
  }, []);

  const Icons = {
    "FaPizzaSlice": FaPizzaSlice,
    "FaHamburger": FaHamburger,
    "GiNoodles": GiNoodles,
    "GiSushis": GiSushis
  }

  function NavCategory({link}) {
    const [isLargerThanMD] = useMediaQuery('(min-width: 768px)')
    const { [link.icon]: LinkIcon } = Icons
    return (
      <>
        {isLargerThanMD 
        ? 
          <> 
            <NavLinkBtn variant={'whiteRound'} >
              <NavLink to={link.url} aria-label={link.text}>
                <IconComp as={LinkIcon} />
                <Text m={'0'} p={'0'} fontSize={'.75rem'}>
                  {link.text}
                </Text>
              </NavLink>
            </NavLinkBtn>
          </>
        :  
        <> 
          <NavLinkBtn variant={'plainRound'} >
            <NavLink to={link.url} aria-label={link.text}>
              <IconComp as={LinkIcon} />
            </NavLink>
          </NavLinkBtn>
        </>
        }
      </>
    )
  }
  
  return (
    <>
      <Flex m={'0'} p={{base:'.5em', md: '1em'}}
      >
      <HStack w={'full'} justify={'space-between'}>
        <Link  to={'/'}>
          <Flex flexDir={'row'} _hover={{color: 'brand.redOrange'}}>
          <Icon as={GiKnifeFork} h={{ base: '1rem', md: '1.5rem', lg: '1.75rem'}} w={'auto'} />
          <Heading as={'h1'} m={'0'} fontSize={{ base: '1rem', md: '1.5rem', lg: '1.75rem'}} fontWeight={'semibold'}>
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
            {data.map((link) => ( <NavCategory link={link} /> ))}  

            <NavLinkBtn variant={{ base: 'plainRound', md: 'whiteRound'}} >
              <NavLink to={'/favorites'} aria-label="favorites">
                <IconComp as={IoHeart} />
                <Text m={'0'} p={'0'} fontSize={'.75rem'} display={{ base: 'none', md: 'block'}}>
                  Favorites
                </Text>
              </NavLink>
            </NavLinkBtn>            
          </HStack>

          <Flex maxW={'33%'}>
            <Search/>
          </Flex>
          
        </HStack>
        
      </Flex>  
    </>
  );
};
