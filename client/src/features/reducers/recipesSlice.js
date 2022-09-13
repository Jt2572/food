import { createSlice } from '@reduxjs/toolkit'




export const recipesSlice = createSlice({
  name: "recipes",
  initialState : {
    recipes: [],
    loading: false,
  },
  reducers: {
    getAllRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    toggleLoadingRecipes: (state) => {
      state.loading = !state.loading;
    },
  },

});

export const { getAllRecipes } = recipesSlice.actions

export default recipesSlice.reducer;
