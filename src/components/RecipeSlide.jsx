import { Link } from "react-router-dom";
// import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { IoTimerOutline } from "react-icons/io5";
import FavoriteBtn from "./FavoriteBtn";
import { Container, Flex, Heading, VStack } from "@chakra-ui/react";


export default function RecipeSlide( {recipe} ) {

  function CheckReady()  {
    const readyInMin = recipe.readyInMinutes;
    if (readyInMin) {
      return ( <p><IoTimerOutline/> {recipe.readyInMinutes} min</p> )
    }
  }
  function CheckServings()  {
    const servings = recipe.servings;
    if (servings) {
      return ( <p>Servings {recipe.servings}</p> )
    }
  }
  function CheckDiets()  {
    const diets = recipe.diets;
    if (diets) {
      return ( <p>{recipe.diets}</p> )
    }
  }


  return (
    <>
      <Container>
        <Flex 
        flexDir={'column'}
        >    
          <div className="img-cntr">
            <img src={recipe.image} alt={recipe.title}/>
          </div>             
          <FavoriteBtn recipe={recipe}/>
          <Link to={'/recipe/'+ recipe.id}>      
            <Flex flexDir={'column'}
            >
              <Heading as={'h4'} fontWeight={'medium'}>{recipe.title}</Heading>
              <Flex flexDir={'column'} >
                {CheckReady()}
                {CheckServings()}
                {CheckDiets()}
              </Flex>                           
            </Flex>
          </Link> 

        </Flex>              
      </Container>
    </>
  )
};
