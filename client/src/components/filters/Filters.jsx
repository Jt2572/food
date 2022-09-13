import { useState } from "react";
import SearchBar from "../searchbar/SearchBar";

function Filters() {
  
  const [screenWidth, setScreenWidth] = useState(1240)  

  window.addEventListener("resize", function () {
    document.getElementById("demo")
    setScreenWidth(window.innerWidth)
  })
  console.log(screenWidth)

  return (
    
    <div id='demo' className="flex  col items-center justify-around py-2  flex-col md:flex-row   " >
      {screenWidth <= 640
        ?
        <div>
          <div >
            <SearchBar />
          </div>
          <div className="flex justify-center  ">

            <div className="m-2 text-yellow-900 text-xs px-4 py-1 border border-yellow-900 rounded-full w-20 text-center flex justify-center ">
              <select className="placeholder-gray-500 " >
                <option disabled selected>DIETS</option>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
            </div>
            <div className="m-2 text-yellow-900 text-xs px-4 py-1 border border-yellow-900 rounded-full w-20 text-center flex justify-center ">
              <select className="placeholder-gray-500 " >
                <option disabled selected>NAME</option>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
            </div>
            <div className="m-2 text-yellow-900 text-xs px-4 py-1 border border-yellow-900 rounded-full w-20 text-center flex justify-center ">
              <select className="placeholder-gray-500 " >
                <option disabled selected>SCORE</option>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
            </div>
          </div>
        </div>
        :
        <div id='demo' className="flex  col items-center py-2  flex-col md:flex-row    " >
          <div className="mx-16 w-68">
            <div className="flex justify-center w-96  ">

              <div className="m-2 text-yellow-900 text-xs px-4 py-1 border border-yellow-900 rounded-full w-20 text-center flex justify-center ">
                <select className="placeholder-gray-500 " >
                  <option disabled selected>DIETS</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Maybe</option>
                </select>
              </div>
              <div className="m-2 text-yellow-900 text-xs px-4 py-1 border border-yellow-900 rounded-full w-20 text-center flex justify-center ">
                <select className="placeholder-gray-500 " >
                  <option disabled selected>NAME</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Maybe</option>
                </select>
              </div>
              <div className="m-2 text-yellow-900 text-xs px-4 py-1 border border-yellow-900 rounded-full w-20 text-center flex justify-center ">
                <select className="placeholder-gray-500 " >
                  <option disabled selected>SCORE</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Maybe</option>
                </select>
              </div>
            </div>

          </div>

          <div >
            <SearchBar />
          </div>
        </div>
      }

    </div>
  )

}
export default Filters;