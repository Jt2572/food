import React from 'react';
import { useNavigate } from "react-router-dom";
import background from '../../assets/bg-landing.png'


export default function Landing () {
    const navigate = useNavigate();
    return (
        <>
        <section className="absolute  sm:relative px-28 py-12 ">
          <img
            className="absolute inset-0 object-[7%] sm:object-[25%]  object-cover w-full h-full   "
            src={`${background}?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200`}
            alt="Couple on a bed with a dog"
          />
          
          <div className="hidden  sm:block sm:inset-0 sm:relative " />
          <div className="relative  max-w-screen-xl py-32 md:flex md:justify-end  ">
            <div className=" text-center p-2.5 lg:flex justify-end sm:text-center bg-white opacity-80 rounded-3xl mx-8  md:mx-20 sm:mx-16 lg:mx-40">
              <h1 className="  text-6xl font-bgs font-extrabold text-teal-900  sm:text-7xl">
                Welcome
                <br />
                <div className="text-xl font-medium text-veg-600 sm:block p-1 flex flex-col ">
                  to the best place to eat
                </div>
                <strong className="text-4xl font-dancing text-amber-900 sm:block  ">
                  <div className="text-veg-600  sm:inline-block text-center h-7 ">
                    <div className='flex justify-center'>
                      <p className='text-xs absolute font-castle font-light p-2 ' >
                        - RECIPES FOR EVERYBODY -
                      </p>
                    </div>
  
                    <div className='mt-2 flex justify-center' >
                      <svg version="1.0" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="199.116px" height="16.352px" viewBox="0 0 199.116 16.352" enableBackground="new 0 0 199.116 16.352">
                        <polygon id="XMLID_6840_" fill="#e4d8cb" points="199.116,16.352 0,16.352 6.815,8.176 0,0 199.116,0 192.315,8.176 " />
                      </svg>
                    </div>
  
                  </div>
                  <div className='p-1.5 text-veg '>
                    Are you hungry ?
                  </div>
                </strong>
              <button onClick={() => navigate('/home')} type="button" className="text-white text-sm bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-lg shadow-amber-500/50 dark:shadow-lg dark:shadow-amber-800/70 font-medium rounded-full text-md px-12 py-1.5 text-center mr-2 mb-2">go</button>
              </h1>
    
            </div>
          </div>
        </section>
  
  
      </>

    )
}