import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SmallNav from '../components/Nav/SmallNav';
import RecipeSlide from '../components/RecipeSlide';
import { Flex, Heading } from '@chakra-ui/react';
import SectionCntr from '../components/SectionCntr';


export default function CuisinePage() {
  const [cuisines, setCuisines] = useState([]);
  let params = useParams();

  // Fetch cuisine from API
  const getCuisine = async (name) => {
    const check = localStorage.getItem(name);  // Checks if recipes is saved in local storage
    if (check) {
      setCuisines(JSON.parse(check));
    } else {  // If not, get from API and save to local storage   
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`);
      const recipes = await data.json();
      localStorage.setItem(name, JSON.stringify(recipes.results));  // Recipes are saved to local storage, as Spoonaculars API calls are limited
      setCuisines(recipes.results);
    }
  };
  
  useEffect(() => {
    getCuisine(params.type)
  }, [params.type]);


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
          {params.type}
        </Heading>

        
          <motion.Flex
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
              {cuisines.map((recipe) => {
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
            
          </motion.Flex>
             
      </SectionCntr>
    </>
  )
}