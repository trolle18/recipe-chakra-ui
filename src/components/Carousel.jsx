import { Splide, SplideSlide } from '@splidejs/react-splide';
import RecipeSlide from "./RecipeSlide";


export default function Carousel({recipes}) {
  return (
    <>
      <Splide options={{
        perPage: 3,
        gap:".5em",
        width: "100%",
        breakpoints: {
          400: {
            perPage: 1,
          },
          600: {
            perPage: 2,
          },
          992: {
            perPage: 3,
          },
          1440: {
            perPage: 4,
          },                
        },            
        arrows: false,
        pagination: true,
        drag: true,
        rewind: true,
      }}>
        {recipes.map((recipe) => {
          return (
            <SplideSlide key={recipe.id} style={{marginBottom:'2em'}}>
              <RecipeSlide recipe={recipe}/>
            </SplideSlide>
          );
        })}

      </Splide>
    </>
  )
};
