import { useEffect, useState } from "react";
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiSushis } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { Text } from "@chakra-ui/react";
import NavLinkBtn from './NavLinkBtn';
import IconComp from '../IconComp';

export default function Categories() {
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
    const { [link.icon]: LinkIcon } = Icons
    return (
      <>
       <NavLinkBtn variant="blackRound">
        <NavLink to={link.url} aria-label={link.text}>
            <IconComp as={LinkIcon} />
            <Text 
            m={'0em'}
            p={'0em'}
            fontSize={{ base:'.75rem', sm: '.75rem', md: '.75rem' }}
            // color={'white'}
            >
              {link.text}
            </Text>
        </NavLink>
      </NavLinkBtn>
      </>
    )
  }

  return (
    <>
      {data.map((link) => (
        <NavCategory link={link} key={link.id}/>
      ))}
    </>
  )
};
