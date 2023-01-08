import { FormControl, Input, InputGroup, Icon, useStyleConfig, IconButton } from "@chakra-ui/react";
import { IoHeart } from "react-icons/io5";

function FavBtn(props)  {
	const { variant, ...rest } = props
	const favBtnStyles = useStyleConfig('favBtnStyles', {variant});

	return (
		<IconButton __css={favBtnStyles} {...rest} />
	)
};


export default function FavoriteBtn( {recipe} ) {   

  function deleteFav(index) {
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    favorites.splice(index, 1);        
    // console.log(favorites)
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
      if(readyInMinutes) {
        return readyInMinutes
      } else {
        return ("")
      }
    }
    function checkServings() {
      if(servings) {
        return servings
      } else {
        return ("")
      }
    }
    function checkDiets() {
      if(diets) {
        return diets
      } else {
        return ("")
      }
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
      const favBtn = document.getElementById("heartIcon")
      let present = false ;

      favorites.map(val => {
        if(JSON.stringify( {...val})===JSON.stringify({...favRecipe}) )
        present = true;
      })
      if(present) {
        // favBtn.classList.remove("disabled")
        // favBtn.classList.add("active")
        deleteFav()
        // favorites.push(favRecipe)                
        console.log("The recipe was removed")
      }            
      if (!present) {                
        // favBtn.classList.add("disabled")
        // favBtn.classList.remove("active")
        localStorage.setItem('recipe', JSON.stringify(favRecipe))
        favorites.push(favRecipe)
        localStorage.setItem("favorites", JSON.stringify(favorites))                
        console.log("The recipe is saved")
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
        <InputGroup>       
          <Input id={recipe.id} type="hidden" value={recipe.id} />
          <Input id={recipe.title} type="hidden" value={recipe.title} />
          <Input id={recipe.image} type="hidden" value={recipe.image} />
          <Input id={recipe.readyInMinutes} type="hidden" value={recipe.readyInMinutes} />
          <Input id={recipe.servings} type="hidden" value={recipe.servings} />
          <Input id={recipe.diets} type="hidden" value={recipe.diets} />
        </InputGroup>

        <FavBtn 
        id="submit"
        type="submit"
        onClick={handleSubmit}
        // className="disabled"
        icon={<Icon as={IoHeart}/>}
        />    
      </FormControl>
    </>
  )
};
