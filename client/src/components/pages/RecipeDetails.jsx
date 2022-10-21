import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanrecipesId } from "../../features/reducers/recipesSlice";


const RecipeDetails = () => {
    const { recipesId } = useSelector(state => state.recipes)
    const navigate=useNavigate()
    const dispatch = useDispatch();

    useEffect(()=>{
        return ()=> {
           dispatch(cleanrecipesId())             
        }
    },[dispatch])

    return (
        <div className="flex flex-col items-center">
          <div className="w-[30rem] flex flex-col items-center">
                {recipesId && recipesId.map(r => (<>
                    <div className="text-center p-8  text-xl text-yellow-900 leading-4 mb-2 font-semibold tracking-tight  ">{r.name}</div>
                    <img src={r.image} alt={r.name} className="object-cover w-full "/>
                    <div className="p-4">{r.summary}</div>
                    <button onClick={() => navigate('/home')} type="button" className="text-white text-sm bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/70 font-medium rounded-full text-md px-12 py-1.5 text-center mr-2 mb-2">home</button>
                </>
                ))}
          </div>          
        </div>
    )

}
export default RecipeDetails;