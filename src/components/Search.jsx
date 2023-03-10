import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';

export default function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  // Handles searches  - renders on SearchedPage
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/searched/'+input)
  };

  return (
    <form onSubmit={handleSubmit} >
      <InputGroup bg={'white'} borderRadius={'50%'}>
        <InputLeftElement  children={<Icon as={FaSearch} color={'black'} />} />
        <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </InputGroup>
    </form>
  )
};
