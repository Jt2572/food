import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets } from "../../features/reducers/recipesActions";
import { filterTypes, filterByName, filterByOrder } from "../../features/reducers/recipesSlice";
import SearchBar from "../searchbar/SearchBar";


function Filters() {

  const [screenWidth, setScreenWidth] = useState(1240)
  const diets = useSelector(state => state.recipes.diets)
  const [, setPage] = useState(1)

  window.addEventListener("resize", function () {
    document.getElementById("demo")
    setScreenWidth(window.innerWidth)
  })
  console.log(screenWidth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllDiets())

  }, [dispatch])

 
  const handleFilterDiets = (e) => {
    e.preventDefault();
    dispatch(filterTypes(e.target.value));    
    setPage(1);
  };

  const handlefilterName = (e) => {
    e.preventDefault();
    dispatch(filterByName(e.target.value));    
    setPage(1);
  };
  
  const handlefilterOrder = (e) => {
    e.preventDefault();
    dispatch(filterByOrder(e.target.value));    
    setPage(1);
  };
  return (

    
      
        <div id='demo' className="flex items-center flex-col-reverse justify-center py-2  md:flex-row   " >
             
          <div className="mx-16 flex justify-center   ">

            <div className="m-2 text-yellow-900 text-xs  py-1 border border-yellow-900 rounded-full w-36 text-center flex justify-center ">
              <select  onChange={handleFilterDiets} className="placeholder-gray-500" id="selectdiets" >
                <option disabled selected>DIETS</option>
                <option value='all' >all</option>

                {diets?.map(d =>
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>)
                }
              </select>
            </div>


            <div className="m-2 text-yellow-900 text-xs px-4 py-1 border border-yellow-900 rounded-full w-20 text-center flex justify-center ">
              <select onChange={handlefilterName} className="placeholder-gray-500" id="selectnames">
                <option value="all" disabled selected>NAME</option>
                <option value='asc'>A-Z</option>                
                <option value="des" >Z-A</option>
              </select>
            </div>
            <div className="m-2 text-yellow-900 text-xs px-4 py-1 border border-yellow-900 rounded-full w-28 text-center flex justify-center ">
              <select onChange={handlefilterOrder}  className="placeholder-gray-500 " >
                <option disabled selected>SCORE</option>
                <option value='lh'>lowest-highest</option>
                <option value='hl'>highest-lowest</option>
              </select>
            </div>
          </div>
          <div className="mx-16" >
            <SearchBar />
          </div>
        </div>
        
      

  )

}
export default Filters;