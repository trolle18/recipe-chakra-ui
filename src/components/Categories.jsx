import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiSushis } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { Icon, Text, VStack } from "@chakra-ui/react";
import NavLinkBtn from './NavLinkBtn';


export default function Categories() {


  return (
    <>
      <NavLinkBtn variant="blackRound">
        <NavLink to={'/cuisine/italian'} >
          <VStack>
            <Icon as={FaPizzaSlice}  color='white' h='1.5em' w='1.5em'/>
            <Text color='white'>Italian</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>

      <NavLinkBtn  variant="blackRound">
        <NavLink to={'/cuisine/american'} >
          <VStack>
            <Icon as={FaHamburger}  color='white' h='1.5em' w='1.5em' />
            <Text color='white'>American</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>   

      <NavLinkBtn variant="blackRound">
        <NavLink to={'/cuisine/thai'} >
          <VStack>
            <Icon as={GiNoodles}  color='white' h='1.5em' w='1.5em'/>
            <Text color='white'>Thai</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>   
      
      <NavLinkBtn variant="blackRound">
        <NavLink to={'/cuisine/japanese'} >
          <VStack gap={0} justifyContent='center'>
            <Icon as={GiSushis}  color='white' h='auto' w='1.5rem'/>
            <Text fontSize='1rem' margin='0' padding='0' color='white'>Japanese</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>   

    </>
  )
};