import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
import { IoTimerOutline } from "react-icons/io5";
import FavoriteBtn from "./FavoriteBtn";
import { Container, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import Card from "./Card";


export default function RecipeSlide( {recipe} ) {

  function CheckReady()  {
    const readyInMin = recipe.readyInMinutes;
    if (readyInMin) {
      return ( <Text m={'0'}><Icon as={IoTimerOutline}/> {recipe.readyInMinutes} min</Text> )
    }
  }
  function CheckServings()  {
    const servings = recipe.servings;
    if (servings) {
      return ( <Text m={'0'}>Servings: {recipe.servings}</Text> )
    }
  }
  function CheckDiets()  {
    const diets = recipe.diets;
    if (diets) {
      return ( <Text m={'0'} fontSize={'1rem'} color={'grey.400'}>{recipe.diets}</Text> )
    }
  }

  return (
    <>
      <Container h={'full'} p={'.5em'}>
        <Link to={'/recipe/'+ recipe.id}>
        <Card>
          <Flex
          w={'full'}
          h={'140px'}
          backgroundImage={`url(${recipe.image})`}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
          >
            <Flex w={'max-content'} h={'max-content'} marginLeft={'auto'} p={'.5em'} zIndex={'90'}  >
              <FavoriteBtn recipe={recipe}/>
            </Flex>            
          </Flex>             
          
          <Flex p={'.5em'} flexDir={'column'} gap={'.25em'}>
            <Flex w={'full'}>
              <Heading as={'h4'} fontWeight={'medium'} fontSize={'1.25rem'}>
                {recipe.title}
              </Heading>
            </Flex>              
            <Flex flexDir={'column'} justify={'space-between'} gap={'.5em'}>
              <Flex flexDir={{ base: 'column', md: 'row'}} justify={'space-between'}>
                {CheckReady()}
                {CheckServings()}
              </Flex>                
              {CheckDiets()}
            </Flex>                           
          </Flex>
         
        </Card>
        </Link>             
      </Container>
    </>
  )
};
