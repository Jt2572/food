import React from 'react';
import { useNavigate } from "react-router-dom";
import background from '../../assets/foodlanding02.png'


const Navbar = () => {

  const navigate = useNavigate();

  return (
    
    
    <section className="relative bg-white">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-40 sm:opacity-100"
          src={`${background}?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200`}
          alt="Couple on a bed with a dog"
        />
        <div className="hidden sm:block sm:inset-0 sm:absolute bg-gradient-to-r from-white via-transparent to-transparent " />
        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-6xl font-extrabold text-teal-900 font-comforta-300 sm:text-7xl">
              Welcome
              <br />
              <strong className="text-4xl font-extrabold text-amber-900 sm:block  sm:py-4">
                Hungry ?
              </strong>
            </h1>
            <div className="flex flex-wrap gap-4 mt-8 text-center"></div>
            <div className="max-w-lg sm:leading-relaxed sm:text-xl">
               <button onClick={() => navigate('/home')} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-orange-800/70 font-medium rounded-full text-md px-12 py-1.5 text-center mr-2 mb-2">go</button>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Navbar