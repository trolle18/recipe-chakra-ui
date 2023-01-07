import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SmallNav from '../components/Nav/SmallNav';
import SectionCntr from '../components/SectionCntr';
import { Flex, Heading } from '@chakra-ui/react';
import RecipeSlide from '../components/RecipeSlide';
// import { FaSearch } from 'react-icons/fa';


export default function FavoritesPage() {  
  let [favorites, setFavorites] = useState([]);
  let params = useParams();
  if(favorites == null) favorites = []; // Create array, if it doesnt excist  
  // const [searchValue, setSearchValue] = useState("");

    // Fetch cuisine from API
  const getFavorites = async () => {
    const check = localStorage.getItem("favorites");  // Checks if recipes is saved in local storage
    setFavorites(JSON.parse(check));
    // console.log(favorites)
  };
  
  useEffect(() => {
    getFavorites();
  }, [params.name]);


  return (
    <>
      <SmallNav/>
      <SectionCntr>
        <section className=" page-section">
          <Heading
          as={'h1'} 
          fontSize={{ base: '2rem', md: '2rem'}}
          fontWeight={'medium'}
          textTransform={'capitalize'}
          >
            Favorites
          </Heading>     
{/*         
          <Flex
          w={{base: 'full', md: '48%'}}
          m={'1em 0'}
          >
            <FormControl>
              <InputGroup bg={'white'} borderRadius={'50%'}>
                <InputLeftElement  children={<Icon as={FaSearch} color={'black'} />} />
                <Input placeholder='Search favorites' type="text" onChange={(e) => setSearchValue(e.target.value.toLowerCase())}  />
              </InputGroup>
            </FormControl>
          </Flex> */}

          <motion.div
          animate={{opacity: 1}}
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
          >
            <Flex
            w={'full'}
            flexWrap={'wrap'}
            flexDir={'row'}    
            justifyContent={'space-between'}
            rowGap={'2em'}
            >
              {favorites?.map((recipe) => {
              // .filter((recipe) => recipe.title.toLowerCase().startsWith(searchValue) || recipe.diets.toLowerCase().startsWith(searchValue))
                return (
                  <Flex
                  key={recipe.id}
                  h={'max-content'}
                  w={{base: '100%', md: '48%', lg: '30%', xl: '22%'}}
                  >
                    <RecipeSlide recipe={recipe}/>
                  </Flex>
                )
            })}
            </Flex>    
          </motion.div>

        </section>
      </SectionCntr>   
    </>
  )
}