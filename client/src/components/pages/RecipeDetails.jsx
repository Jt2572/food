import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanrecipesId } from "../../features/reducers/recipesSlice";


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
                <div className="bg-yellow-900 w-full h-48 absolute ">''</div>

                {/* <div className="w-[30rem] flex flex-col items-center">                   
                {recipesId && recipesId.map(r => (<>
                    <div className="text-center p-8  text-xl text-yellow-900 leading-4 mb-2 font-semibold tracking-tight  ">{r.name}</div>
                    <img src={r.image} alt={r.name} className="object-cover w-full "/>
                    <div className="p-4">{r.summary}</div>
                    <button onClick={() => navigate('/home')} type="button" className="text-white text-sm bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/70 font-medium rounded-full text-md px-12 py-1.5 text-center mr-2 mb-2">home</button>
                    </>
                ))} */}
                <div className=" w-full items-center flex flex-col-reverse   sm:w-full sm:items-center sm:flex  sm:flex-col-reverse   lg:pl-8 lg:pt-16 lg:h-56 lg:flex-row  lg:items-between lg:relative  ">


                    <div className="pt-16 lg:absolute lg:pt-32 md:pt-24 ">
                        <img src={r.image} alt='recipeImage' className="md:w-96  lg:w-[25rem] " />
                    </div>

                    <div className="w-[35rem] mt-16  md:mt-16 pl-12 pr-12    lg:mt-4 lg:w-8/12 lg:ml-96  lg:pl-16 lg:pr-16 lg:h-32">
                        <div className="text-4xl relative text-center pt-0 w-full pr-4 font-dancing text-white mb-2 font-semibold tracking-tight 
                                   lg:text-4xl lg:leading-tight lg:w-full lg:pr-4 lg:pl-4  ">{r.name}</div>

                    </div>



                </div>
       
                <div className="relative w-full flex flex-col items-center pt-4  sm:relative 
                        lg:absolute  lg:w-8/12 lg:ml-96 lg:pl-0 lg:-mt-8">
                    <div className=" text-center text-base text-yellow-900 leading-12 mb-2 font-semibold tracking-tight  ">Diets</div>
                    <p className="border border-yellow-900 text-sm p-1 rounded-full px-4">{r.dietTypes}</p>
                    <div className="pt-8 text-center text-base text-yellow-900 leading-12 mb-2 font-semibold tracking-tight  ">Health Score</div>
                    <p className="border border-yellow-900 text-sm rounded-full px-1">{r.score}</p>
                </div>

                <div className="flex flex-col w-full items-center lg:mt-12 lg:pt-20 ">
                    <div className=" text-center text-base text-yellow-900 leading-12 mt-8 mb-2 font-semibold tracking-tight">Summary</div>
                    {/* <div className="w-10/12">summary summa ry summary sum sum mary summa ry summa ry summary summ arysu mmary summ ary sum mary sum mary summary su mmary summ  ary sum mary summary summary sum mary summ ary su mmary summ ary summary summary summary summary su  mma ry summ ary su mmary summ ary summ ary sum mary </div> */}
                    <div className="w-10/12">{r.summary}</div>
                    <br />
                    <div className="pb-8">
                        <button onClick={() => navigate('/home')} type="button" className="text-white text-sm bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/70 font-medium rounded-full text-md px-12 py-1.5 text-center mr-2 mb-2">home</button>
                    </div>
                </div>
            </>
            ))}
        </div>

    )



}
export default RecipeDetails;