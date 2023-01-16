import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SmallNav from '../components/Nav/SmallNav';
import SectionCntr from '../components/SectionCntr';
import { Flex, Heading } from '@chakra-ui/react';
import RecipeSlide from '../components/RecipeSlide';


export default function FavoritesPage() {
  let [favorites, setFavorites] = useState([]);
  let params = useParams();

    // Fetch favorites from local storage
  const getFavorites = async () => {
    const check = localStorage.getItem("favorites");
    setFavorites(JSON.parse(check));
  };

  useEffect(() => {
    getFavorites();
  }, [params.name]);


  return (
    <>
      <SmallNav/>
      <SectionCntr>
        <Heading
        as={'h1'}
        fontSize={{ base: '2rem', md: '2rem'}}
        fontWeight={'medium'}
        textTransform={'capitalize'}
        >
          Favorites
        </Heading>

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
      </SectionCntr>
    </>
  )
};
