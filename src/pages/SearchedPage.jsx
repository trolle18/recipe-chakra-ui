import { Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import SectionCntr from '../components/SectionCntr';
import SmallNav from '../components/Nav/SmallNav';
import RecipeSlide from '../components/RecipeSlide';

export default function SearchedPage() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  // Fetch searched recipes from API
  const getSearched = async (name) => {
    const check = localStorage.getItem(name);  // Checks if recipes is saved in local storage
    if (check) {
      setSearchedRecipes(JSON.parse(check));
    } else {  // If not, get from API and save to local storage   
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=10`);
      const recipes = await data.json();
      localStorage.setItem(name, JSON.stringify(recipes.results));  // Recipes are saved to local storage, as Spoonaculars API calls are limited
      setSearchedRecipes(recipes.results);
    }
  };

  useEffect(() => {
    getSearched(params.search)
  }, [params.search]);

  return (
    <>
      <SmallNav/>
      <SectionCntr>
        <Heading 
        as={'h2'} 
        fontSize={{ base: '1.5rem', md: '1.75rem'}}
        fontWeight={'medium'}
        >
          Search results for "{params?.search}"
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
             {searchedRecipes?.map((recipe) => {
                return (
                  <Flex
                  key={recipe.id}
                   h={'max-content'}
                   w={{base: '100%', md: '48%', lg: '30%', xl: '22%'}}>
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
