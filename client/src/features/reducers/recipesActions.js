import axios from "axios";
import { getAllRecipes } from "../reducers/recipesSlice.js";

export const getRecipes=()=>(dispatch)=>{
    // axios("https://rickandmortyapi.com/api/character")
    axios("https://apifood.herokuapp.com/recipes")
    .then(res=>dispatch(getAllRecipes(res.data)))
    .catch(e=>console.log(e))
}