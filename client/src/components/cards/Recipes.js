import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes, searchRecipeId } from "../../features/reducers/recipesActions";

function Recipes() {
  const dispatch = useDispatch()
  const { recipes } = useSelector(state => state.recipes)
  

  const [page, setPage] = useState(1);
  const recipesPerPage = 9;
  const end = page * recipesPerPage;
  const start = end - recipesPerPage;
  const totalPages = Math.ceil(recipes.length / recipesPerPage)
  var currentRecipes = {}

  const [ScreenY,] = useState( document.documentElement.scrollTop = 400)
  
  try {

    currentRecipes = recipes?.slice(start, end);

  } catch (error) {
    console.log(error.message)
  }


  useEffect(() => {
    dispatch(getRecipes())

  }, [dispatch])


  const pages = []
  for (var i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleClick = (e) => {
    setPage(e.target.id)
  }

  const renderPages = pages.map(numb => {
    return (
      <div key={numb} className='m-1 text-xs bg-yellow-900 text-amber-50 cursor-pointer border rounded-md h-5 w-6 flex justify-center'
        id={numb} onClick={handleClick}>
        {numb}
      </div>
    )
  })

  const handleDetails = (id) => {
    dispatch(searchRecipeId(id))
  }


  const [UpButton] = document.getElementsByName("UpButton")
  UpButton&&UpButton.addEventListener("click", scrollUp);

  function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - (currentScroll / 75))
    }
  }



  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 500) {
      UpButton&& (UpButton.style.transform = "scale(1)")
    } else {
      UpButton&&(UpButton.style.transform = "scale(0)")
    }
  }

  return (
    <div className="relative">

      <div className="flex flex-col items-center  ">
        {/* {window.scrollBy(0, 10)} */}



        {(typeof currentRecipes[0] === "object") ?

          <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 ">


            {currentRecipes && currentRecipes.map((elem, i) => {
              return (
                <div className="mx-32 my-4 sm:m-3 " key={i}>
                  <div className="w-56 h-full  shadow-lg shadow-current ">
                    <img src={elem.image} alt={elem.name} />
                    <div className="p-4 grid grid-cols-1 gap-0 place-content-around h-44 ">
                      <h5 className=" text-yellow-900 leading-4 text-center mb-2 font-semibold tracking-tight  ">{elem.name}</h5>

                      <div className=" border border-yellow-900 p-1 rounded-full text-yellow-900 text-center text-xs leading-3 flex justify-center   " >
                        {elem.dietTypes.map(d =>
                          `${d}, `
                        )}
                      </div>

                      <div className="flex justify-center pt-4">
                        <Link to={"/details"} >

                          <button type="button" className="flex justify-center items-center py-1 text-xs px-3 ml-2   text-amber-50 rounded-lg  bg-yellow-900 hover:bg-gradient-to-bl focus:outline-none" onClick={() => handleDetails(elem.id)}>
                            Details  <svg aria-hidden="true" className="ml-2 -mr-1 w-3 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          </button>
                        </Link>
                      </div >
                    </div>
                  </div>
                </div>
              )
            })}

          </div>

          :
          
          <div class="flex items-center justify-center h-[25rem] ">
            <div class="border-t-transparent border-solid animate-spin  rounded-full border-yellow-900 border-8 h-16 w-16"></div>
          </div>
          // <div className="">no recipe with that name found</div>

        }


        <div value={page} className='flex justify-center p-4'>

          {renderPages}

        </div>
        {ScreenY > 350 && currentRecipes.length &&
          <div name="UpButton" className="flex justify-end w-full z-10  fixed bottom-16 ">
            <div name="UpButton" className=" bg-amber-500 rounded pl-[.35rem] pr-[.35rem] pt-[.15rem] pb-[.15rem] mr-8 cursor-pointer select-none	hover:scale-150 hover:transition ease-in-out delay-150 ">^</div>
          </div>

        }
      </div>


    </div>
  )
}
export default Recipes;