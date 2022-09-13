import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../features/reducers/recipesActions";

function Recipes() {
  const dispatch = useDispatch()
  const { recipes } = useSelector(state => state.recipes)

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])
  console.log(recipes)
  return (
    <div className="flex justify-center">
      {recipes && recipes.map((elem, i) => {
        return (
          <div key={i}>
            <div className="w-56 h-68  shadow-lg shadow-current">
              <img src={elem.image} alt="..." />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{elem.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{elem.diet.map(d=>d)}</p>
                <a href="/home" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Details
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        )
      })
      }

    </div>

  )
}
export default Recipes;