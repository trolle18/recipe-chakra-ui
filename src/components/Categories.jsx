import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiSushis } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { Text, VStack } from "@chakra-ui/react";
import NavLinkBtn from './NavLinkBtn';
import IconComp from './IconComp';


export default function Categories() {

  return (
    <>
      <NavLinkBtn variant="blackRound">
        <NavLink to={'/cuisine/italian'} >
          <VStack>
            <IconComp as={FaPizzaSlice} />
            <Text fontSize={'.75rem'} margin={'0'} padding={'0'} color={'white'}>Italian</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>

      <NavLinkBtn  variant="blackRound">
        <NavLink to={'/cuisine/american'} >
          <VStack>
            <IconComp as={FaHamburger} />
            <Text fontSize={'.75rem'} margin={'0'} padding={'0'} color={'white'}>American</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>   

      <NavLinkBtn variant="blackRound">
        <NavLink to={'/cuisine/thai'} >
          <VStack>
            <IconComp as={GiNoodles} />
            <Text fontSize={'.75rem'} margin={'0'} padding={'0'} color={'white'}>Thai</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>   
      
      <NavLinkBtn variant="blackRound">
        <NavLink to={'/cuisine/japanese'} >
          <VStack gap={0} justifyContent={'center'}>
            <IconComp as={GiSushis} />
            <Text fontSize={'.75rem'} margin={'0'} padding={'0'} color={'white'}>Japanese</Text>
          </VStack>
        </NavLink>
      </NavLinkBtn>   

    </>
  )
};