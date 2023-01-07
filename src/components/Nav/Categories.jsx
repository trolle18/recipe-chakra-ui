import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiSushis } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { Text } from "@chakra-ui/react";
import NavLinkBtn from './NavLinkBtn';
import IconComp from '../IconComp';


export default function Categories() {

  return (
    <>
      <NavLinkBtn variant="blackRound">
        <NavLink to={'/cuisine/italian'} >
            <IconComp as={FaPizzaSlice} />
            <Text fontSize={'.75rem'} margin={'0em'} padding={'0em'} color={'white'}>Italian</Text>
        </NavLink>
      </NavLinkBtn>

      <NavLinkBtn  variant="blackRound">
        <NavLink to={'/cuisine/american'} >
            <IconComp as={FaHamburger} />
            <Text fontSize={'.75rem'} margin={'0'} padding={'0'} color={'white'}>American</Text>
        </NavLink>
      </NavLinkBtn>   

      <NavLinkBtn variant="blackRound">
        <NavLink to={'/cuisine/thai'} >
            <IconComp as={GiNoodles} />
            <Text fontSize={'.75rem'} margin={'0'} padding={'0'} color={'white'}>Thai</Text>
        </NavLink>
      </NavLinkBtn>   
      
      <NavLinkBtn variant="blackRound">
        <NavLink to={'/cuisine/japanese'} >
            <IconComp as={GiSushis} />
            <Text fontSize={'.75rem'} margin={'0'} padding={'0'} color={'white'}>Japanese</Text>
        </NavLink>
      </NavLinkBtn>   

    </>
  )
};