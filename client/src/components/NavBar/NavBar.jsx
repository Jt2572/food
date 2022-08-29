import React from 'react';
import background from '../../assets/foodlanding.png'


const Navbar = () => {


  return (
    <header className="bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" >    

      <>
        <section className="relative bg-white">
          <img
            className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full  "
            src={background}
            alt="Couple on a bed with a dog"
          />
          <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent" />
          <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
            <div className="max-w-xl text-center sm:text-left">
              <h1 className="font-extrabold sm:text-7xl">
                <strong className="text-7xl font-extrabold text-teal-900 sm:block">
                  
                Welcome
                </strong>                
                <strong className="text-5xl font-extrabold text-yellow-900 sm:block py-2">
                  hungry ?
                </strong>
              </h1>
              <div className="flex flex-wrap gap-4 mt-8 text-center">
                <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-md px-10 py-2.5 text-center mr-2 mb-2">
                  go
                </button>

              </div>
              <div className="flex flex-wrap gap-4 mt-8 text-center"></div>
              {/* <div className="flex flex-wrap gap-4 mt-8 text-center">
              {isAuthenticated ? (
                <>
                  <Logout />
                </>
              ) : (
                <Login />
              )}
            </div> */}
            </div>
          </div>
        </section>
      </>




    </header>
  )
}

export default Navbar