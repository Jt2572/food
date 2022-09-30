import axios from "axios";
import { getAllRecipes, searchRecipes, getDiets } from "../reducers/recipesSlice.js";


export const getRecipes = () => (dispatch) => {
    // axios("https://rickandmortyapi.com/api/character")
    // axios("https://apifood.herokuapp.com/recipes")
    axios("http://localhost:3001/recipes")
        .then(res => { dispatch(getAllRecipes(res.data)) })
        .catch(e => console.log(e))
}
export const searchRecipeName = (recipe) => (dispatch) => {
    // axios("https://rickandmortyapi.com/api/character")
    axios(`http://localhost:3001/recipes?name=${recipe}`)
        // axios("http://localhost:3001/recipes")
        .then(res => { console.log(res); dispatch(searchRecipes(res.data)) })
        .catch(e => console.log(e))
}

export const getAllDiets = () => (dispatch) => {
    // axios("https://rickandmortyapi.com/api/character")
    // axios("https://apifood.herokuapp.com/recipes")
    axios("http://localhost:3001/types")
        .then(res => { dispatch(getDiets(res.data)) })
        .catch(e => console.log(e))
}

export const createRec = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                "http://localhost:3001/createrecipe",
                payload
            );

            return dispatch({ type: "CREATE_RECIPE", payload: response });
        } catch (error) {
            console.log(error);
        }
    };
}


