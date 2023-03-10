import { FormControl, Icon, useStyleConfig, IconButton } from "@chakra-ui/react";
import { IoHeart } from "react-icons/io5";

function FavBtn(props)  {
	const { variant, ...rest } = props
	const favBtnStyles = useStyleConfig('favBtnStyles', {variant});

	return <IconButton __css={favBtnStyles} {...rest} />
}

export default function FavoriteBtn( {recipe} ) {
  function deleteFav(index) {
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    favorites.splice(index, 1);
  }

  function addFav() {
    var favorites = JSON.parse(localStorage.getItem("favorites")); // Parse the JSON stored in all Favorites
    if(favorites == null) favorites = []; // Create array, if it doesnt excist

    var id = document.getElementById(recipe.id).value;
    var title = document.getElementById(recipe.title).value;
    var image = document.getElementById(recipe.image).value;
    var readyInMinutes = document.getElementById(recipe.readyInMinutes);
    var servings = document.getElementById(recipe.servings);
    var diets = document.getElementById(recipe.diets);

    function checkReady() {
      if(readyInMinutes) { return readyInMinutes } 
    }
    function checkServings() {
      if(servings) { return servings } 
    }
    function checkDiets() {
      if(diets) { return diets }
    }

    var favRecipe = {
      "id": id,
      "title": title,
      "image": image,
      "readyInMinutes": checkReady,
      "servings": checkServings,
      "diets": checkDiets
    };


    const toggleFav = () => {
      let present = false ;

      favorites.map((val) => {
        if(JSON.stringify( {...val})===JSON.stringify({...favRecipe}) )
        present = true;
      })
      
      if(present) {
        deleteFav()
      }
      if (!present) {
        localStorage.setItem('recipe', JSON.stringify(favRecipe))
        favorites.push(favRecipe)
        localStorage.setItem("favorites", JSON.stringify(favorites))
      }
    }
    toggleFav()
  }

  function handleSubmit(e) {
    e.preventDefault();
    addFav();
  }

  return (
    <>
      <FormControl>
          <input id={recipe.id} type="hidden" value={recipe.id} />
          <input id={recipe.title} type="hidden" value={recipe.title} />
          <input id={recipe.image} type="hidden" value={recipe.image} />
          <input id={recipe.readyInMinutes} type="hidden" value={recipe.readyInMinutes} />
          <input id={recipe.servings} type="hidden" value={recipe.servings} />
          <input id={recipe.diets} type="hidden" value={recipe.diets} />

        <FavBtn
        id="submit"
        type="submit"
        onClick={handleSubmit}
        icon={<Icon as={IoHeart}/>}
        />
      </FormControl>
    </>
  )
};
