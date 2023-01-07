import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";


export default function Popular() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getPopular();
  },[]);

  // Fetch popular recipes from API
  const getPopular = async() => {
    const check = localStorage.getItem('popular');  // Checks if recipes is saved in local storage
    if (check) {
      setRecipes(JSON.parse(check));
    } else {  // If not, get from API and save to local storage    
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));  // Recipes are saved to local storage, as Spoonaculars API calls are limited
      setRecipes(data.recipes);
    }
  }

  return (
    <>
      <Heading 
      as={'h3'} 
      fontSize={{ base: '1.5rem', md: '2rem'}}
      fontWeight={'medium'}
      >
        Popular
      </Heading>
      <Carousel recipes={recipes}/>
    </>
  )
};
