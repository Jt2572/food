import { createSlice } from '@reduxjs/toolkit'



export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    filterRecipes: [],
    recipesId: [],
    diets: [],
    loading: false,
  },
  reducers: {
    getAllRecipes: (state, action) => {
      state.recipes = action.payload;
      state.filterRecipes = action.payload
      // console.log('action.payload ',action.payload)
    },
    searchRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    searchRecipeById: (state, action) => {
      console.log(action.payload)
      state.recipesId = action.payload;
    },
    getDiets: (state, action) => {
      state.diets = action.payload;
    },
    toggleLoadingRecipes: (state) => {
      state.loading = !state.loading;
    },

    filterTypes: (state, action) => {
      var resp = []
      var bkRecipes = state.filterRecipes
      state.recipes = state.filterRecipes
      if (action.payload === "all") {
        resp = state.filterRecipes
      } else {
        for (let i = 0; i < state.recipes.length; i++) {
          bkRecipes[i].dietTypes.filter(d => d === action.payload ? resp.push({
            name: state.recipes[i].name,
            image: state.recipes[i].image,
            score: state.recipes[i].score,
            dietTypes: state.recipes[i].dietTypes.map(d => d),
          }) : {})
        }
      }
      state.recipes = resp
    },

    filterByName: (state, action) => {
      if (action.payload === "asc") {
        state.recipes.sort((a, b) => {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        })
      } else {
        state.recipes.sort((a, b) => {
          return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
        });
      }
    },

    filterByOrder: (state, action) => {
      if (action.payload === "lh") {
        console.log(action.payload)
        state.filterRecipes.sort((a, b) => b.score - a.score)
        state.recipes.sort((a, b) => b.score - a.score);
      } else {
        console.log(action.payload)
        state.filterRecipes.sort((a, b) => a.score - b.score)
        state.recipes.sort((a, b) => a.score - b.score);
        // state.recipes.sort((a, b) => a.score - b.score);
      }
    }

  
},

});

export const { getAllRecipes, searchRecipes, getDiets, toggleLoadingRecipes, filterTypes, filterByName, filterByOrder, searchRecipeById } = recipesSlice.actions

export default recipesSlice.reducer;
