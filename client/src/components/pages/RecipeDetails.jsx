import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanrecipesId } from "../../features/reducers/recipesSlice";
import ArrowUp from "../arrowUp/arrowUp";

const RecipeDetails = () => {
    const { recipesId } = useSelector(state => state.recipes)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {


        return () => {
            dispatch(cleanrecipesId())

        }
    }, [dispatch])


    return (
        <div>

            {recipesId && recipesId.map(r => (<>
                <div className="bg-yellow-900 w-full h-40 absolute -mt-8 " />

                <div className="  w-full items-center flex flex-col-reverse   sm:w-full sm:items-center sm:flex  sm:flex-col-reverse   
                                  md:mt-4 lg:pl-8 lg:pt-12 lg:h-56 lg:flex-row  lg:items-between lg:relative  ">

                    <img src={r.image} alt='recipeImage' className="md:w-96 md:mt-16 lg:w-[24rem] mt-16 rounded-lg" />

                    <div className="  z-10 w-[35rem] mt-8  md:mt-8 pl-12 pr-12 
                                        lg:ml-24 lg:-mt-40 lg:w-6/12 lg:h-28 lg:flex lg:items-center lg:justify-center ">
                        <div className="text-4xl relative text-center pt-0 w-full pr-4 font-dancing text-white mb-2 font-semibold tracking-tight   md:h-12  lg:text-4xl lg:leading-tight lg:w-auto lg:pr-4 lg:pl-4  ">{r.name}</div>
                    </div>

                </div>

                <div className="relative w-full flex flex-col items-center pt-4  sm:relative 
                        lg:absolute  lg:w-6/12 lg:ml-[32rem] lg:pl-0 lg:-mt-24">

                    <div className=" text-center text-base text-yellow-900 leading-12 mb-0 font-semibold tracking-tight z-20   ">Diets</div>

               
                    <div className="  p-4 h-[6.25rem] items-center  grid grid-cols-3 gap-1 border-b-[1px] border-yellow-900 z-10    lg:w-[30rem] lg:grid-cols-4  lg:grid lg:justify-items-center  lg:h-[4.5rem]">

                        {r.dietTypes.map(d => <div className="w-24"><p className="justify-self-center  border text-center bg-orange-100 text-yellow-900 w-24 leading-3 text-xs p-0 rounded-full mx-1 pb-1 px-1">{d}</p> </div>)}

                    </div>

                    <div className="pt-4 text-center text-base text-yellow-900 leading-12 mb-2 font-semibold tracking-tight  ">Health Score</div>

                    <div className="flex justify-around rounded-md items-center w-48 h-8 bg-orange-100 ">
                        <input id="steps-range" type="range" min="0" max="100" value={r.score} step="0.5"
                            className="w-28 h-1 bg-gray-200 rounded-lg appearance-none  dark:bg-yellow-800" />
                        <p className="text-xs font-bold text-yellow-900">{r.score}%</p>
                    </div>

                </div>

                <div className="flex flex-col w-full items-center lg:mt-12 lg:pt-20 ">
                    <div className=" text-center text-base text-yellow-900 leading-12 mt-8 mb-2 font-semibold tracking-tight">Summary</div>
                    <div className="w-10/12">{r.summary}</div>
                    <br />
                    <div className="pb-8">
                        {console.log(window.screenY)}
                        <button onClick={() => navigate('/home')} type="button" className="text-white text-sm bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/70 font-medium rounded-full text-md px-12 py-1.5 text-center mr-2 mb-2">home</button>
                    </div>
                </div>

                <ArrowUp />
            </>

            ))}

        </div>

    )



}
export default RecipeDetails;