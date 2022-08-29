import React from 'react';
import background from '../../assets/foodlanding02.png'


const Navbar = () => {


  return (
    <header className="bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" >

      <>
        <section className="relative bg-white">
          <img
            className="absolute inset-0 object-[75%]  object-cover w-full h-full  "
            src={background}
            alt="Couple on a bed with a dog"
          />
          <div className="block inset-0 absolute bg-gradient-to-r from-white via-transparent to-transparent" />
          <div className="relative max-w-screen-xl px-4 py-32 mx-auto h-screen ">
            <div className="max-w-xl text-left">
              <h1 className="flex flex-col justify-start font-extrabold ">
                <strong className="text-5xl sm:text-7xl md:text-8xl mt-4 sm:leading-relaxed text-teal-900  ">
                  Welcome
                </strong>
                <strong className="text-5xl font-extrabold text-amber-900 sm:block py-2">
                  hungry ?
                </strong>
              </h1>
              <div className="flex flex-wrap gap-4 mt-8 text-center">
                <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-orange-800/70 font-medium rounded-full text-md px-10 py-2.5 text-center mr-2 mb-2">
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