import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiSushis } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { Icon, Text, VStack } from "@chakra-ui/react";
import NavLinkBtn from './NavLinkBtn';


export default function Categories() {

  
  return (
    <>
      <NavLinkBtn variant="black">
        <NavLink to={'/cuisine/italian'} >
          <VStack>
            <Icon as={FaPizzaSlice}  color='white' />
            <Text color='white'>Italian</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>

      <NavLinkBtn  variant="black">
        <NavLink to={'/cuisine/american'} >
          <VStack>
            <Icon as={FaHamburger}  color='white' />
            <Text color='white'>American</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>   

      <NavLinkBtn variant="black">
        <NavLink to={'/cuisine/thai'} >
          <VStack>
            <Icon as={GiNoodles}  color='white' />
            <Text color='white'>Thai</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>   
      
      <NavLinkBtn variant="black">
        <NavLink to={'/cuisine/japanese'} >
          <VStack>
            <Icon as={GiSushis}  color='white' />
            <Text color='white'>Japanese</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>   

    </>
  )
};