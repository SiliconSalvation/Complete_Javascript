import {async} from 'regenerator-runtime';

export const state = {
    recipe: {},
};

export const loadRecipe = async function(id) {

    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);

        console.log(id);

        if(!id) {
            console.log(`model 13`);
            return;
        }
    
        const data = await res.json();
    
        if(!res.ok) {
          throw new Error(`${data.message} (${res.status}) model 22`);
        }
    
        console.log(`${res}, ${data} model 25`);
    
        const { recipe } = data.data;

        state.recipe = {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.soure_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients
        }
        console.log(state.recipe, 'model 39');
    } catch (err) {
        console.log("Catch model 38");
        alert(err); 
    }    
};