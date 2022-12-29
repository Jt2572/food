import axios from "axios";
import { getAllRecipes, searchRecipes, getDiets, searchRecipeById } from "../reducers/recipesSlice.js";


export const getRecipes = () => (dispatch) => {
    // axios("https://af-w0hf.onrender.com/recipes")
    // axios("https://api-food2.herokuapp.com/recipes")
    axios("https://apifood-production-4fdf.up.railway.app/recipes")
    // axios("http://localhost:3001/recipes")
        .then(res => { dispatch(getAllRecipes(res.data)) })
        .catch(e => console.log(e))
}

export const searchRecipeName = (recipe) => (dispatch) => {
    // axios(`https://af-w0hf.onrender.com/recipes?name=${recipe}`)
    // axios(`https://api-food2.herokuapp.com/recipes?name=${recipe}`)
    axios(`https://apifood-production-4fdf.up.railway.app/recipes?name=${recipe}`)
    // axios(`http://localhost:3001/recipes?name=${recipe}`)
        .then(res => { console.log(res); dispatch(searchRecipes(res.data)) })
        .catch(e => console.log(e))
}

export const searchRecipeId = (id) => (dispatch) => {
    // axios(`https://af-w0hf.onrender.com/recipes/${id}`)
    // axios(`https://api-food2.herokuapp.com/recipes/${id}`)
    axios(`https://apifood-production-4fdf.up.railway.app/recipes/${id}`)
    // axios(`http://localhost:3001/recipes/${id}`)
        .then(res => { console.log(res.data); dispatch(searchRecipeById([res.data])) })
        .catch(e => console.log(e))
}


export const getAllDiets = () => (dispatch) => {
    axios("https://apifood-production-4fdf.up.railway.app/types")
    // axios("https://api-food2.herokuapp.com/types")
    // axios("https://af-w0hf.onrender.com/types")
    // axios("http://localhost:3001/types")
        .then(res => { dispatch(getDiets(res.data)) })
        .catch(e => console.log(e))
}

export const createRec = (payload) => {
    return async () => {
        try {
            await axios.post(
                // "https://af-w0hf.onrender.com/createrecipe",
                // "https://api-food2.herokuapp.com/createrecipe",
                "https://apifood-production-4fdf.up.railway.app/createrecipe",
                // "http://localhost:3001/createrecipe",
                payload
            );
        } catch (error) {
            console.log(error);
        }
    };
}


