import { configureStore } from '@reduxjs/toolkit'
import recipes from '../features/reducers/recipesSlice'

export const store = configureStore({
  reducer: {
    recipes: recipes,
  },
})